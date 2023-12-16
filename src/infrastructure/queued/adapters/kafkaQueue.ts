import { IOrm } from 'lambdaorm'
import { Kafka, Partitioners, Consumer } from 'kafkajs'
import { Logger, Queue } from '../../../application'
import { v4 as uuidv4 } from 'uuid'
import { h3lp } from 'h3lp'
import { ConsumerInfo, QueueExecuteArgs, QueuedInfo } from '../../../domain'

// Doc: https://kafka.js.org/docs/configuration
export class KafkaQueue implements Queue {
	public kafka:Kafka|null
	public consumers:any[] = []
	constructor (private readonly orm: IOrm, private readonly logger:Logger) {
		this.kafka = null
		this.consumers = []
	}

	public async start (queuedInfo:QueuedInfo): Promise<void> {
		if (h3lp.val.isEmpty(queuedInfo)) {
			throw new Error('queuedInfo undefined')
		}
		if (h3lp.val.isEmpty(queuedInfo.config)) {
			throw new Error('queuedInfo.config undefined')
		}
		this.logger.info(`kafka config: ${JSON.stringify(queuedInfo.config)}`)
		this.kafka = new Kafka(queuedInfo.config)

		if (queuedInfo.consumers) {
			const promises = []
			for (const consumer of queuedInfo.consumers) {
				promises.push(this.createConsumer(consumer))
			}
			Promise.all(promises).then((instances) => {
				this.consumers = instances
			})
		}
		this.logger.info('kafka started')
	}

	public async stop (): Promise<void> {
		this.logger.info('kafka stopped')
	}

	private async createConsumer (consumerInfo:ConsumerInfo): Promise<Consumer> {
		if (!this.kafka) {
			throw new Error('kafka undefined')
		}
		const _consumer = this.kafka.consumer(consumerInfo.config)
		await _consumer.connect()
		await _consumer.subscribe(consumerInfo.subscribe)
		await _consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				try {
					const value = message.value instanceof Buffer ? message.value.toString() : message.value || ''
					const msg = JSON.parse(value)
					await this.orm.expressions.evalAsync(msg.expression, { message: msg, topic, partition })
				} catch (error) {
					this.logger.error(error)
				}
			}
		})
		return _consumer
	}

	public execute (args:QueueExecuteArgs): string {
		if (!this.kafka) {
			throw new Error('kafka undefined')
		}
		if (!args.topic) {
			throw new Error('topic undefined')
		}
		const queueId = uuidv4()
		// TODO: evaluate use of worker_threads to execute in background
		this.executeInBackground(queueId, args)
		return queueId
	}

	public async send (topic:string, messages:any[]): Promise<void> {
		if (!this.kafka) {
			throw new Error('kafka undefined')
		}
		try {
			const producer = this.kafka.producer({
				allowAutoTopicCreation: true,
				createPartitioner: Partitioners.DefaultPartitioner
			})
			const _messages = []
			for (const message of messages) {
				_messages.push({ value: JSON.stringify(message) })
			}
			await producer.connect()
			await producer.send({ topic, messages: _messages })
			await producer.disconnect()
		} catch (error) {
			this.logger.error(error)
		}
	}

	public async executeInBackground (queueId:string, args:QueueExecuteArgs): Promise<void> {
		try {
			try {
				const result = await this.orm.execute(args.expression, args.data, args.options)
				const headers:any = {}
				if (args.options !== undefined && args.options.headers !== undefined) {
					for (const entry of Object.entries(args.options.headers)) {
						headers[entry[0]] = JSON.stringify(entry[1])
					}
				}
				const messages = []
				const chunks = h3lp.array.chunks(result, args.chunk || result.length)
				for (let i = 0; i < chunks.length; i++) {
					headers.chunkNro = i.toString()
					messages.push({
						key: `${queueId}-${i}`,
						value: JSON.stringify(chunks[i]),
						headers
					})
				}
				if (this.kafka === null) {
					throw new Error('kafka undefined')
				}
				const producer = this.kafka?.producer({
					allowAutoTopicCreation: true,
					createPartitioner: Partitioners.DefaultPartitioner
				})
				await producer.connect()
				await producer.send({ topic: args.topic, messages })
				await producer.disconnect()
			} catch (e:any) {
				this.logger.info(`executed.queued: ${queueId} error: ${e.message || ' undefined'}`)
			}
		} catch (e:any) {
			this.logger.info(`executed.queued: ${queueId} error: ${e.message || ' undefined'}`)
		}
	}
}

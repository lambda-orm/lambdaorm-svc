import { Kafka, Partitioners } from 'kafkajs'
import { IOrm } from 'lambdaorm'

export class KafkaLibrary {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm:IOrm, private readonly kafka:Kafka) {}

	public async load (): Promise<void> {
		this.orm.expressions.addFunction('sendMessage(topic:string,messages:any[]):void', async (topic:string, messages:any[]) => {
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
				console.log(error)
			}
		})
	}
}

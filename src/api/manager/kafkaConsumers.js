const { orm } = require('lambdaorm')
const { h3lp } = require('lambdaorm')
const KafkaConsumers = class KafkaConsumers {
	constructor(kafka) {
		this.kafka = kafka
	}

	async start(consumers) {
		const promises = []
		for (const consumer of consumers) {
			promises.push(this.createConsumer(consumer))
		}
		Promise.all(promises).then((instances) => {
			this.consumers = instances
		})
	}

	async createConsumer(consumer) {
		const _consumer = this.kafka.consumer(consumer.config)
		await _consumer.connect()
		await _consumer.subscribe(consumer.subscribe)
		await _consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				try {
					const msg = JSON.parse(message.value.toString())
					await orm.execute(msg.expression, msg.data, msg.options)
				} catch (error) {
					console.error(error)
				}
			}
		})
		return _consumer
	}
}

module.exports = {
	KafkaConsumers
}
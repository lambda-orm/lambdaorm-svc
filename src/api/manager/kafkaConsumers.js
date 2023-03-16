const { orm } = require('lambdaorm')
const KafkaConsumers = class KafkaConsumers {
	constructor(kafka) {
		this.kafka = kafka
	}

	async start(listeners) {
		const promises = []
		for (const listener of listeners) {
			promises.push(this.createConsumer(listener))
		}
		Promise.all(promises).then((consumers) => {
			this.consumers = consumers
		})
	}

	async createConsumer(listener) {
		const consumer = this.kafka.consumer(listener.consumer)
		await consumer.connect()
		await consumer.subscribe(listener.subscribe)
		await consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				const msg = message.value
				const query = { expression: msg.expression, data: msg.data, options: msg.options }
				await orm.execute(query)
				// console.log({
				// 	partition,
				// 	offset: message.offset,
				// 	value: message.value.toString(),
				// })
			}
		})
		return consumer
	}
}

module.exports = {
	KafkaConsumers
}
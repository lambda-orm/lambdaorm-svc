const { CompressionTypes } = require('kafkajs')
const KafkaLibrary = class KafkaLibrary {
	constructor(model, producer) {
		this.model = model
		this.producer = producer
	}

	load() {
		this.model.addFunction('sendMessage(topic:string,messages:any[]):void', async (topic, messages) => {
			try {
				const _messages = []
				for (const message of messages) {
					_messages.push({ value: JSON.stringify(message) })
				}
				await this.producer.connect()
				await this.producer.send({ topic: topic, messages: _messages, compression: CompressionTypes.JSON })
				await this.producer.disconnect()
			} catch (error) {
				console.log(error)
			}
		})
	}
}

module.exports = {
	KafkaLibrary
}
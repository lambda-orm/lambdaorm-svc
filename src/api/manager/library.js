const { Partitioners } = require('kafkajs')
const KafkaLibrary = class KafkaLibrary {
	constructor(model, kafka) {
		this.model = model
		this.kafka = kafka
	}

	load() {
		this.model.addFunction('sendMessage(topic:string,messages:any[]):void', async (topic, messages) => {
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
				await producer.send({ topic: topic, messages: _messages })
				await producer.disconnect()
			} catch (error) {
				console.log(error)
			}
		})
	}
}

module.exports = {
	KafkaLibrary
}
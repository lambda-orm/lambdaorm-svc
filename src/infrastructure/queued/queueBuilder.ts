import { IOrm } from 'lambdaorm'
import { Logger, Queue } from '../../application'
import { KafkaQueue } from './adapters/kafkaQueue'
import { QueueLibrary } from './queueLibrary'

export class QueueBuilder {
	public build (orm:IOrm, logger: Logger): Queue {
		const queue = new KafkaQueue(orm, logger)
		new QueueLibrary(orm, queue).load()
		return queue
	}
}

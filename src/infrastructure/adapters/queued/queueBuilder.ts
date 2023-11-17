import { IOrm } from 'lambdaorm'
import { Logger, Queue } from '../../../application'
import { KafkaQueue } from './kafka/kafkaQueue'

export class QueueBuilder {
	public build (orm:IOrm, logger: Logger): Queue {
		return new KafkaQueue(orm, logger)
	}
}

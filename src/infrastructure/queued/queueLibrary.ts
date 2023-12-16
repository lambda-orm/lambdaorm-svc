import { Queue } from '../../application/ports'
import { IOrm } from 'lambdaorm'

export class QueueLibrary {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm:IOrm, private readonly queue:Queue) {}

	public async load (): Promise<void> {
		this.orm.expressions.addFunction('queue.send(topic:string,messages:any[]):void', async (topic:string, messages:any[]) => {
			return this.queue.send(topic, messages)
		}, { async: true })
	}
}

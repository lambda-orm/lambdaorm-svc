import { IOrm } from 'lambdaorm'
export class GeneralService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm?: IOrm) { }

	public async health ():Promise<any> {
		// TODO: add health on ORM
		if (!this.orm || !this.orm.schema || !this.orm.schema.schema || !this.orm.schema.schema.infrastructure) {
			throw new Error('Lambda ORM not initialized')
		}
		if (!this.orm.schema.schema.infrastructure.stages || this.orm.schema.schema.infrastructure.stages.length === 0) {
			throw new Error('Lambda ORM can\'t stages not initialized')
		}
		if (!this.orm.schema.schema.infrastructure.sources || this.orm.schema.schema.infrastructure.sources.length === 0) {
			throw new Error('Lambda ORM can\'t sources not initialized')
		}
		return {
			uptime: process.uptime(),
			message: 'OK',
			time: new Date().toISOString()
		}
	}

	public async ping ():Promise<any> {
		return {
			message: 'pong',
			time: new Date().toISOString()
		}
	}
}
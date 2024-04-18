import { IOrm } from 'lambdaorm'
export class GeneralService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly packageVersion:string, private readonly orm?: IOrm) { }

	public async version (): Promise<{version:string}> {
		return { version: this.packageVersion }
	}

	public async health ():Promise<any> {
		// TODO: add health on ORM
		if (!this.orm || !this.orm.state || !this.orm.state.schema || !this.orm.state.schema.infrastructure) {
			throw new Error('Lambda ORM not initialized')
		}
		if (!this.orm.state.schema.infrastructure.stages || this.orm.state.schema.infrastructure.stages.length === 0) {
			throw new Error('Lambda ORM can\'t stages not initialized')
		}
		if (!this.orm.state.schema.infrastructure.sources || this.orm.state.schema.infrastructure.sources.length === 0) {
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

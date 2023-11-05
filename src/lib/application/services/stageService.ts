import { IOrm, SchemaConfig } from 'lambdaorm'
export class StageService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async list (): Promise<string[]> {
		return this.orm.schema.stage.stages.map(p => p.name)
	}

	public async exists ({ stage }:{ stage:string }): Promise<boolean> {
		return this.orm.stage.exists(stage)
	}

	public async export ({ stage }:{ stage:string }): Promise<SchemaConfig> {
		return this.orm.stage.export({ stage }).execute()
	}

	public async import ({ stage, schemaData }:{ stage:string, schemaData:any }): Promise<void> {
		return this.orm.stage.import({ stage }).execute(schemaData)
	}
}

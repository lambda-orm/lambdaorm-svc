import { IOrm, Metadata, MetadataConstraint, MetadataModel, MetadataParameter, QueryPlan, QueryOptions } from 'lambdaorm'
export class QueryService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async constraints ({ body }: { body: {query:string} }): Promise<MetadataConstraint> {
		return this.orm.constraints(body.query)
	}

	public async metadata ({ body }: { body: {query:string} }): Promise<Metadata> {
		return this.orm.metadata(body.query)
	}

	public async model ({ body }: { body: {query:string} }): Promise<MetadataModel[]> {
		return this.orm.model(body.query)
	}

	public async parameters ({ body }: { body: {query:string} }): Promise<MetadataParameter[]> {
		return this.orm.parameters(body.query)
	}

	public async plan ({ body }: { body: {query:string, options?:QueryOptions} }): Promise<QueryPlan> {
		return this.orm.plan(body.query, body.options)
	}

	public async execute ({ body }: { body: {query:string, data:any, options?:QueryOptions} }): Promise<any> {
		return this.orm.execute(body.query, body.data, body.options)
	}
}

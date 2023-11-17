import { IOrm, Metadata, MetadataConstraint, MetadataModel, MetadataParameter, QueryInfo, QueryOptions } from 'lambdaorm'
export class ExpressionService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async constraints ({ body }: { body: {expression:string} }): Promise<MetadataConstraint> {
		return this.orm.constraints(body.expression)
	}

	public async metadata ({ body }: { body: {expression:string} }): Promise<Metadata> {
		return this.orm.metadata(body.expression)
	}

	public async model ({ body }: { body: {expression:string} }): Promise<MetadataModel[]> {
		return this.orm.model(body.expression)
	}

	public async parameters ({ body }: { body: {expression:string} }): Promise<MetadataParameter[]> {
		return this.orm.parameters(body.expression)
	}

	public async sentence ({ body }: { body: {expression:string, options?:QueryOptions} }): Promise<QueryInfo> {
		return this.orm.getInfo(body.expression, body.options)
	}

	public async execute ({ body }: { body: {expression:string, data:any, options?:QueryOptions} }): Promise<any> {
		return this.orm.execute(body.expression, body.data, body.options)
	}
}

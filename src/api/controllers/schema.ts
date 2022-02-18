import { Get, Tags, SuccessResponse, Route } from 'tsoa'
import { orm, Entity, Enum, DataSource, Stage, Mapping } from 'lambdaorm'

@Route('schema')
export default class SchemaController {
	@Tags('schema')
	@Get('/entities')
	@SuccessResponse('200', 'Ok')
	public async entities (): Promise<Entity[]> {
		return orm.schema.model.entities
	}

	@Tags('schema')
	@Get('/enums')
	@SuccessResponse('200', 'Ok')
	public async enums (): Promise<Enum[]> {
		return orm.schema.model.enums
	}

	@Tags('schema')
	@Get('/datasources')
	@SuccessResponse('200', 'Ok')
	public async dataSources (): Promise<DataSource[]> {
		const result: DataSource[] = []
		const sources = orm.schema.dataSource.dataSources
		for (const i in sources) {
			const source = sources[i]
			result.push({ name: source.name, dialect: source.dialect, mapping: source.mapping, connection: '***' })
		}
		return result
	}

	@Tags('schema')
	@Get('/mappings')
	@SuccessResponse('200', 'Ok')
	public async mappings (): Promise<Mapping[]> {
		return orm.schema.mapping.mappings
	}

	@Tags('schema')
	@Get('/stages')
	@SuccessResponse('200', 'Ok')
	public async stages (): Promise<Stage[]> {
		return orm.schema.stage.stages
	}
}

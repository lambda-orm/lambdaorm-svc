import { Entity, EntityMapping, Enum, IOrm, Mapping, Stage, DomainSchema, Schema } from 'lambdaorm'
export class SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async version (): Promise<{version:string}> {
		return this.orm.state.getSchemaVersion()
	}

	public async domain (): Promise<DomainSchema> {
		return this.orm.state.getSchemaDomain()
	}

	public async schema (): Promise<Schema> {
		return {
			version: this.orm.state.getSchemaVersion().version,
			domain: this.orm.state.getSchemaDomain(),
			infrastructure: undefined,
			application: undefined
		}
	}

	public async sources (): Promise<{name:string, dialect:string}[]> {
		return this.orm.state.getSchemaSources()
	}

	public async source ({ source }:{ source:string }): Promise<{name:string, dialect:string}> {
		return this.orm.state.getSchemaSource(source)
	}

	public async entities (): Promise<Entity[]> {
		return this.orm.state.getSchemaEntities()
	}

	public async entity ({ entity }:{ entity:string }): Promise<Entity|undefined> {
		return this.orm.state.getSchemaEntity(entity)
	}

	public async enums (): Promise<Enum[]> {
		return this.orm.state.getSchemaEnums()
	}

	public async enum ({ _enum }:{ _enum:string }): Promise<Enum|undefined> {
		return this.orm.state.getSchemaEnum(_enum)
	}

	public async mappings (): Promise<Mapping[]> {
		return this.orm.state.getSchemaMappings()
	}

	public async mapping ({ mapping }:{ mapping:string }): Promise<Mapping|undefined> {
		return this.orm.state.getSchemaMapping(mapping)
	}

	public async entityMapping ({ mapping, entity }:{ mapping:string, entity:string }): Promise<EntityMapping|undefined> {
		return this.orm.state.getSchemaEntityMapping(mapping, entity)
	}

	public async stages (): Promise<Stage[]> {
		return this.orm.state.getSchemaStages()
	}

	public async stage ({ stage }:{ stage:string }): Promise<Stage|undefined> {
		return this.orm.state.getSchemaStage(stage)
	}

	public async views (): Promise<string[]> {
		return this.orm.state.getSchemaViews()
	}
}

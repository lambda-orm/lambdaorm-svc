import { Entity, EntityMapping, Enum, IOrm, Mapping, Stage } from 'lambdaorm'
export class SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async dataSources (): Promise<{name:string, dialect:string}[]> {
		return this.orm.schema.schema.infrastructure.sources
			.map(p => ({ name: p.name, dialect: p.dialect as string }))
	}

	public async dataSource ({ datasource }:{ datasource:string }): Promise<{name:string, dialect:string}[]> {
		return this.orm.schema.schema.infrastructure.sources
			.filter(p => p.name === datasource)
			.map(p => ({ name: p.name, dialect: p.dialect as string }))
	}

	public async entities (): Promise<Entity[]> {
		return this.orm.schema.domain.entities
	}

	public async entity ({ entity }:{ entity:string }): Promise<Entity|undefined> {
		return this.orm.schema.domain.entities.find(p => p.name === entity)
	}

	public async enums (): Promise<Enum[]> {
		return this.orm.schema.domain.enums
	}

	public async enum ({ _enum }:{ _enum:string }): Promise<Enum|undefined> {
		return this.orm.schema.domain.enums.find(p => p.name === _enum)
	}

	public async mappings (): Promise<Mapping[]> {
		return this.orm.schema.mapping.mappings
	}

	public async mapping ({ mapping }:{ mapping:string }): Promise<Mapping|undefined> {
		return this.orm.schema.mapping.mappings.find(p => p.name === mapping)
	}

	public async entityMapping ({ mapping, entity }:{ mapping:string, entity:string }): Promise<EntityMapping|undefined> {
		const _mapping = this.orm.schema.mapping.mappings.find(p => p.name === mapping)
		return _mapping ? _mapping.entities.find(p => p.name === entity) : undefined
	}

	public async stages (): Promise<Stage[]> {
		return this.orm.schema.stage.stages
	}

	public async stage ({ stage }:{ stage:string }): Promise<Stage|undefined> {
		return this.orm.schema.stage.stages.find(p => p.name === stage)
	}
}

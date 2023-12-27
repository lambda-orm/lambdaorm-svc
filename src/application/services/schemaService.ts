import { Entity, EntityMapping, Enum, IOrm, Mapping, Stage, DomainSchema, Schema } from 'lambdaorm'
export class SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async version (): Promise<{version:string}> {
		return { version: this.orm.schema.schema.version || '0.0.0' }
	}

	public async domain (): Promise<DomainSchema> {
		return this.orm.schema.schema.domain
	}

	public async schema (): Promise<Schema> {
		return {
			version: this.orm.schema.schema.version || '0.0.0',
			domain: this.orm.schema.schema.domain,
			infrastructure: undefined,
			application: undefined
		}
	}

	public async sources (): Promise<{name:string, dialect:string}[]> {
		if (!this.orm.schema.schema.infrastructure || !this.orm.schema.schema.infrastructure.sources) {
			return []
		}
		return this.orm.schema.schema.infrastructure.sources
			.map(p => ({ name: p.name, dialect: p.dialect as string }))
	}

	public async source ({ source }:{ source:string }): Promise<{name:string, dialect:string}[]> {
		if (!this.orm.schema.schema.infrastructure || !this.orm.schema.schema.infrastructure.sources) {
			return []
		}
		return this.orm.schema.schema.infrastructure.sources
			.filter(p => p.name === source)
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

	public async views (): Promise<string[]> {
		if (!this.orm.schema.schema.infrastructure || !this.orm.schema.schema.infrastructure.views) {
			return []
		}
		return this.orm.schema.schema.infrastructure.views.map(p => p.name)
	}
}

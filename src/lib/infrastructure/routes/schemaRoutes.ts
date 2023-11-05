import express from 'express'
import { SchemaController } from '../controllers'
import { SchemaService } from '../../application'

export class SchemaRoutes {
	private readonly controller: SchemaController
	constructor (service: SchemaService) {
		this.controller = new SchemaController(service)
	}

	public getRoutes ():express.Router {
		const router = express.Router()
		router.get('/dataSource/:dataSource', this.controller.dataSource.bind(this.controller))
		router.get('/dataSources', this.controller.dataSources.bind(this.controller))
		router.get('/entities', this.controller.entities.bind(this.controller))
		router.get('/entities/:entity', this.controller.entity.bind(this.controller))
		router.get('/mappings/:mapping/:entity', this.controller.entityMapping.bind(this.controller))
		router.get('/enums', this.controller.enums.bind(this.controller))
		router.get('/enums/:enum', this.controller.enum.bind(this.controller))
		router.get('/mappings', this.controller.mappings.bind(this.controller))
		router.get('/mappings/:mapping', this.controller.mapping.bind(this.controller))
		router.get('/stages', this.controller.stages.bind(this.controller))
		router.get('/stages/:stage', this.controller.stage.bind(this.controller))
		return router
	}
}

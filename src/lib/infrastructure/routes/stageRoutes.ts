import express from 'express'
import { StageController } from '../controllers'
import { StageService } from '../../application'

export class StageRoutes {
	private readonly controller: StageController
	constructor (service: StageService) {
		this.controller = new StageController(service)
	}

	public getRoutes ():express.Router {
		const router = express.Router()
		router.get('/stages/:stage/exists', this.controller.exists.bind(this.controller))
		router.get('/stages/:stage/export', this.controller.export.bind(this.controller))
		router.post('/stages/:stage/import', this.controller.import.bind(this.controller))
		return router
	}
}

import express from 'express'
import { GeneralController } from '../controllers'
import { GeneralService, Metric } from '../../application'

export class GeneralRoutes {
	private readonly controller: GeneralController
	constructor (service: GeneralService, metric: Metric) {
		this.controller = new GeneralController(service, metric)
	}

	public getRoutes ():express.Router {
		const router = express.Router()
		router.get('/version', this.controller.version.bind(this.controller))
		router.get('/health', this.controller.health.bind(this.controller))
		router.get('/ping', this.controller.ping.bind(this.controller))
		router.get('/metrics', this.controller.metrics.bind(this.controller))
		return router
	}
}

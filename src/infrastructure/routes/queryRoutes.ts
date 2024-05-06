import express from 'express'
import { QueryController } from '../controllers'
import { QueryService, Queue } from '../../application'

export class QueryRoutes {
	private readonly controller: QueryController
	constructor (service: QueryService, queue?: Queue) {
		this.controller = new QueryController(service, queue)
	}

	public getRoutes ():express.Router {
		const router = express.Router()
		router.post('/constraints', this.controller.constraints.bind(this.controller))
		router.post('/execute', this.controller.execute.bind(this.controller))
		router.post('/execute-queued', this.controller.executeQueued.bind(this.controller))
		router.post('/metadata', this.controller.metadata.bind(this.controller))
		router.post('/model', this.controller.model.bind(this.controller))
		router.post('/parameters', this.controller.parameters.bind(this.controller))
		router.post('/plan', this.controller.plan.bind(this.controller))
		return router
	}
}

import express from 'express'
import { ExpressionController } from '../controllers'
import { ExpressionService, Queue } from '../../application'

export class ExpressionRoutes {
	private readonly controller: ExpressionController
	constructor (service: ExpressionService, queue?: Queue) {
		this.controller = new ExpressionController(service, queue)
	}

	public getRoutes ():express.Router {
		const router = express.Router()
		router.post('/constraints', this.controller.constraints.bind(this.controller))
		router.post('/execute', this.controller.execute.bind(this.controller))
		router.post('/execute-queued', this.controller.executeQueued.bind(this.controller))
		router.post('/metadata', this.controller.metadata.bind(this.controller))
		router.post('/model', this.controller.model.bind(this.controller))
		router.post('/parameters', this.controller.parameters.bind(this.controller))
		router.post('/sentence', this.controller.sentence.bind(this.controller))
		return router
	}
}

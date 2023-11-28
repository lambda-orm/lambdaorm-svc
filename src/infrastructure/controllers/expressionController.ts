import { Request, Response } from 'express'
import { Controller } from './Controller'
import { ExpressionService, Queue } from '../../application'

export class ExpressionController extends Controller {
	constructor (private readonly service: ExpressionService, private readonly queue?: Queue) {
		super()
	}

	public async constraints (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.constraints.bind(this.service))
	}

	public async execute (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.execute.bind(this.service))
	}

	public async executeQueued (request: Request, response: Response) {
		if (!this.queue) {
			throw new Error('queue undefined')
		}
		await this.handleRequest(request, response, this.queue.execute.bind(this.queue))
	}

	public async metadata (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.metadata.bind(this.service))
	}

	public async model (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.model.bind(this.service))
	}

	public async parameters (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.parameters.bind(this.service))
	}

	public async plan (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.plan.bind(this.service))
	}
}

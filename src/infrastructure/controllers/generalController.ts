import { Request, Response } from 'express'
import { Controller } from './Controller'
import { GeneralService, Metric } from '../../application'

export class GeneralController extends Controller {
	constructor (private readonly service: GeneralService, private readonly metric: Metric) {
		super()
	}

	public async version (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.version.bind(this.service))
	}

	public async health (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.health.bind(this.service))
	}

	public async ping (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.ping.bind(this.service))
	}

	public async metrics (request: Request, response: Response) {
		await this.handleRequest(request, response, this.metric.metrics.bind(this.metric))
	}
}

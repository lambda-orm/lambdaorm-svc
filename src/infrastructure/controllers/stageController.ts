import { Request, Response } from 'express'
import { Controller } from './Controller'
import { StageService } from '../../application'

export class StageController extends Controller {
	constructor (private readonly service: StageService) {
		super()
	}

	public async list (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.list.bind(this.service))
	}

	public async exists (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.exists.bind(this.service))
	}

	public async export (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.export.bind(this.service))
	}

	public async import (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.import.bind(this.service))
	}
}

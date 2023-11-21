import { Request, Response } from 'express'
import { Controller } from './Controller'
import { SchemaService } from '../../application'

export class SchemaController extends Controller {
	constructor (private readonly service: SchemaService) {
		super()
	}

	public async domain (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.domain.bind(this.service))
	}

	public async dataSource (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.dataSource.bind(this.service))
	}

	public async dataSources (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.dataSources.bind(this.service))
	}

	public async entities (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.entities.bind(this.service))
	}

	public async entity (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.entity.bind(this.service))
	}

	public async entityMapping (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.entityMapping.bind(this.service))
	}

	public async enums (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.enums.bind(this.service))
	}

	public async enum (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.enum.bind(this.service))
	}

	public async mappings (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.mappings.bind(this.service))
	}

	public async mapping (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.mapping.bind(this.service))
	}

	public async stages (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.stages.bind(this.service))
	}

	public async stage (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.stage.bind(this.service))
	}

	public async views (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.views.bind(this.service))
	}
}

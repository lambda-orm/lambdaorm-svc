import { Request, Response } from 'express'
import { Controller } from './Controller'
import { SchemaService } from '../../application'

export class SchemaController extends Controller {
	constructor (private readonly service: SchemaService) {
		super()
	}

	public async version (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.version.bind(this.service))
	}

	public async schema (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.schema.bind(this.service))
	}

	public async domain (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.domain.bind(this.service))
	}

	public async source (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.source.bind(this.service))
	}

	public async sources (request: Request, response: Response) {
		await this.handleRequest(request, response, this.service.sources.bind(this.service))
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

import { InfrastructureSchema, Schema } from 'lambdaorm'
import { QueuedInfo } from './queuedInfo'

export interface ServiceConfig {
	port?: number
	host?: string
	requestBodySize?: string
	rateLimitWindowMs?: string
	rateLimitMax?: string
}

export interface ServiceInfrastructureSchema extends InfrastructureSchema {
	service: ServiceConfig
	queue: QueuedInfo
}

export interface ServiceSchema extends Schema {
	infrastructure: ServiceInfrastructureSchema
}

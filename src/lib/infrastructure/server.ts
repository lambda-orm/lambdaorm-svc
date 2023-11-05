import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'
import { h3lp } from 'h3lp'
import { GeneralService, SchemaService, ExpressionService, StageService, Queue, Logger } from '../application'
import { MetricBuilder, LoggerBuilder, QueueBuilder } from './adapters'
import { GeneralRoutes, SchemaRoutes, ExpressionRoutes, StageRoutes } from './routes'
import { OrmBuilder } from './orm'
import path from 'path'
import http from 'http'
import { IOrm } from 'lambdaorm'
import { ServiceSchema, ServiceConfig } from '../domain'
const YAML = require('js-yaml')

export class Server {
	private app: express.Express | undefined
	private server: http.Server | undefined
	private orm: IOrm | undefined
	private queue: Queue | undefined
	private schema:ServiceSchema | undefined
	public config: ServiceConfig | undefined
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly logger:Logger = new LoggerBuilder().build()) {}

	public async start () {
		this.app = express()
		try {
			this.orm = new OrmBuilder().build(this.logger)
			this.schema = await this.orm.init() as ServiceSchema
			this.config = this.schema.infrastructure.service || {}
			if (this.schema.infrastructure.queue) {
				this.queue = new QueueBuilder().build(this.orm, this.logger)
				this.queue.start(this.schema.infrastructure.queue)
			}
			// TODO: solver metrics
			// this.app.use(metric.after)
			this.app.use('/api', new ExpressionRoutes(new ExpressionService(this.orm), this.queue).getRoutes())
			this.app.use('/api', new SchemaRoutes(new SchemaService(this.orm)).getRoutes())
			this.app.use('/api', new StageRoutes(new StageService(this.orm)).getRoutes())
		} catch (error: any) {
			this.logger.error(error.message)
		}
		const port = this.config?.port || process.env.PORT || 80
		const host = this.config?.host || process.env.HOST || 'http://localhost'
		const requestBodySize = this.config?.requestBodySize || process.env.REQUEST_BODY_SIZE || '14MB'
		const rateLimitWindowMs = parseInt(this.config?.rateLimitWindowMs || process.env.RATE_LIMIT_WINDOWS_MS || '30000')
		const rateLimitMax = parseInt(this.config?.rateLimitMax || process.env.RATE_LIMIT_MAX || '30')
		const swagger = YAML.load(await h3lp.fs.read(path.join(__dirname, './swagger.yaml')))
		swagger.servers = [{ description: 'default', url: `${host}:${port}` }]
		this.app.use(bodyParser.json({ limit: requestBodySize }))
		this.app.use(cors())
		this.app.use(this.rateLimit(rateLimitWindowMs, rateLimitMax))
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cookieParser())
		const metric = new MetricBuilder().build()
		this.app.use('/api', new GeneralRoutes(new GeneralService(this.orm), metric).getRoutes())
		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
		this.app.use('/', swaggerUi.serve, swaggerUi.setup(swagger))
		this.server = http.createServer(this.app).listen(port, async () => {
			this.logger.info(`Server running at: ${host}:${port}/api-docs`)
		})
	}

	private rateLimit (rateLimitWindowMs:number, rateLimitMax:number) {
		return rateLimit({
			windowMs: rateLimitWindowMs,
			max: rateLimitMax, // Limit each IP to 30 requests per `window` (here, per 30 seconds)
			standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
			legacyHeaders: false // Disable the `X-RateLimit-*` headers
		})
	}

	public async stop () {
		try {
			if (this.server !== undefined) {
				this.server.close()
				this.logger.info(`Server on port ${this.config?.port} shut down`)
			}
			if (this.queue !== undefined) {
				await this.queue.stop()
			}
			if (this.orm !== undefined) {
				await this.orm.end()
			}
		} catch (error: any) {
			this.logger.error(error.message)
		}
	}
}

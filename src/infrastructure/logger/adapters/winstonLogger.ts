import { Logger } from '../../../application/ports/logger'
const { transports, createLogger, format } = require('winston')

export class WinstonLogger implements Logger {
	private readonly logger: any
	constructor () {
		this.logger = createLogger({
			level: 'info',
			format: format.combine(
				format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
				// utilFormatter(), // <-- this is what changed
				format.colorize(),
				format.printf(({ level, message, label, timestamp }: { level: string, message: string, label?: string, timestamp: string }) =>
					`${timestamp} ${label || '-'} ${level}: ${message}`
				)
			),
			defaultMeta: { service: 'user-service' },
			transports: [
				new transports.Console({ timestamp: true }),
				new transports.File({ filename: 'error.log', level: 'error', timestamp: true }),
				new transports.File({ filename: 'combined.log', timestamp: true })
			]
		})
		if (process.env.NODE_ENV !== 'production') {
			this.logger.add(new transports.Console({ format: format.simple() }))
		}
	}

	public async info (message: string): Promise<void> {
		this.logger.info(message)
	}

	public async error (message: string|any):Promise<void> {
		if (typeof message === 'string') {
			this.logger('error', message)
		} else if (message instanceof Error) {
			this.logger('error', message.message)
		} else if (message instanceof Object) {
			this.logger('error', JSON.stringify(message))
		} else {
			this.logger('error', message.toISOString())
		}
	}
}

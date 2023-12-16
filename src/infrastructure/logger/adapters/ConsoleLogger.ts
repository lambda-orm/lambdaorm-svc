import { Logger } from '../../../application/ports/logger'

export class ConsoleLogger implements Logger {
	private log (level:string, message:string) {
		console.log(`${new Date().toISOString()} ${level.toUpperCase()}: ${message}`)
	}

	public async error (message: string|any): Promise<void> {
		if (typeof message === 'string') {
			this.log('error', message)
		} else if (message instanceof Error) {
			this.log('error', message.message)
		} else if (message instanceof Object) {
			this.log('error', JSON.stringify(message))
		} else {
			this.log('error', message.toISOString())
		}
	}

	public async info (message: string): Promise<void> {
		this.log('info', message)
	}
}

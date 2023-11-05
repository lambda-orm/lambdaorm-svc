import { Logger } from '../../../application/ports/logger'

export class ConsoleLogger implements Logger {
	private log (level:string, message:string) {
		console.log(`${new Date().toISOString()} ${level.toUpperCase()}: ${message}`)
	}

	public async error (message: string): Promise<void> {
		this.log('error', message)
	}

	public async info (message: string): Promise<void> {
		this.log('info', message)
	}
}

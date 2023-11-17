import { Logger } from '../../../application/ports/logger'
import { ConsoleLogger } from './ConsoleLogger'

export class LoggerBuilder {
	public build (): Logger {
		return new ConsoleLogger()
	}
}

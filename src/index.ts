import { LoggerBuilder } from 'infrastructure/logger/loggerBuilder'
import { Server } from './infrastructure/server'
const logger = new LoggerBuilder().build()
const start = async () => {
	let server:Server | undefined
	try {
		server = new Server(logger)
		await server.start()
	} catch (error:any) {
		logger.error(`Express Server failure: ${error.message}`)
		await server?.stop()
	}
}
start().catch((error) => {
	logger.error(error.message)
})

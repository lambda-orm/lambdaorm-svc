const logger = require('./logger')
const ExpressServer = require('./expressServer')

const launchServer = async () => {
	try {
		this.expressServer = new ExpressServer()
		this.expressServer.launch()
		logger.info('Express server running')
	} catch (error) {
		logger.error('Express Server failure', error.message)
		await this.close()
	}
}

launchServer().catch(e => logger.error(e))

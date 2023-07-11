const logger = require('./logger')
const ExpressServer = require('./expressServer')

const launchServer = async () => {
  try {
    this.expressServer = ExpressServer.instance
    await this.expressServer.launch()
  } catch (error) {    
    logger.error('Express Server failure', error.message)
    await this.close()
  }
};

launchServer().catch(e => {
  logger.error(e)
})

import express, { Application } from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import router from './routes'
import { orm } from 'lambdaorm'

const app:Application = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

const start = async () => {
	try {
		const host = process.env.HOST || 'http://0.0.0.0'
		const port = process.env.PORT || '9289'
		const workspace = process.env.WORKSPACE || '/workspace'

		console.log(workspace)
		await orm.init(workspace)

		app.use(
			'/docs',
			swaggerUi.serve,
			swaggerUi.setup(undefined, {
				swaggerOptions: {
					url: '/swagger.json'
				}
			})
		)

		app.use(router)

		app.listen(port)
		console.log('Server running at: ' + host + ':' + port + '/docs')
		process.exitCode = 0
		return 0
	} catch (error) {
		await orm.end()
		console.error(error)
		process.exitCode = -1
		return -1
	}
}
start()

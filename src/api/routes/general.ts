import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import GeneralController from '../controllers/general'
import promClient from 'prom-client'

// metricts
// https://www.npmjs.com/package/prom-client
// https://stackabuse.com/nodejs-application-monitoring-with-prometheus-and-grafana/

const register = new promClient.Registry()
promClient.collectDefaultMetrics({
	prefix: 'node_',
	gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
	register
})
// Create a custom histogram metric
const httpRequestTimer = new promClient.Histogram({
	name: 'http_request_duration_seconds',
	help: 'Duration of HTTP requests in seconds',
	labelNames: ['method', 'originalUrl', 'route', 'code'],
	buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
})

// Register the histogram
register.registerMetric(httpRequestTimer)

const routes = function (app: Application) {
	// swagger
	app.use(
		'/docs',
		swaggerUi.serve,
		swaggerUi.setup(undefined, {
			swaggerOptions: {
				url: '/swagger.json'
			}
		})
	)

	// Runs before each requests
	app.use((req, res, next) => {
		res.locals.end = httpRequestTimer.startTimer()
		next()
	})

	// Runs after each requests
	app.use((req, res:any, next) => {
		res.locals.end({ route: req.path, originalUrl: req.originalUrl, code: res.statusCode, method: req.method })
		next()
	})
	// Error handler
	app.use((err:any, req:any, res:any, next:any) => {
		// res.statusCode = 500
		// Do not expose your error in production
		res.status(500).json({ error: err.message })
		next()
	})

	app.get('/ping', async (_req, res, next) => {
		res.json(await new GeneralController().ping())
		next()
	})

	app.get('/health', async (_req, res, next) => {
		res.json(await new GeneralController().health())
		next()
	})
	// Prometheus metrics route
	app.get('/metrics', async (req, res) => {
		// Start the HTTP request timer, saving a reference to the returned method
		const end = httpRequestTimer.startTimer()
		// Save reference to the path so we can record it when ending the timer
		const route = req.route.path
		res.setHeader('Content-Type', register.contentType)
		res.send(await register.metrics())
		// End timer and add labels
		end({ route, code: res.statusCode, method: req.method })
	})
}

export default routes

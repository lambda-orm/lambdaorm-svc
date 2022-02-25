
import promClient from 'prom-client'
import express from 'express'
const router = express.Router()

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

// Runs before each requests
export const before = (req:any, res:any, next:any) => {
	res.locals.end = httpRequestTimer.startTimer()
	next()
}
// Runs after each requests
export const after = (req:any, res:any, next:any) => {
	res.locals.end({ route: req.path, originalUrl: req.originalUrl, code: res.statusCode, method: req.method })
	next()
}

// Prometheus metrics route
router.get('/metrics', async (req, res) => {
	res.setHeader('Content-Type', register.contentType)
	res.send(await register.metrics())
})

export default router

import { Metric } from '../../application/ports/metric'
// https://www.npmjs.com/package/prom-client
// https://stackabuse.com/nodejs-application-monitoring-with-prometheus-and-grafana/
export class PromClientMetric implements Metric {
	private _promClient: any
	private get promClient () {
		if (!this._promClient) {
			this._promClient = require('prom-client')
		}
		return this._promClient
	}

	private _register: any
	private get register () {
		if (!this._register) {
			this._register = new this.promClient.Registry()
			this.promClient.collectDefaultMetrics({
				prefix: 'node_',
				gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
				register: this._register
			})
		}
		return this._register
	}

	private _httpRequestTimer: any
	private get httpRequestTimer () {
		if (!this._httpRequestTimer) {
			// Create a custom histogram metric
			this._httpRequestTimer = new this.promClient.Histogram({
				name: 'http_request_duration_seconds',
				help: 'Duration of HTTP requests in seconds',
				labelNames: ['method', 'originalUrl', 'route', 'code'],
				buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
			})
			// Register the histogram
			this.register.registerMetric(this._httpRequestTimer)
		}
		return this._httpRequestTimer
	}

	public before (req:any, res:any, next:any):void {
		res.locals.end = this.httpRequestTimer.startTimer()
		next()
	}

	public after (req:any, res:any, next:any):void {
		res.locals.end({ route: req.path, originalUrl: req.originalUrl, code: res.statusCode, method: req.method })
		next()
	}

	public async metrics () {
		return this.register.metrics()
	}
}

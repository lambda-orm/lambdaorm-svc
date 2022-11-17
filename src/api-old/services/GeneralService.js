/* eslint-disable no-unused-vars */
const Service = require('./Service')
const Metrics = require('./Metrics')


/**
*
* returns Health
* */
const health = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse({
				uptime: process.uptime(),
				message: 'OK',
				time: new Date().toISOString()
			}))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)
/**
*
* returns oas_any_type_not_mapped
* */
const metrics = () => new Promise(
	async (resolve, reject) => {
		try {
			const metrics = await Metrics.register.metrics()
			resolve(Service.successResponse(metrics))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)
/**
*
* returns Ping
* */
const ping = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse({
				message: 'pong',
				time: new Date().toISOString()
			}))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)

module.exports = {
	health,
	metrics,
	ping
}

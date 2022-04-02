/* eslint-disable no-unused-vars */
const Service = require('./Service')
const { orm } = require('lambdaorm')
/**
*
* returns List
* */
const dataSources = () => new Promise(
	(resolve, reject) => {
		try {
			const result = []
			const sources = orm.schema.dataSource.dataSources
			for (const i in sources) {
				const source = sources[i]
				result.push({ name: source.name, dialect: source.dialect, mapping: source.mapping, connection: '***' })
			}
			resolve(Service.successResponse(result))
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
* returns List
* */
const entities = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.schema.model.entities))
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
* returns List
* */
const enums = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.schema.model.enums))
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
* returns List
* */
const mappings = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.schema.mapping.mappings))
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
* returns List
* */
const stages = () => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.schema.stage.stages))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)

module.exports = {
	dataSources,
	entities,
	enums,
	mappings,
	stages
}

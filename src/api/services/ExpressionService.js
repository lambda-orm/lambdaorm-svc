/* eslint-disable no-unused-vars */
const Service = require('./Service')
const { orm } = require('lambdaorm')

/**
*
* query String
* returns MetadataConstraint
* */
const constraints = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.constraints(queryRequest.expression)))
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
* query String
* returns Metadata
* */
const metadata = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			const result = orm.metadata(queryRequest.expression)
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
* query String
* returns List
* */
const model = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			const result = orm.model(queryRequest.expression)
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
* query String
* returns List
* */
const parameters = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			const result = orm.parameters(queryRequest.expression)
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
* query String
* stage String  (optional)
* returns MetadataSentence
* */
const sentence = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			const result = orm.sentence(queryRequest.expression, queryRequest.options)
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
* query String
* stage String  (optional)
* body oas_any_type_not_mapped  (optional)
* returns oas_any_type_not_mapped
* */
const execute = ({ queryRequest }) => new Promise(
	// eslint-disable-next-line no-async-promise-executor
	async (resolve, reject) => {
		try {
			const result = await orm.execute(queryRequest.expression, queryRequest.data, queryRequest.options)
			resolve(Service.successResponse(result))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)

module.exports = {
	model,
	parameters,
	constraints,	
	metadata,	
	sentence,
	execute
}

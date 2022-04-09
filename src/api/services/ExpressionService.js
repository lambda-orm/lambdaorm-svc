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
* stage String  (optional)
* body oas_any_type_not_mapped  (optional)
* returns oas_any_type_not_mapped
* */
const execute = ({ queryRequest, stage }) => new Promise(
	// eslint-disable-next-line no-async-promise-executor
	async (resolve, reject) => {
		try {
			const result = await orm.execute(queryRequest.expression, queryRequest.data, undefined, stage)
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
* returns Metadata
* */
const metadata = ({ queryRequest }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.metadata(queryRequest.expression)))
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
			resolve(Service.successResponse(orm.model(queryRequest.expression)))
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
			resolve(Service.successResponse(orm.parameters(queryRequest.expression)))
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
const sentence = ({ queryRequest, stage }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.sentence(queryRequest.expression, undefined, stage)))
		} catch (e) {
			reject(Service.rejectResponse(
				e.message || 'Invalid input',
				e.status || 405
			))
		}
	}
)

module.exports = {
	constraints,
	execute,
	metadata,
	model,
	parameters,
	sentence
}

/* eslint-disable no-unused-vars */
const Service = require('./Service')
const { orm } = require('lambdaorm')

/**
*
* query String
* returns MetadataConstraint
* */
const constraints = ({ query }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.constraints(query)))
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
const execute = ({ query, stage, body }) => new Promise(
	// eslint-disable-next-line no-async-promise-executor
	async (resolve, reject) => {
		try {
			const result = await orm.execute(query, body, undefined, stage)
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
const metadata = ({ query }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.metadata(query)))
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
const model = ({ query }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.model(query)))
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
const parameters = ({ query }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.parameters(query)))
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
const sentence = ({ query, stage }) => new Promise(
	(resolve, reject) => {
		try {
			resolve(Service.successResponse(orm.sentence(query, undefined, stage)))
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

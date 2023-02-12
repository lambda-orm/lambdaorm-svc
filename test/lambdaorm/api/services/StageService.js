/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
const { orm } = require('lambdaorm')
const Service = require('./Service')
/**
*
* stage String
* returns Boolean
* */
const exists = ({ stage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse(await orm.stage.exists(stage)))
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
* stage String
* returns SchemaData
* */
const _export = ({ stage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse(await orm.stage.export(stage).execute()))
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
* stage String
* schemaData SchemaData
* returns oas_any_type_not_mapped
* */
const _import = ({ stage, schemaData }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse(await orm.stage.import(stage).execute(schemaData)))
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
const list = () => new Promise(
  (resolve, reject) => {
    try {
      resolve(Service.successResponse(orm.schema.stage.stages.map(p => p.name)))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)

module.exports = {
  exists,
  _export,
  _import,
  list
}

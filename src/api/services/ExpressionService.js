/* eslint-disable no-unused-vars */
const Service = require('./Service')
const { v4: uuidv4 } = require('uuid');
const { h3lp } = require('h3lp')
const ExpressServer = require('./../expressServer')
const { orm } = require('lambdaorm')
const { Partitioners } = require('kafkajs')

/**
*
* query String
* returns MetadataConstraint
* */
const constraints = ({ body }) => new Promise(
  (resolve, reject) => {
    try {
      resolve(Service.successResponse(orm.constraints(body.expression)))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
      ))
    }
  }
)
/**
*
* query String
* returns Metadata
* */
const metadata = ({ body }) => new Promise(
  (resolve, reject) => {
    try {
      const result = orm.metadata(body.expression)
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
      ))
    }
  }
)
/**
*
* query String
* returns List
* */
const model = ({ body }) => new Promise(
  (resolve, reject) => {
    try {
      const result = orm.model(body.expression)
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
      ))
    }
  }
)
/**
*
* query String
* returns List
* */
const parameters = ({ body }) => new Promise(
  (resolve, reject) => {
    try {
      const result = orm.parameters(body.expression)
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
      ))
    }
  }
)
/**
*
* query String
* stage String  (optional)
* returns sentence
* */
const sentence = ({ body }) => new Promise(
  (resolve, reject) => {
    try {
      const result = orm.getInfo(body.expression, body.options)
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
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
const execute = ({ body }) => new Promise(
  // eslint-disable-next-line no-async-promise-executor
  async (resolve, reject) => {
    try {
      const result = await orm.execute(body.expression, body.data, body.options)
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
      ))
    }
  }
)



const executeQueued = ({ body }) => new Promise(
  // eslint-disable-next-line no-async-promise-executor
  async (resolve, reject) => {
    try {
      if (!ExpressServer.instance.kafka) {
        reject(Service.rejectResponse('kafka undefined', 405))
      }
      if (!body.topic) {
        reject(Service.rejectResponse('topic undefined', 405))
      }
      const queueId = uuidv4()
      resolve(Service.successResponse({ queueId: queueId }))
      const call = async (body, queueId) => {
        try {
          const result = await orm.execute(body.expression, body.data, body.options)
          const headers = {}
          if (body.options.headers) {
            for (const entry of Object.entries(body.options.headers)) {
              headers[entry[0]] = JSON.stringify(entry[1])
            }
          }
          const messages = []
          const chunks = h3lp.array.chunks(result, body.chunk || result.length)
          for (let i = 0; i < chunks.length; i++) {
            headers.chunkNro = i.toString()
            messages.push({
              key: `${queueId}-${i}`
              , value: JSON.stringify(chunks[i])
              , headers: headers
            })
          }
          const producer = ExpressServer.instance.kafka.producer({
            allowAutoTopicCreation: true,
            createPartitioner: Partitioners.DefaultPartitioner
          })
          await producer.connect()
          await producer.send({ topic: body.topic, messages: messages })
          await producer.disconnect()
        } catch (e) {
          console.log(`executed.queued: ${queueId} error: ${e.message || ' undefined'}`)
        }
      }
      //execute in background
      call(body, queueId)
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Internal Server',
        e.status || 500
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
  execute,
  executeQueued
}

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
* returns sentence
* */
const sentence = ({ queryRequest }) => new Promise(
  (resolve, reject) => {
    try {
      const result = orm.getInfo(queryRequest.expression, queryRequest.options)
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

      if (ExpressServer.instance.kafka && queryRequest.options.headers && queryRequest.options.headers.queue) {
        const headers = queryRequest.options.headers
        try {
          if (!headers.queue.topic) {
            reject(Service.rejectResponse('queue.topic undefined', 405))
          }
          headers.queueId = uuidv4()
          resolve(Service.successResponse({ queueId: headers.queueId }))
          //execute in background
          // TODO: create task and return url with task reference
          // each task add into collection  
          const result = await orm.execute(queryRequest.expression, queryRequest.data, queryRequest.options)
          const KafkaHeaders = {}
          for (const entry of Object.entries(headers)) {
            KafkaHeaders[entry[0]] = JSON.stringify(entry[1])
          }
          const messages = []
          const chunks = h3lp.array.chunks(result, headers.queue.chunk || result.length)

          for (let i = 0; i < chunks.length; i++) {
            KafkaHeaders.chunkNro = i.toString()
            messages.push({
              key: `${headers.queueId}-${i}`
              , value: JSON.stringify(chunks[i])
              , headers: KafkaHeaders
            })
          }
          const producer = ExpressServer.instance.kafka.producer({
            allowAutoTopicCreation: true,
            createPartitioner: Partitioners.DefaultPartitioner
          })
          await producer.connect()
          await producer.send({ topic: headers.queue.topic, messages: messages })
          await producer.disconnect()
        } catch (error) {
          console.log(error)
        }

      } else {
        const result = await orm.execute(queryRequest.expression, queryRequest.data, queryRequest.options)
        resolve(Service.successResponse(result))
      }
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)



const executeQueued = ({ queryRequest }) => new Promise(
  // eslint-disable-next-line no-async-promise-executor
  async (resolve, reject) => {
    try {
      if (!ExpressServer.instance.kafka) {
        reject(Service.rejectResponse('kafka undefined', 405))
      }
      if (!queryRequest.topic) {
        reject(Service.rejectResponse('topic undefined', 405))
      }
      const queueId = uuidv4()
      resolve(Service.successResponse({ queueId: queueId }))
      const call = async (queryRequest, queueId) => {
        try {
          const result = await orm.execute(queryRequest.expression, queryRequest.data, queryRequest.options)
          const headers = {}
          if (queryRequest.options.headers) {
            for (const entry of Object.entries(queryRequest.options.headers)) {
              headers[entry[0]] = JSON.stringify(entry[1])
            }
          }
          const messages = []
          const chunks = h3lp.array.chunks(result, queryRequest.chunk || result.length)
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
          await producer.send({ topic: queryRequest.topic, messages: messages })
          await producer.disconnect()
        } catch (e) {
          console.log(`executed.queued: ${queueId} error: ${e.message || ' undefined'}`)
        }
      }
      //execute in background
      call(queryRequest, queueId)
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
  execute,
  executeQueued
}

/* eslint-disable no-unused-vars */
// const Service = require('./Service')
// const ExpressServer = require('./../expressServer')
// import { Partitioners } from 'kafkajs'
// import{ uuidv4 } from 'uuid'
// import { h3lp } from 'h3lp'
import { IOrm, Metadata, MetadataConstraint, MetadataModel, MetadataParameter, QueryInfo, QueryOptions } from 'lambdaorm'
export class ExpressionService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm: IOrm) { }

	public async constraints ({ body }: { body: {expression:string} }): Promise<MetadataConstraint> {
		return this.orm.constraints(body.expression)
	}

	public async metadata ({ body }: { body: {expression:string} }): Promise<Metadata> {
		return this.orm.metadata(body.expression)
	}

	public async model ({ body }: { body: {expression:string} }): Promise<MetadataModel[]> {
		return this.orm.model(body.expression)
	}

	public async parameters ({ body }: { body: {expression:string} }): Promise<MetadataParameter[]> {
		return this.orm.parameters(body.expression)
	}

	public async sentence ({ body }: { body: {expression:string, options?:QueryOptions} }): Promise<QueryInfo> {
		return this.orm.getInfo(body.expression, body.options)
	}

	public async execute ({ body }: { body: {expression:string, data:any, options?:QueryOptions} }): Promise<any> {
		return this.orm.execute(body.expression, body.data, body.options)
	}

// const executeQueued = ({ body }) => new Promise(
// // eslint-disable-next-line no-async-promise-executor
// async (resolve, reject) => {
// try {
// if (!ExpressServer.instance.kafka) {
// reject(Service.rejectResponse('kafka undefined', 405))
// }
// if (!body.topic) {
// reject(Service.rejectResponse('topic undefined', 405))
// }
// const queueId = uuidv4()
// resolve(Service.successResponse({ queueId }))
// const call = async (body, queueId) => {
// try {
// const result = await orm.execute(body.expression, body.data, body.options)
// const headers = {}
// if (body.options.headers) {
// for (const entry of Object.entries(body.options.headers)) {
// headers[entry[0]] = JSON.stringify(entry[1])
// }
// }
// const messages = []
// const chunks = h3lp.array.chunks(result, body.chunk || result.length)
// for (let i = 0; i < chunks.length; i++) {
// headers.chunkNro = i.toString()
// messages.push({
// key: `${queueId}-${i}`,
// value: JSON.stringify(chunks[i]),
// headers
// })
// }
// const producer = ExpressServer.instance.kafka.producer({
// allowAutoTopicCreation: true,
// createPartitioner: Partitioners.DefaultPartitioner
// })
// await producer.connect()
// await producer.send({ topic: body.topic, messages })
// await producer.disconnect()
// } catch (e) {
// console.log(`executed.queued: ${queueId} error: ${e.message || ' undefined'}`)
// }
// }
// // execute in background
// call(body, queueId)
// } catch (e) {
// reject(Service.rejectResponse(
// e.message || 'Internal Server',
// e.status || 500
// ))
// }
// }
// )
}

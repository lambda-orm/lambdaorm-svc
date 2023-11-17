import { QueryOptions } from 'lambdaorm'

export interface ConsumerInfo {
	config:any
	subscribe: any
}
export interface QueuedInfo {
	config:any
	consumers:ConsumerInfo[]
}

export interface QueueExecuteArgs {
	topic:string
	expression:string
	data:any,
	chunk?:number
	options?:QueryOptions
}

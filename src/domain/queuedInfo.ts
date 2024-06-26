import { QueryOptions } from 'lambdaorm'

export interface ConsumerInfo {
	config:any
	subscribe: any
	execute: string
}
export interface QueuedInfo {
	config:any
	consumers:ConsumerInfo[]
}

export interface QueueExecuteArgs {
	topic:string
	query:string
	data:any,
	chunk?:number
	options?:QueryOptions
}

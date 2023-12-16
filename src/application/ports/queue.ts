import { QueueExecuteArgs, QueuedInfo } from '../../domain'

export interface Queue {
	start (queuedInfo:QueuedInfo): Promise<void>
	stop (): Promise<void>
	execute (args:QueueExecuteArgs): string
	executeInBackground (queueId:string, args:QueueExecuteArgs): Promise<void>
	send (topic:string, messages:any[]): Promise<void>
}

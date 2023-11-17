export interface Metric {
	before (req:any, res:any, next:any): void
	after (req:any, res:any, next:any): void
	metrics(): Promise<any>
}

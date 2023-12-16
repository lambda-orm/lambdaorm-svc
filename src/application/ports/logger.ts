export interface Logger {
	error(message: string|any): Promise<void>
	info(message: string): Promise<void>
}

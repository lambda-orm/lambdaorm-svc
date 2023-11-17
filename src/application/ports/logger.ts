export interface Logger {
	error(message: string): Promise<void>
	info(message: string): Promise<void>
}

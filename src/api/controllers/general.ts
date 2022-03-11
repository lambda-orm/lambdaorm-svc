import { Get, Tags, Route } from 'tsoa'
import { Health } from '../model/health'
import { Ping } from '../model/ping'

@Route('/')
export default class GeneralController {
	@Tags('general')
	@Get('/ping')
	public async ping (): Promise<Ping> {
		return {
			message: 'pong',
			time: new Date().toISOString()
		}
	}

	@Tags('general')
	@Get('/health')
	public async health (): Promise<Health> {
		// https://betterprogramming.pub/how-to-add-a-health-check-to-your-node-js-app-5154d13b969e
		// https://www.freshworks.com/website-monitoring/
		return {
			uptime: process.uptime(),
			message: 'OK',
			time: new Date().toISOString()
		}
	}

	@Tags('general')
	@Get('/metrics')
	public async metrics (): Promise<any> {
		return undefined
	}
}

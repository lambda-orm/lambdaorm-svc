import { Get, Tags, Route } from 'tsoa'

@Route('/')
export default class GeneralController {
	@Tags('general')
	@Get('/ping')
	public async ping (): Promise<any> {
		return {
			message: 'pong',
			time: new Date().toISOString()
		}
	}

	@Tags('general')
	@Get('/health')
	public async health (): Promise<any> {
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

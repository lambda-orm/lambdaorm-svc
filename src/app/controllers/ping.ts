import { Get, Route } from 'tsoa'

@Route('ping')
export default class PingController {
	@Get('/')
	public async getMessage (): Promise<string> {
		return 'pong'
	}
}

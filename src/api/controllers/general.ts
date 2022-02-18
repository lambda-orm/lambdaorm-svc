import { Get, Tags, Route } from 'tsoa'

@Route('/')
export default class GeneralController {
	@Tags('general')
	@Get('/ping')
	public async ping (): Promise<string> {
		return 'pong'
	}
}

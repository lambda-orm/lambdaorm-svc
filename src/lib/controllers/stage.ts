import { Tags, Post, Get, SuccessResponse, Body, Route, Path } from 'tsoa'
import { orm, SchemaData } from 'lambdaorm'

@Route('stage')
export default class StageController {
	@Tags('stage')
	@Get('/')
	@SuccessResponse('200', 'Ok')
	public async list (): Promise<string[]> {
		return orm.schema.stage.stages.map(p => p.name)
	}

	@Tags('stage')
	@Get('/{stage}/exists')
	@SuccessResponse('200', 'Ok')
	public async exists (@Path() stage:string): Promise<boolean> {
		return await orm.stage.exists(stage)
	}

	@Tags('stage')
	@Get('/{stage}/export')
	@SuccessResponse('200', 'Ok')
	public async export (@Path() stage:string): Promise<SchemaData> {
		return await orm.stage.export(stage).execute()
	}

	@Tags('stage')
	@Post('/{stage}/import')
	@SuccessResponse('200', 'Ok')
	public async import (@Path() stage:string, @Body() data: SchemaData): Promise<any> {
		return await orm.stage.import(stage).execute(data)
	}
}

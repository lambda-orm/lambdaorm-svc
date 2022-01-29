import { Tags, Post, Get, SuccessResponse, Body, Route, Path, Query } from 'tsoa'
import { orm } from 'lambdaorm'

@Route('expression')
export default class ExpressionController {
	@Tags('expression')
	@Get('/{expression}/metadata')
	@SuccessResponse('200', 'Ok')
	public async metadata (@Path() expression:string): Promise<any> {
		return await orm.metadata(expression)
	}

	@Tags('expression')
	@Get('/{expression}/model')
	@SuccessResponse('200', 'Ok')
	public async model (@Path() expression:string): Promise<any> {
		return await orm.model(expression)
	}

	@Tags('expression')
	@Get('/{expression}/parameters')
	@SuccessResponse('200', 'Ok')
	public async parameters (@Path() expression:string): Promise<any> {
		return await orm.parameters(expression)
	}

	@Tags('expression')
	@Get('/{expression}/sentence/')
	@SuccessResponse('200', 'Ok')
	public async sentence (@Path() expression:string, @Query() stage?:string): Promise<any> {
		return await orm.sentence(expression, stage)
	}

	@Tags('expression')
	@Post('/{expression}/run')
	@SuccessResponse('200', 'Ok')
	public async run (@Path() expression:string, @Body() data?: any, @Query() stage?:string): Promise<any> {
		return await orm.execute(expression, data, stage)
	}
}

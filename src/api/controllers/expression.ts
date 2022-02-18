import { Tags, Post, Get, SuccessResponse, Body, Route, Query } from 'tsoa'
import { orm } from 'lambdaorm'

@Route('/')
export default class ExpressionController {
	@Tags('expression')
	@Get('/metadata')
	@SuccessResponse('200', 'Ok')
	public async metadata (@Query() query:string): Promise<any> {
		return await orm.metadata(query)
	}

	@Tags('expression')
	@Get('/model')
	@SuccessResponse('200', 'Ok')
	public async model (@Query() query:string): Promise<any> {
		return await orm.model(query)
	}

	@Tags('expression')
	@Get('/parameters')
	@SuccessResponse('200', 'Ok')
	public async parameters (@Query() query:string): Promise<any> {
		return await orm.parameters(query)
	}

	@Tags('expression')
	@Get('/sentence/')
	@SuccessResponse('200', 'Ok')
	public async sentence (@Query() query:string, @Query() stage?:string): Promise<any> {
		return await orm.sentence(query, stage)
	}

	@Tags('expression')
	@Post('/run')
	@SuccessResponse('200', 'Ok')
	public async run (@Query() query:string, @Body() data?: any, @Query() stage?:string): Promise<any> {
		return await orm.execute(query, data, stage)
	}
}

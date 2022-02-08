import { Tags, Post, Get, SuccessResponse, Body, Route, Query } from 'tsoa'
import { orm } from 'lambdaorm'

@Route('/')
export default class ExpressionController {
	@Tags('expression')
	@Get('/metadata')
	@SuccessResponse('200', 'Ok')
	public async metadata (@Query() exp:string): Promise<any> {
		return await orm.metadata(exp)
	}

	@Tags('expression')
	@Get('/model')
	@SuccessResponse('200', 'Ok')
	public async model (@Query() exp:string): Promise<any> {
		return await orm.model(exp)
	}

	@Tags('expression')
	@Get('/parameters')
	@SuccessResponse('200', 'Ok')
	public async parameters (@Query() exp:string): Promise<any> {
		return await orm.parameters(exp)
	}

	@Tags('expression')
	@Get('/sentence/')
	@SuccessResponse('200', 'Ok')
	public async sentence (@Query() exp:string, @Query() stage?:string): Promise<any> {
		return await orm.sentence(exp, stage)
	}

	@Tags('expression')
	@Post('/run')
	@SuccessResponse('200', 'Ok')
	public async run (@Query() exp:string, @Body() data?: any, @Query() stage?:string): Promise<any> {
		return await orm.execute(exp, data, stage)
	}
}

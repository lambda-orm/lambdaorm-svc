import { Post, SuccessResponse, Body, Route } from 'tsoa'
import { orm } from 'lambdaorm'
import ExpressionRequest from '../model/expressionRequest'
import RunRequest from '../model/runRequest'

@Route('expression')
export default class ExpressionController {
	@Post('/metadata')
	@SuccessResponse('200', 'Ok')
	public async metadata (@Body() body: ExpressionRequest): Promise<any> {
		return await orm.expression(body.expression).metadata(body.schema)
	}

	@Post('/sentence')
	@SuccessResponse('200', 'Ok')
	public async sentence (@Body() body: ExpressionRequest): Promise<any> {
		return await orm.expression(body.expression).sentence(body.dialect, body.schema)
	}

	@Post('/model')
	@SuccessResponse('200', 'Ok')
	public async model (@Body() body: ExpressionRequest): Promise<any> {
		return await orm.expression(body.expression).model(body.schema)
	}

	@Post('/parameters')
	@SuccessResponse('200', 'Ok')
	public async parameters (@Body() body: ExpressionRequest): Promise<any> {
		return await orm.expression(body.expression).parameters(body.schema)
	}

	@Post('/run')
	@SuccessResponse('200', 'Ok')
	public async run (@Body() body: RunRequest): Promise<any> {
		return await orm.expression(body.expression).execute(body.database, body.context)
	}
}

import { Tags, Post, Get, SuccessResponse, Body, Route, Query } from 'tsoa'
import { MetadataConstraint, MetadataModel, MetadataParameter, MetadataSentence, Metadata, orm } from 'lambdaorm'

@Route('/')
export default class ExpressionController {
	@Tags('expression')
	@Get('/metadata')
	@SuccessResponse('200', 'Ok')
	public async metadata (@Query() query:string): Promise<Metadata> {
		return orm.metadata(query)
	}

	@Tags('expression')
	@Get('/model')
	@SuccessResponse('200', 'Ok')
	public async model (@Query() query:string): Promise<MetadataModel[]> {
		return orm.model(query)
	}

	@Tags('expression')
	@Get('/parameters')
	@SuccessResponse('200', 'Ok')
	public async parameters (@Query() query:string): Promise<MetadataParameter[]> {
		return orm.parameters(query)
	}

	@Tags('expression')
	@Get('/constraints/')
	@SuccessResponse('200', 'Ok')
	public async constraints (@Query() query:string): Promise<MetadataConstraint> {
		return orm.constraints(query)
	}

	@Tags('expression')
	@Get('/sentence/')
	@SuccessResponse('200', 'Ok')
	public async sentence (@Query() query:string, @Query() stage?:string): Promise<MetadataSentence> {
		return orm.sentence(query, stage)
	}

	@Tags('expression')
	@Post('/execute')
	@SuccessResponse('200', 'Ok')
	public async execute (@Query() query:string, @Body() data?: any, @Query() stage?:string): Promise<any> {
		return await orm.execute(query, data, stage)
	}
}

import { IOrm, Orm } from 'lambdaorm'
import { ServiceExpressionLibrary } from './serviceExpressionLibrary'
import { Logger } from '../../application'

export class OrmBuilder {
	public build (logger: Logger): IOrm {
		const orm = new Orm(process.env.WORKSPACE || '/workspace')
		new ServiceExpressionLibrary(orm, logger).load()
		return orm
	}
}

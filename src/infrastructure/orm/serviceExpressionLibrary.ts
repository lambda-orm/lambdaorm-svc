import { Logger } from './../../application'
import { IOrm } from 'lambdaorm'

export class ServiceExpressionLibrary {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly orm:IOrm, private readonly logger:Logger) {}

	load () {
		// TODO: solve async expression
		this.orm.expressions.addFunction('execute(expression:string,data:any,options:any):any', async (expression:string, data:any, options:any) => {
			try {
				return await this.orm.execute(expression, data, options)
			} catch (error:any) {
				this.logger.error(error.message)
			}
		})
	}
}

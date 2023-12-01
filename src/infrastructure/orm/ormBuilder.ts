import { IOrm, Orm } from 'lambdaorm'

export class OrmBuilder {
	public build (): IOrm {
		return new Orm(process.env.WORKSPACE || '/workspace')
	}
}

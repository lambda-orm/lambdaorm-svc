import { Respository, IOrm } from 'lambdaorm'
import { File, QryFile } from './model'
export class FileRespository extends Respository<File, QryFile> {
	constructor (stage?: string, Orm?:IOrm) {
		super('Files', stage, Orm)
	}
	// Add your code here
}

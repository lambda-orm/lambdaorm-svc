const Library = class Library {
	constructor(orm) {
		this.orm = orm
	}

	load() {
		// TODO: solve async expression
		this.model.addFunction('ormExecute(expression:string,data:any,options:any):any', async (expression, data, options) => {
			try {
				return await this.orm.execute(expression, data, options)
			} catch (error) {
				console.log(error)
			}
		})
	}
}

module.exports = {
	Library
}
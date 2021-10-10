import { orm } from 'lambdaorm'
(async () => {
	try {
		await orm.init()

		const query = () => Customers.first(p => p)
		const result = await orm.lambda(query).execute('mysql')
		console.log(JSON.stringify(result, null, 2))
	} catch (error) {
		console.error(error)
	} finally {
		await orm.end()
	}
})()

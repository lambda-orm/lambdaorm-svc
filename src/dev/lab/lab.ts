/* eslint-disable @typescript-eslint/no-unused-vars */
import { orm } from 'lambdaorm'

async function example () {
	await orm.init()

	const categories = [
		{
			name: 'Beverages4',
			description: 'Soft drinks, coffees, teas, beers, and ales',
			id: 12
		},
		{
			name: 'Condiments4',
			description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
			id: 13
		}
	]

	const insert = () => Categories.bulkInsert()
	const result = await orm.lambda(insert).execute('mysql', categories)
	console.log(JSON.stringify(result, null, 2))
	await orm.end()
}

example()

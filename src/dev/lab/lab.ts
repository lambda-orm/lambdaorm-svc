/* eslint-disable @typescript-eslint/no-unused-vars */
import { orm } from 'lambda-orm'

export async function apply () {
	await orm.init()
	const query = () => Products.filter(p => p.price > 10).map(p => ({ name: p.name, category: p.category.name })).sort(p => p.category).page(1, 10)
	const sentence = await orm.lambda(query).sentence('mysql', 'northwind:0.0.2')
	console.log(sentence)
	await orm.end()
}

apply()

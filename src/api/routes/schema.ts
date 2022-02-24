import { Application } from 'express'
import SchemaController from '../controllers/schema'

const routes = function (app: Application) {
	app.get('/schema/entities', async (req, res, next) => {
		res.json(await new SchemaController().entities())
		next()
	})
	app.get('/schema/enums', async (req, res, next) => {
		res.json(await new SchemaController().enums())
		next()
	})
	app.get('/schema/dataSources', async (req, res, next) => {
		res.json(await new SchemaController().dataSources())
		next()
	})
	app.get('/schema/mappings', async (req, res, next) => {
		res.json(await new SchemaController().mappings())
		next()
	})
	app.get('/schema/stages', async (req, res, next) => {
		res.json(await new SchemaController().stages())
		next()
	})
}
export default routes

import { Application } from 'express'
import ExpressionController from '../controllers/expression'

const routes = function (app: Application) {
	app.get('/metadata', async (req, res, next) => {
		const query = req.query.query as string
		res.json(await new ExpressionController().metadata(query))
		next()
	})
	app.get('/parameters', async (req, res, next) => {
		const query = req.query.query as string
		res.json(await new ExpressionController().parameters(query))
		next()
	})
	app.get('/model', async (req, res, next) => {
		const query = req.query.query as string
		res.json(await new ExpressionController().model(query))
		next()
	})
	app.get('/constraints', async (req, res, next) => {
		const query = req.query.query as string
		res.json(await new ExpressionController().constraints(query))
		next()
	})
	app.get('/sentence', async (req, res, next) => {
		const query = req.query.query as string
		const stage = req.query ? req.query.stage as string : undefined
		res.json(await new ExpressionController().sentence(query, stage))
		next()
	})
	app.post('/run', async (req, res, next) => {
		const query = req.query.query as string
		const stage = req.query ? req.query.stage as string : undefined
		res.json(await new ExpressionController().run(query, req.body, stage))
		next()
	})
}
export default routes

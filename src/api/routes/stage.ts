import { Application } from 'express'
import StageController from '../controllers/stage'

const routes = function (app: Application) {
	app.get('/stage/', async (req, res, next) => {
		res.json(await new StageController().list())
		next()
	})
	app.get('/stage/:stage/exists', async (req, res, next) => {
		res.json(await new StageController().exists(req.params.stage))
		next()
	})
	app.get('/stage/:stage/export', async (req, res, next) => {
		res.json(await new StageController().export(req.params.stage))
		next()
	})
	app.post('/stage/:stage/import', async (req, res, next) => {
		res.json(await new StageController().import(req.params.stage, req.body))
		next()
	})
}

export default routes

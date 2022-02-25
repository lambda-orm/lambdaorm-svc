import express from 'express'
import StageController from '../controllers/stage'
const router = express.Router()

router.get('/stage/', async (req, res, next) => {
	res.json(await new StageController().list())
	next()
})
router.get('/stage/:stage/exists', async (req, res, next) => {
	res.json(await new StageController().exists(req.params.stage))
	next()
})
router.get('/stage/:stage/export', async (req, res, next) => {
	res.json(await new StageController().export(req.params.stage))
	next()
})
router.post('/stage/:stage/import', async (req, res, next) => {
	res.json(await new StageController().import(req.params.stage, req.body))
	next()
})
export default router

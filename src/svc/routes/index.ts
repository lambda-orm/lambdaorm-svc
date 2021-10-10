import express from 'express'
import PingController from '../controllers/ping'
import ExpressionController from '../controllers/expression'
import ExpressionRequest from '../model/expressionRequest'
import RunRequest from '../model/runRequest'

const router = express.Router()

router.get('/ping', async (_req, res) => {
	const controller = new PingController()
	const response = await controller.getMessage()
	return res.send(response)
})
router.post('/expression/metadata', async (req, res) => {
	const controller = new ExpressionController()
	const response = await controller.metadata(req.body as ExpressionRequest)
	return res.send(response)
})
router.post('/expression/parameters', async (req, res) => {
	const controller = new ExpressionController()
	const response = await controller.parameters(req.body as ExpressionRequest)
	return res.send(response)
})
router.post('/expression/sentence', async (req, res) => {
	const controller = new ExpressionController()
	const response = await controller.sentence(req.body as ExpressionRequest)
	return res.send(response)
})
router.post('/expression/model', async (req, res) => {
	const controller = new ExpressionController()
	const response = await controller.model(req.body as ExpressionRequest)
	return res.send(response)
})
router.post('/expression/run', async (req, res) => {
	const controller = new ExpressionController()
	const response = await controller.run(req.body as RunRequest)
	return res.send(response)
})

export default router

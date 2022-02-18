import express from 'express'
import GeneralController from '../controllers/general'
import ExpressionController from '../controllers/expression'
import StageController from '../controllers/stage'
import SchemaController from '../controllers/schema'

const router = express.Router()

router.get('/ping', async (_req, res) => {
	const controller = new GeneralController()
	const response = await controller.ping()
	return res.send(response)
})
router.get('/metadata', async (req, res) => {
	const controller = new ExpressionController()
	const query = req.query.query as string
	const response = await controller.metadata(query)
	return res.send(response)
})
router.get('/parameters', async (req, res) => {
	const controller = new ExpressionController()
	const query = req.query.query as string
	const response = await controller.parameters(query)
	return res.send(response)
})
router.get('/model', async (req, res) => {
	const controller = new ExpressionController()
	const query = req.query.query as string
	const response = await controller.model(query)
	return res.send(response)
})
router.get('/sentence', async (req, res) => {
	const controller = new ExpressionController()
	const query = req.query.query as string
	const stage = req.query ? req.query.stage as string : undefined
	const response = await controller.sentence(query, stage)
	return res.send(response)
})
router.post('/run', async (req, res) => {
	const controller = new ExpressionController()
	const stage = req.query ? req.query.stage as string : undefined
	const query = req.query.query as string
	const response = await controller.run(query, req.body, stage)
	return res.send(response)
})

router.get('/stage/', async (req, res) => {
	const controller = new StageController()
	const response = await controller.list()
	return res.send(response)
})

router.get('/stage/:stage/exists', async (req, res) => {
	const controller = new StageController()
	const response = await controller.exists(req.params.stage)
	return res.send(response)
})

router.get('/stage/:stage/export', async (req, res) => {
	const controller = new StageController()
	const response = await controller.export(req.params.stage)
	return res.send(response)
})

router.post('/stage/:stage/import', async (req, res) => {
	const controller = new StageController()
	const response = await controller.import(req.params.stage, req.body)
	return res.send(response)
})

router.get('/schema/entities', async (req, res) => {
	const controller = new SchemaController()
	const response = await controller.entities()
	return res.send(response)
})
router.get('/schema/enums', async (req, res) => {
	const controller = new SchemaController()
	const response = await controller.enums()
	return res.send(response)
})
router.get('/schema/dataSources', async (req, res) => {
	const controller = new SchemaController()
	const response = await controller.dataSources()
	return res.send(response)
})
router.get('/schema/mappings', async (req, res) => {
	const controller = new SchemaController()
	const response = await controller.mappings()
	return res.send(response)
})
router.get('/schema/stages', async (req, res) => {
	const controller = new SchemaController()
	const response = await controller.stages()
	return res.send(response)
})

export default router

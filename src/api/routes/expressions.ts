import express from 'express'
import ExpressionController from '../controllers/expression'

const router = express.Router()
router.get('/metadata', async (req, res, next) => {
	const query = req.query.query as string
	res.json(await new ExpressionController().metadata(query))
	next()
})
router.get('/parameters', async (req, res, next) => {
	const query = req.query.query as string
	res.json(await new ExpressionController().parameters(query))
	next()
})
router.get('/model', async (req, res, next) => {
	const query = req.query.query as string
	res.json(await new ExpressionController().model(query))
	next()
})
router.get('/constraints', async (req, res, next) => {
	const query = req.query.query as string
	res.json(await new ExpressionController().constraints(query))
	next()
})
router.get('/sentence', async (req, res, next) => {
	const query = req.query.query as string
	const stage = req.query ? req.query.stage as string : undefined
	res.json(await new ExpressionController().sentence(query, stage))
	next()
})
router.post('/run', async (req, res, next) => {
	try {
		const query = req.query.query as string
		const stage = req.query ? req.query.stage as string : undefined
		res.json(await new ExpressionController().run(query, req.body, stage))
		next()
	} catch (error) {
		next(error)
	}
})
export default router

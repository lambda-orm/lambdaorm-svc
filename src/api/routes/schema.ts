import express from 'express'
import SchemaController from '../controllers/schema'
const router = express.Router()

router.get('/schema/entities', async (req, res, next) => {
	res.json(await new SchemaController().entities())
	next()
})
router.get('/schema/enums', async (req, res, next) => {
	res.json(await new SchemaController().enums())
	next()
})
router.get('/schema/dataSources', async (req, res, next) => {
	res.json(await new SchemaController().dataSources())
	next()
})
router.get('/schema/mappings', async (req, res, next) => {
	res.json(await new SchemaController().mappings())
	next()
})
router.get('/schema/stages', async (req, res, next) => {
	res.json(await new SchemaController().stages())
	next()
})
export default router

import express from 'express'
import GeneralController from '../controllers/general'
import ExpressionController from '../controllers/expression'
import StageController from '../controllers/stage'
import SchemaController from '../controllers/schema'

const router = express.Router()

router.get('/ping', async (_req, res) => {
	try {
		const controller = new GeneralController()
		const response = await controller.ping()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/metadata', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const query = req.query.query as string
		const response = await controller.metadata(query)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/parameters', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const query = req.query.query as string
		const response = await controller.parameters(query)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/model', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const query = req.query.query as string
		const response = await controller.model(query)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/constraints', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const query = req.query.query as string
		const response = await controller.constraints(query)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/sentence', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const query = req.query.query as string
		const stage = req.query ? req.query.stage as string : undefined
		const response = await controller.sentence(query, stage)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.post('/run', async (req, res) => {
	try {
		const controller = new ExpressionController()
		const stage = req.query ? req.query.stage as string : undefined
		const query = req.query.query as string
		const response = await controller.run(query, req.body, stage)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/stage/', async (req, res) => {
	try {
		const controller = new StageController()
		const response = await controller.list()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/stage/:stage/exists', async (req, res) => {
	try {
		const controller = new StageController()
		const response = await controller.exists(req.params.stage)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/stage/:stage/export', async (req, res) => {
	try {
		const controller = new StageController()
		const response = await controller.export(req.params.stage)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.post('/stage/:stage/import', async (req, res) => {
	try {
		const controller = new StageController()
		const response = await controller.import(req.params.stage, req.body)
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

router.get('/schema/entities', async (req, res) => {
	try {
		const controller = new SchemaController()
		const response = await controller.entities()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/schema/enums', async (req, res) => {
	try {
		const controller = new SchemaController()
		const response = await controller.enums()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/schema/dataSources', async (req, res) => {
	try {
		const controller = new SchemaController()
		const response = await controller.dataSources()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/schema/mappings', async (req, res) => {
	try {
		const controller = new SchemaController()
		const response = await controller.mappings()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})
router.get('/schema/stages', async (req, res) => {
	try {
		const controller = new SchemaController()
		const response = await controller.stages()
		if (typeof response !== 'object' && typeof response !== 'string') {
			return res.send({ result: response })
		} else {
			return res.send(response)
		}
	} catch (e:any) {
		return res.status(500).send(e.name + ': ' + e.message)
	}
})

export default router

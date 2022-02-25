
import GeneralController from '../controllers/general'
import express from 'express'
const router = express.Router()

router.get('/ping', async (_req, res, next) => {
	res.json(await new GeneralController().ping())
	next()
})

router.get('/health', async (_req, res, next) => {
	res.json(await new GeneralController().health())
	next()
})

export default router

// function errorLogger (error:any, req:any, res:any, next) { // for logging errors
// console.error(error) // or using any fancy logging library
// next(error) // forward to next middleware
// }

// function errorResponder (error:any, req:any, res:any, next) { // responding to client
// if (error.type === 'redirect') {
// res.redirect('/error')
// } else if (error.type === 'time-out') {
// res.status(408).send(error)
// } else {
// next(error)
// } // forwarding exceptional case to fail-safe middleware
// }

// function failSafeHandler (error:any, req:any, res:any, next) { // generic handler
// res.status(500).send(error)
// }

// app.use(errorLogger)
// app.use(errorResponder)
// app.use(failSafeHandler)

// Runs before each requests
// app.use((req:any, res, next) => {
// res.locals.end = httpRequestTimer.startTimer()
// next()
// })

// // Runs after each requests
// app.use((req:any, res:any, next) => {
// res.locals.end({ route: req.path, originalUrl: req.originalUrl, code: res.statusCode, method: req.method })
// next()
// })
// Error handler
// app.use(function (err:any, req:any, res:any, next:any) {
// console.error(err.stack)
// res.status(500).send('Something broke!')
// })
// app.use((err:any, req:any, res:any, next:any) => {
// // res.statusCode = 500
// // Do not expose your error in production
// res.status(500).json({ error: err.message })
// next()
// })

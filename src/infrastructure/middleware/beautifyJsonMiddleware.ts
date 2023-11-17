import { Request, Response } from 'express'
export const beautifyJsonMiddleware = (req:Request, res:Response, next: any) => {
	const formatParam:string|undefined = req.query.format as string|undefined
	if (formatParam !== undefined && formatParam.toLowerCase() === 'beautiful') {
		res.set('Content-Type', 'application/json')
		res.json = (body) => res.send(JSON.stringify(body, null, 2))
	}
	next()
}

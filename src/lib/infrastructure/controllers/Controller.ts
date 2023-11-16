import { Request } from 'express'
export abstract class Controller {
	protected sendResponse (response:any, payload:any) {
		response.status(payload.code || 200)
		const responsePayload = payload.payload !== undefined ? payload.payload : payload
		if (responsePayload instanceof Object) {
			response.json(responsePayload)
		} else {
			response.end(responsePayload)
		}
	}

	protected sendError (response:any, error:any) {
		response.status(error.code || 500)
		if (error.error instanceof Object) {
			response.json(error.error)
		} else {
			response.end(error.error || error.message)
		}
	}

	protected collectRequestParams (request:Request):any {
		const requestParams:any = {}
		if (request.body && Object.keys(request.body).length > 0) {
			requestParams.body = request.body
		}
		if (request.params) {
			for (const name in request.params) {
				requestParams[name] = request.params[name]
			}
		}
		if (request.query) {
			for (const name in request.query) {
				requestParams[name] = request.query[name]
			}
		}
		if (request.headers) {
			for (const name in request.headers) {
				requestParams[name] = request.headers[name]
			}
		}
		return requestParams
	}

	protected async handleRequest (request:any, response:any, serviceOperation:any) {
		try {
			const params = this.collectRequestParams(request)
			const serviceResponse = await serviceOperation(params)
			this.sendResponse(response, serviceResponse)
		} catch (error) {
			this.sendError(response, error)
		}
	}
}

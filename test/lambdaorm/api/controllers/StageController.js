/**
 * The StageController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StageService');
const _export = async (request, response) => {
  await Controller.handleRequest(request, response, service._export);
};

const _import = async (request, response) => {
  await Controller.handleRequest(request, response, service._import);
};

const exists = async (request, response) => {
  await Controller.handleRequest(request, response, service.exists);
};


module.exports = {
  _export,
  _import,
  exists,
};

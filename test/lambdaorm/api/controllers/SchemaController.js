/**
 * The SchemaController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SchemaService');
const dataSources = async (request, response) => {
  await Controller.handleRequest(request, response, service.dataSources);
};

const datasource = async (request, response) => {
  await Controller.handleRequest(request, response, service.datasource);
};

const entities = async (request, response) => {
  await Controller.handleRequest(request, response, service.entities);
};

const entity = async (request, response) => {
  await Controller.handleRequest(request, response, service.entity);
};

const entityMapping = async (request, response) => {
  await Controller.handleRequest(request, response, service.entityMapping);
};

const _enum = async (request, response) => {
  await Controller.handleRequest(request, response, service._enum);
};

const enums = async (request, response) => {
  await Controller.handleRequest(request, response, service.enums);
};

const mapping = async (request, response) => {
  await Controller.handleRequest(request, response, service.mapping);
};

const mappings = async (request, response) => {
  await Controller.handleRequest(request, response, service.mappings);
};

const stage = async (request, response) => {
  await Controller.handleRequest(request, response, service.stage);
};

const stages = async (request, response) => {
  await Controller.handleRequest(request, response, service.stages);
};


module.exports = {
  dataSources,
  datasource,
  entities,
  entity,
  entityMapping,
  _enum,
  enums,
  mapping,
  mappings,
  stage,
  stages,
};

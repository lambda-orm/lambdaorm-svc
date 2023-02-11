/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* enum String 
* returns Enum
* */
const _enum = ({ _enum }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        _enum,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const dataSources = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* datasource String 
* returns DataSource
* */
const datasource = ({ datasource }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        datasource,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const entities = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* entity String 
* returns Entity
* */
const entity = ({ entity }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        entity,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* mapping String 
* entity String 
* returns EntityMapping
* */
const entityMapping = ({ mapping, entity }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        mapping,
        entity,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const enums = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* mapping String 
* returns Mapping
* */
const mapping = ({ mapping }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        mapping,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const mappings = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* stage String 
* returns Stage
* */
const stage = ({ stage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stage,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
*
* returns List
* */
const stages = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  _enum,
  dataSources,
  datasource,
  entities,
  entity,
  entityMapping,
  enums,
  mapping,
  mappings,
  stage,
  stages,
};

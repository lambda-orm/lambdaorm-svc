/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { orm } = require('lambdaorm')

/**
*
* returns List
* */
const dataSources = () => new Promise(
  (resolve, reject) => {
    try {
      const result = []
      const sources = orm.schema.dataSource.dataSources
      for (const source of sources) {
        result.push({ name: source.name, dialect: source.dialect, mapping: source.mapping, connection: '***' })
      }
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)
/**
*
* datasource String 
* returns DataSource
* */
const datasource = ({ datasource }) => new Promise(
  async (resolve, reject) => {
    try {
      const result = orm.schema.dataSource.dataSources.find(p => p.name === datasource)
      resolve(Service.successResponse(result));
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
  (resolve, reject) => {
    try {
      const result = orm.schema.model.entities
      resolve(Service.successResponse(result))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)
/**
*
* entity String 
* returns Entity
* */
const entity = ({ entity }) => new Promise(
  async (resolve, reject) => {
    try {
      const result = orm.schema.model.entities.find(p => p.name === entity)
      resolve(Service.successResponse(result));
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
* enum String 
* returns Enum
* */
const _enum = ({ _enum }) => new Promise(
  async (resolve, reject) => {
    try {
      const result = orm.schema.model.enums.find(p => p.name === _enum)
      resolve(Service.successResponse(result));
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
  (resolve, reject) => {
    try {
      resolve(Service.successResponse(orm.schema.model.enums))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)
/**
*
* mapping String 
* returns Mapping
* */
const mapping = ({ mapping }) => new Promise(
  async (resolve, reject) => {
    try {
      const result = orm.schema.mapping.mappings.find(p => p.name === mapping)
      resolve(Service.successResponse(result));
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
  (resolve, reject) => {
    try {
      resolve(Service.successResponse(orm.schema.mapping.mappings))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)
/**
*
* mapping String 
* entity String 
* returns EntityMapping
* */
const entityMapping = ({ mapping, entity }) => new Promise(
  async (resolve, reject) => {
    try {
      const _mapping = orm.schema.mapping.mappings.find(p => p.name === mapping)
      const result = _mapping ? _mapping.entities.find(p => p.name === entity) : {}
      resolve(Service.successResponse(result));
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
      const result = orm.schema.stage.stages.find(p => p.name === stage)
      resolve(Service.successResponse(result));
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
  (resolve, reject) => {
    try {
      resolve(Service.successResponse(orm.schema.stage.stages))
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405
      ))
    }
  }
)

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

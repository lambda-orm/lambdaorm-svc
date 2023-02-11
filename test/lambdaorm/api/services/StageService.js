/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* stage String 
* returns SchemaData
* */
const _export = ({ stage }) => new Promise(
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
* stage String 
* schemaData SchemaData 
* returns oas_any_type_not_mapped
* */
const _import = ({ stage, schemaData }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stage,
        schemaData,
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
* returns Boolean
* */
const exists = ({ stage }) => new Promise(
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

module.exports = {
  _export,
  _import,
  exists,
};

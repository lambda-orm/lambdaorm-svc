/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* queryRequest QueryRequest  (optional)
* returns MetadataConstraint
* */
const constraints = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
* queryRequest QueryRequest 
* returns oas_any_type_not_mapped
* */
const execute = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
* queryRequest QueryRequest  (optional)
* returns Metadata
* */
const metadata = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
* queryRequest QueryRequest  (optional)
* returns List
* */
const model = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
* queryRequest QueryRequest  (optional)
* returns List
* */
const parameters = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
* queryRequest QueryRequest 
* returns MetadataSentence
* */
const sentence = ({ queryRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        queryRequest,
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
  constraints,
  execute,
  metadata,
  model,
  parameters,
  sentence,
};

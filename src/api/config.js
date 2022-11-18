const path = require('path');

const config = {
	ROOT_DIR: __dirname,
	URL_PORT: process.env.PORT || 9291,
	URL_PATH: process.env.HOST || 'http://localhost',
	WORKSPACE: process.env.WORKSPACE || '/workspace',
	BASE_VERSION: '',
	CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
	PROJECT_DIR: __dirname,
};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, 'uploaded_files');

module.exports = config;

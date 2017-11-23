const nodeEnvironment = process.env.NODE_ENV;
process.env.NODE_ENV = nodeEnvironment || 'development';

const isDevelopment = nodeEnvironment !== 'production';

const webpackDevConfig = require('./webpack.config.dev.js');
const webpackProdConfig = require('./webpack.config.prod.js');

module.exports = isDevelopment ? webpackDevConfig : webpackProdConfig;

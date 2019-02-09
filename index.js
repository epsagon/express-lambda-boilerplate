const serverless = require('serverless-http');
const epsagon = require('epsagon');

const server = require('./app');

epsagon.init({
  token: 'e08e7837-6f3d-4268-b2f4-20d46365aa3f',
  appName: 'express-lambda-blog',
  metadataOnly: false // Optional, send more trace data
});

const handler = serverless(server);

module.exports.server = epsagon.lambdaWrapper(
  async (event, context) => await handler(event, context)
);

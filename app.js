const express = require('express');
const cors = require('cors');

const apiRouter = require('./api');
const errorHandler = require('./helpers/errorHandler');

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, strict: false }));
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'Express API Powered by AWS Lambda!' });
});

server.use('/v1/api', apiRouter);
server.use(errorHandler.notFound);
server.use(errorHandler.internalServerError);

module.exports = server;

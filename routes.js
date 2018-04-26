'use strict';

const express = require('express');
const router = express.Router();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');
//TODO add logging here


module.exports = function(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/api/v1/health', (req, res) => { res.status(201).send('FNOL Property Services health check. All is well. Thanks for checking!')});
  app.use('/api/v1/incident', require('./api/incident'));
}

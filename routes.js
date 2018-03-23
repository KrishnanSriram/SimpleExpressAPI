'use strict';

const express = require('express');
const router = express.Router();
const user = require('./api/user')
//TODO add logging here


module.exports = function(app) {
  app.use('/api/v1/user', user);
}

'use strict';

const Schema = require('validate');

const LossLocationSchema = new Schema({
  description: {
    type: 'string',
    required: false,
  },
  ispropertyownersaddress: {
    type: 'boolean',
    required: false
  }
});

module.exports = LossLocationSchema;
'use strict';

const Schema = require('validate');

const InjurySchema = new Schema({
  description: {
    type: 'string'
  },
  representedbyattorney: {
    type: 'boolean',
    required: true,
  },
  lifeflight: {
    type: 'boolean',
    required: true,
  },
  isinjured: {
    type: 'boolean',
    required: true,
  },
  isfatal: {
    type: 'boolean',
    required: true,
  }
});

module.exports = InjurySchema;
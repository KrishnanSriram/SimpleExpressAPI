'use strict';

const Schema = require('validate');

const RepairsSchema = new Schema({
  refid: {
    type: 'string',
    required: true,
    message: 'RefID is required.'
  },
  lossestimate: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown'],
    message: 'lossestimate should be yes, no or unknown'
  },
  estimatedcost: {
    type: 'string',
    required: false
  },
  repairsmade: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown'],
    message: 'repairsmade should be yes, no or unknown'
  },
  repairamount: {
    type: 'string',
    required: false,
    message: 'Type of incident should be one of the following - dwelling, contents,personal property,additional living.',
    enum: ['dwelling', 'contents', 'personal property', 'additional living']
  },
});

module.exports = RepairsSchema;
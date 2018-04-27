'use strict';

const Schema = require('validate');

const TemporaryBoardupSchema = new Schema({
  refid: {
    type: 'string',
    required: true,
    message: 'RefID is required.'
  },
  isneeded: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown'],
    message: 'isneeded should be yes, no or unknown'

  },
  vendorcontacted: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown'],
    message: 'vendorcontacted should be yes, no or unknown'

  }
});

module.exports = TemporaryBoardupSchema;
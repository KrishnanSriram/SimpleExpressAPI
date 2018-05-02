'use strict';

const Schema = require('validate');

const PhoneSchema = new Schema({
  phonetype: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2,16}/),
    message: 'Phone type is required.'
  },
  phonenumber: {
    type: 'number',
    required: true,
    message: 'Phone number is required.'
  }
});

const MitigationCompanySchema = new Schema({
  refid: {
    type: 'string',
    required: true,
    message: 'RefID is required.'
  },
  company: {
    type: 'string',
    required: false
  },
  companycontacted: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown'],
    message: 'companycontacted should be yes, no or unknown'

  },
  phone: {
    type: [PhoneSchema],
    required: false
  }
});

module.exports = MitigationCompanySchema;
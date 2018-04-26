'use strict';

const Schema = require('validate');
const PhoneSchema = require('./phone');

const ContactSchema = new Schema({
  firstname: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2,16}/),
    message: 'First name is required.'
  },
  lastname: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2,16}/),
    message: 'Last name is required.'
  },
  dob: {
    type: 'string',
    required: true,
    message: 'DOB is required and should be in mm/dd/yyyy format'
  },
  email: {
    type: 'string',
    required: true,
    message: 'EMail ID is required'
  },
  phone: PhoneSchema
});

module.exports = ContactSchema;
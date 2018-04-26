'use strict';
const Schema = require('validate');

const AddressSchema = new Schema({
  address1: {
    type: 'string',
    required: true,
    length: { min: 3, max: 100 },
    message: 'Address1 is required.'
  },
  address2: {
    type: 'string',
    required: false
  },
  city: {
    type: 'string',
    required: true,
    message: 'City is required.'
  },
  state: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2}/),
    message: 'State is required and cannot be anything more than 2 characters long!'
  },
  zipcode: {
    type: 'string',
    required: true,
    message: 'zipcode is required.'
  }
});

module.exports = AddressSchema;
'use strict';

const Schema = require('validate')

const User = new Schema({
  firstname: {
    type: 'string',
    required: true,
    length: { min: 3, max: 32 }
  },
  lastname: {
    type: 'string',
    required: true,
    length: { min: 3, max: 32 }
  },
  dob: {
    type: 'string',
    required: true
  }
});

module.exports = User;
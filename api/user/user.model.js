'use strict';

const Schema = require('validate')

const User = new Schema({
  firstname: {
    type: 'string',
    required: true,
    length: { min: 3, max: 32 },
    match: /^[a-zA-Z ]*$/
  },
  lastname: {
    type: 'string',
    required: true,
    length: { min: 3, max: 32 },
    match: /^[a-zA-Z ]*$/
  },
  dob: {
    type: 'string',
    required: true,
    length: { min:8, max: 10},
    match: /(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/]\d{4}/
  }
});

module.exports = User;

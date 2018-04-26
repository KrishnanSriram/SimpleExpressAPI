'use strict';

const Schema = require('validate');

/*
"people": {
  "driverinjured": "no",
  "fatal": "no",
  "numberofpassengers": 2,
  "passengersinjured": "yes",
  "passengerfatalities": "no"
}
 */

const PeopleSchema = new Schema({
  driverinjured: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown']
  },
  fatal: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown']
  },
  numberofpassengers: {
    type: 'number',
    required: false
  },
  passengersinjured: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown']
  },
  passengerfatalities: {
    type: 'string',
    required: false,
    enum: ['yes', 'no', 'unknown']
  },
});

module.exports = PeopleSchema;
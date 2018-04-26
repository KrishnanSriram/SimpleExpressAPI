'use strict';

const Schema = require('validate');
const Injury = require('./injury');
const Contact = require('./contact');
/*
"people": {
  "driverinjured": "no",
  "fatal": "no",
  "numberofpassengers": 2,
  "passengersinjured": "yes",
  "passengerfatalities": "no"
}
 */

const PassengerSchema = new Schema({
  contact: Contact,
  isminor: {type : 'boolean',required : true },
  injury: Injury,
});

module.exports = PassengerSchema;
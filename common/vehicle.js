'use strict';

const Schema = require('validate');

/*
{
	"vehicle": {
    "year": 1997,
    "make": "BMW",
    "model": "x5",
    "isvehicledamaged": true,
    "details": {
        "vin": "ASDLKFN930475ASDKJFB3",
        "license": "GRT 1234",
        "color": "dark blue"
    }
}
 */

const VehicleDetailsSchema = new Schema({
  vin: {
    type: 'string',
    required: true,
    message: 'VIN of vehicle is required.'
  },
  license: {
    type: 'string',
    required: true,
    message: 'License is required.'
  },
  color: {
    type: 'string',
    required: true,
    message: 'Color of vehicle is required.'
  },
})

const VehicleSchema = new Schema({
  year: {
    type: 'number',
    required: true,
    message: 'Year of vehicle is required.'
  },
  make: {
    type: 'string',
    required: true,
    message: 'Make is required.'
  },
  model: {
    type: 'string',
    required: true,
    message: 'Model is required.'
  },
  isvehicledamaged: {
    type: 'boolean',
    default: false
  },
  details: VehicleDetailsSchema

});

module.exports = VehicleSchema;
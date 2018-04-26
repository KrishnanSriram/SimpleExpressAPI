'use strict';

const Schema = require('validate');

/*
"damagedetails": {
  "description": "total damage, need a new car",
  "vehicledrivable": "no",
  "vehicletowed": "yes"
}
 */

const VehicleDamageDetailsSchema = new Schema({
  description: {
    type: 'string',
    required: false
  },
  vehicledrivable: {
    type: 'boolean',
    required: true,
    default: true
  },
  vehicletowed: {
    type: 'boolean',
    required: false,
    default: false
  },
});

module.exports = VehicleDamageDetailsSchema;
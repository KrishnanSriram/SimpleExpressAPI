'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PropertySchema = new Schema({
  refid:{
    type : 'string'
  },
  impactedproperty: {
    type : 'string'
  },
  describeproperty: {
    type : 'string'
  },
  describedamages: {
    type : 'string',
    length: { min: 3, max: 360 },
  },
  typeofincident: {
    type : 'string'
  }
});

module.exports = mongoose.model('Property', PropertySchema);
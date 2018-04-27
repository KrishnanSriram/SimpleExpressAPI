'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RepairsSchema = new Schema({
  refid:{
    type : 'string'
  },
  lossestimate: {
    type : 'string'
  },
  estimatecost: {
    type : 'string'
  },
  repairsmade: {
    type : 'string'
  },
  repairamount: {
    type : 'string'
  }
});

module.exports = mongoose.model('Repairs', RepairsSchema);
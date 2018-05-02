'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncidentSchema = new Schema({
  refid:{
    type : 'string'
  },
  dateofloss: {
    type: "string"
  },
  causeofloss: {
    type : 'string'
  },
  detailedcauseofloss: {
    type : 'string'
  },
  incidentdescription: {
    type : 'string'
  }
});

module.exports = mongoose.model('Incident', IncidentSchema);
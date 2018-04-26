'use strict';

const Schema = require('validate');

const IncidentValidatorSchema = new Schema({
  dateofloss : {
    type : 'string',
    required : true,
    length: { min: 8, max: 10 },
    match: /^[a-zA-Z ]*$/
  },
  causeofloss : {
    type : 'string',
    required : true,
    match: /^[a-zA-Z ]*$/
  },
  detailedcauseofloss : {
    type : 'string',
    required : true,
    match: /^[a-zA-Z ]*$/
  },
  incidentdescription : {
    type : 'string',
    required : true,
    length: { min: 3, max: 400 },
    match: /^[a-zA-Z0-9 ]*$/
 
  }
},{
  strip: false
});

module.exports = IncidentValidatorSchema;
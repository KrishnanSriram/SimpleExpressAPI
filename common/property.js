'use strict';

const Schema = require('validate');

const PropertySchema = new Schema({
  refid: {
    type: 'string',
    required: true,
    message: 'RefID is required.'
  },
  impactedproperty: {
    type: 'string',
    required: true,
    message: 'Official report number is required.'
  },
  describeproperty: {
    type: 'string',
    required: false,
    length: { min: 0, max: 360 },
    message: 'Property description is cannot be more than 360 characters long.'
  },
  describedamages: {
    type: 'string',
    required: false,
    length: { min: 0, max: 360 },
    message: 'Damages description cannot be more than 360 characters long.'
  },
  typeofincident: {
    type: 'string',
    required: false,
    message: 'Type of incident should be one of the following - dwelling, contents,personal property,additional living.',
    enum: ['dwelling', 'contents', 'personal property', 'additional living']
  },
});

module.exports = PropertySchema;
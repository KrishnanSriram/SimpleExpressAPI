'use strict';

const Schema = require('validate');
const AddressSchema = require('./address').AddressSchema;

var LocationSchema = new Schema({
  name: {
    type: 'string',
    required: true,
    message: 'Location name is required.'
  },
  address: {type: 'object'}
});

function Location(location) {
  this.errors = [];
  this.validate = () => {
    const addressSchemaerrors = AddressSchema.validate(location.address, {strip: false});
    addressSchemaerrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    });
    const locationSchemaerrors = LocationSchema.validate(location, {strip: false});
    locationSchemaerrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    });
  }
  this.hasErrors = function() {
    return (this.errors.length > 0);
  }
}

module.exports = Location;
/*const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: String,
  address: {type: mongoose.Schema.Types.ObjectId, ref: 'Address'}
}, { _id : false });

LocationSchema.methods.validate = function() {
  console.log('Validate address', this.name);
  try {
    if(!this.name.trim() || !this.address.validate()) {
      return false
    }
  } catch (e) {
    return false;
  }

  return true;
}

module.exports = mongoose.model('Location', LocationSchema);
*/
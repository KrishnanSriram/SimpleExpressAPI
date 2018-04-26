'use strict';

const Schema = require('validate');
const AddressSchema = require('./address').AddressSchema;
const ContactSchema = require('./contact').ContactSchema;

const PersonSchema = new Schema({
  licensenumber: {
    type: 'string',
    required: true,
    match: (/[0-9a-zA-Z]{7,10}/),
    message: 'License number is required.'
  },
  contact: {
    type: 'object',
    required: true,
    message: 'Contact information is required.'
  },
  address: {
    type: 'object',
    required: true,
    message: 'Address information is required'
  }
});

function Person(person) {
  this.errors = [];
  this.validate = () => {
    const contactErros = ContactSchema.validate(person.contact, {strip: false});
    if(contactErros) {
      contactErros.map((error) => {
        this.errors.push({ path: error.path, message: error.message});
      });
    }

    console.log('Address', person.address);
    const addresserrors = AddressSchema.validate(person.address, { strip: false});
    addresserrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    })

    const schemaerrors = PersonSchema.validate(person, { strip: false});
    schemaerrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    })
  }
  this.hasErrors = function() {
    return (this.errors.length > 0);
  }
}


module.exports = Person;

/*
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PersonSchema = new Schema({
  contact:{type: Object, required: true},
  licensenumber: {type: String, required: true},
  address: {type: Object}
}, { _id : false });

PersonSchema.methods.validate = function() {
  console.log('Validate person');
  if(!this.contact.validate()) {
    console.log('Contact is invalid')
    return false
  }
  if(!this.address.validate()) {
    console.log('Address is invalid')
    return false
  }

  return true;
}

module.exports = mongoose.model('Person', PersonSchema);
*/
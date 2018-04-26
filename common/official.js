'use strict';

'use strict';
const Schema = require('validate');

const OfficialSchema = new Schema({
  name: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2,30}/),
    message: 'Official name is required.'
  },
  reportnumber: {
    type: 'string',
    required: true,
    message: 'Official report number is required.'
  },
  department: {
    type: 'string',
    required: true,
    message: 'Official department is required.'
  },
  atscene: {
    type: 'boolean',
    required: true,
    message: 'At scene should be either true or false'
  }
});

function Official(official) {
  this.errors = [];
  this.validate = () => {
    console.log('Official validation', official);
    const schemaerrors = OfficialSchema.validate(official, {strip: false});

    schemaerrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    })
  }
  this.hasErrors = function() {
    return (this.errors.length > 0);
  }
}

module.exports = Official;

/*
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const OfficialSchema = new Schema({
  name: String,
  reportnumber: String,
  department: String,
  atscene: Boolean
}, { _id : false });

OfficialSchema.methods.validate = function() {
  console.log('Validate Official', this.name, this.reportnumber);
  try {
    if(!this.name.trim() || !this.department.trim() || !this.reportnumber.trim()) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = mongoose.model('Official', OfficialSchema);
*/
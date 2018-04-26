'use strict';

const Schema = require('validate');

const LossSchema = new Schema({
  date: {
    type: 'string',
    required: true,
    message: 'Date is required.'
  },
  cause: {
    type: 'string',
    required: true,
    match: (/[0-9a-zA-Z]{2,300}/),
    message: 'Cause is required and should be less than 300 characters'
  },
  description: {
    type: 'string',
    required: false
  }
});

function Loss(loss) {
  this.errors = [];
  this.validate = () => {
    const schemaerrors = LossSchema.validate(loss);
    schemaerrors.map((error) => {
      this.errors.push({ path: error.path, message: error.message});
    })
  }
  this.hasErrors = function() {
    return (this.errors.length > 0);
  }
}


module.exports = Loss;

/*
const mongoose = require('mongoose'),

    Schema = mongoose.Schema;

const LossSchema = new Schema({
  date: String,
  cause: String,
  description: String
}, { _id : false });

LossSchema.methods.validate = function() {
  console.log('Validate loss', this.date, this.cause);
  try {
    if(!this.date.trim() || !this.cause.trim()) {
      return false
    }
  } catch (e) {
    return false;
  }

  return true;
}

module.exports = mongoose.model('Loss', LossSchema);

*/
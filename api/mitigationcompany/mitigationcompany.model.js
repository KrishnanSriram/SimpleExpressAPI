'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MitigationCompanySchema = new Schema({
  refid:{
    type : 'string'
  },
  company: {
    type : 'string'
  },
  companycontacted: {
    type : 'string'
  },
  phonenumber: {
    type : 'object'
  }
});

module.exports = mongoose.model('MitigationCompany', MitigationCompanySchema);
'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TemporaryBoardupSchema = new Schema({
  refid:{
    type : 'string'
  },
  isneeded: {
    type : 'string'
  },
  vendorcontacted: {
    type : 'string'
  }
});

module.exports = mongoose.model('TemporaryBoardup', TemporaryBoardupSchema);
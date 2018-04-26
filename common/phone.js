'use strict';

const Schema = require('validate');

/*
{
	"phone": {
		"preferredphone": "home",
		"phonenumbers": [{
			"phonetype": "mobile",
			"number": "34876538756"
		}, {
			"phonetype": "home",
			"number": "34876538756"
		}]
	}
}
 */

const PhoneCollection = new Schema({
  phonetype: {
    type: 'string',
    required: true,
    match: (/[a-zA-Z]{2,16}/),
    message: 'Phone type is required.'
  },
  phonenumber: {
    type: 'number',
    required: true,
    message: 'Phone number is required.'
  }
});

const PhoneSchema = new Schema({
  preferredphone: {
    type: 'string',
    required: true
  },
  phonenumbers:[PhoneCollection]
});

module.exports = PhoneSchema;
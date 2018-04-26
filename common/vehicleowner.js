'use strict';

const Schema = require('validate');
const Contact = require('./contact');
const Address = require('./address');
/*
{
  "vehicleownerindividual": "yes",
  "contact":{
    "firstname": "Ian",
    "lastname": "Chappel",
    "phone": {
      "preferredphone":"home",
      "phonenumbers":[{
          "type": "mobile",
          "phonenumber": "5834658734"
      },
      {
          "type": "home",
          "phonenumber": "5834658844"
      }]
    },
    "dob": "10/03/1969",
    "email": "ian.chappel@gmail.com"
  },
  "address":{
    "address1": "302, columbus dr",
    "address2": "apartment #4154",
    "city": "Columbus",
    "state": "Ohio",
    "zip": "34534"
  }
}
*/
const VehicleOwnerDetailsSchema = new Schema({
  // Should we have this property here. If oyu decide to move this property out
  // check with the code in vehicles.controller - create validation process
  // We can of course change it by removing this property from here, however,
  // what comes from the user should contain this field in the request. We validate
  // for vehicleownerindividual and other properties - VehicleOwnerDetailsSchema
  // separately.

  vehicleownerindividual: {
    type:'string',
    required: false,
    enum: ['yes', 'no', 'unknown']
  },
  contact: Contact,
  address: Address
});

module.exports = VehicleOwnerDetailsSchema;
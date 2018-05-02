/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

const _ = require('lodash');
const MitigationCompany = require('./mitigationcompany.model');
const MitigationCompanySchema = require('./mitigationcompany.validator');

// Get list of things
exports.index = (req, res) => {
  if(req.query["refid"] === undefined || req.query["refid"] == null || req.query["refid"].length <= 0) {
    return handleError(res, 501, "Missing refid parameter");
  }
  const filter = {refid: req.query.refid};
  console.log(req.query, req.params);
  console.log('MitigationCompany: Index invoked', filter);
  MitigationCompany.find(filter, function (err, allIncidents) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(allIncidents);
  });
};

// Get a single thing
exports.show = (req, res) => {
  const filter = {refid: req.params.id};
  console.log('MitigationCompany: Show invoked', filter);
  MitigationCompany.findOne(filter, function (err, item) {
    console.log('Received response for MitigationCompany: Show', item);
    if(err) { return handleError(res, 501, err); }
    if(!item) { return res.status(200).json({}); }
    return res.json(item);
  });
};

// Creates a new incident in the DB.
exports.create = (req, res) => {
  const mitigationCompanyInformation = processMitigationCompanyFromRequest(req);
  if(hasRefID(mitigationCompanyInformation) == false) {
    return handleError(res, 501, 'RefID is missing');
  }

  const validation_errors = MitigationCompanySchema.validate(mitigationCompanyInformation);
  if(validation_errors.length > 0) {
    return handleError(res, 501, validation_errors);
  }

  console.log("Validation passed. Persist information in DB!", mitigationCompanyInformation);
  MitigationCompany.create(mitigationCompanyInformation, function(err, item) {
    console.log('Received response from DB', err, item);
    if(err) { return handleError(res, 501, err); }
    return res.status(201).json(item);
  });
};

function processMitigationCompanyFromRequest(req) {
  const { company, companycontacted, phonenumber } = req.body.mitigationcompany;
  const { refid } = req.body;
  const mitigationCompany = {
    refid: refid,
    company: company,
    companycontacted: companycontacted,
    phonenumber: phonenumber
  };

  return mitigationCompany;
}

function hasRefID(propertyInformation) {
  if(propertyInformation.refid && propertyInformation.refid.trim().length > 0)
    return true;
  return false;
}

//TODO: Move this to a common response location
function handleError(res, code, message) {
  return res.status(501).json({error: {code: code, message: message}})
}

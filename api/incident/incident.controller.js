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
const Incident = require('./incident.model');
const IncidentValidationSchema = require('./incident.model.validator');

// Get list of things
exports.index = (req, res) => {
  if(req.query["refid"] === undefined || req.query["refid"] == null || req.query["refid"].length <= 0) {
    return handleError(res, 501, "Missing refid parameter");
  }
  const filter = {refid: req.query.refid};
  console.log(req.query, req.params);
  console.log('Incident: Index invoked', filter);
  Incident.find(filter, function (err, allIncidents) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(allIncidents);
  });
};

// Get a single thing
exports.show = (req, res) => {
  const filter = {refid: req.params.id};
  console.log('Incident: Show invoked', filter);
  Incident.findOne(filter, function (err, item) {
    console.log('Received response for Incident: Show', item);
    if(err) { return handleError(res, 501, err); }
    if(!item) { return res.status(200).json({}); }
    return res.json(item);
  });
};

// Creates a new incident in the DB.
exports.create = (req, res) => {
  const incidentInformation = processIncidentFromRequest(req);
  if(hasRefID(incidentInformation) == false) {
    return handleError(res, 501, 'RefID is missing');
  }

  const validation_errors = IncidentValidationSchema.validate(incidentInformation);
  if(validation_errors.length > 0) {
    return handleError(res, 501, validation_errors);
  }

  console.log("Validation passed. Persist information in DB!", incidentInformation);
  Incident.create(incidentInformation, function(err, item) {
    console.log('Received response from DB', err, item);
    if(err) { return handleError(res, 501, err); }
    return res.status(201).json(item);
  });
};

function processIncidentFromRequest(req) {
  const { dateofloss, causeofloss, detailedcauseofloss, incidentdescription } = req.body;
  const { refid } = req.body;
  const incident = {
    refid: refid,
    dateofloss: dateofloss,
    causeofloss: causeofloss,
    detailedcauseofloss: detailedcauseofloss,
    incidentdescription: incidentdescription,
  };

  return incident;
}

function hasRefID(incidentInformation) {
  if(incidentInformation.refid && incidentInformation.refid.trim().length > 0)
    return true;
  return false;
}

//TODO: Move this to a common response location
function handleError(res, code, message) {
  return res.status(501).json({error: {code: code, message: message}})
}

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
const Repairs = require('./repairs.model');
const RepairsSchema = require('./../../common/repairs');

// Get list of things
exports.index = (req, res) => {
  if(req.query["refid"] === undefined || req.query["refid"] == null || req.query["refid"].length <= 0) {
    return handleError(res, 501, "Missing refid parameter");
  }
  const filter = {refid: req.query.refid};
  console.log(req.query, req.params);
  console.log('Repairs: Index invoked', filter);
  Repairs.find(filter, function (err, allIncidents) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(allIncidents);
  });
};

// Get a single thing
exports.show = (req, res) => {
  const filter = {refid: req.params.id};
  console.log('Repairs: Show invoked', filter);
  Repairs.findOne(filter, function (err, item) {
    console.log('Received response for Repairs: Show', item);
    if(err) { return handleError(res, 501, err); }
    if(!item) { return res.status(200).json({}); }
    return res.json(item);
  });
};

// Creates a new incident in the DB.
exports.create = (req, res) => {
  const repairsInformation = processRepairsFromRequest(req);
  if(hasRefID(repairsInformation) == false) {
    return handleError(res, 501, 'RefID is missing');
  }

  const validation_errors = RepairsSchema.validate(propertyInformation);
  if(validation_errors.length > 0) {
    return handleError(res, 501, validation_errors);
  }

  console.log("Validation passed. Persist information in DB!", repairsInformation);
  Repairs.create(repairsInformation, function(err, item) {
    console.log('Received response from DB', err, item);
    if(err) { return handleError(res, 501, err); }
    return res.status(201).json(item);
  });
};

function processPropertyFromRequest(req) {
  const { lossestimate, estimatedcost, repairsmade, repairamount } = req.body.property;
  const { refid } = req.body;
  const repairs = {
    refid: refid,
    lossestimate: lossestimate,
    estimatedcost: estimatedcost,
    repairsmade: repairsmade,
    repairamount: repairamount,
  };

  return repairs;
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

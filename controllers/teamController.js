const teamModel = require('../models/teamModel');
const database = require('../common/database');

// All team data
exports.teamAll = function(req, res) {
  const input = {'user': req.params.user.toLowerCase()};
  database.apiUsage(req);
  teamModel.teamAll(input).then(data => res.status(200).json(data));
};


// All employee data
exports.teamAllEmployee = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Team bio data
exports.teamBio = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Employee bio data
exports.teamBioEmployee = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Team performance data
exports.teamPerformance = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Employee performance data
exports.teamPerformanceEmployee = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Team par data
exports.teamPar = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Employee par data
exports.teamParEmployee = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};

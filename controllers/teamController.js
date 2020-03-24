const teamModel = require('../models/teamModel');

// All team data
exports.teamAll = function(req, res) {
  const input = {'user': req.params.user.toLowerCase()};
  teamModel.teamAll(input).then(data => res.status(200).json(data));
};


// All employee data
exports.teamAllEmployee = function(req, res) {
  const input = {'user': req.params.user, 'employee': req.params.employee};
  res.status(200).json(input);
};


// Team bio data
exports.teamBio = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Employee bio data
exports.teamBioEmployee = function(req, res) {
  const input = {'user': req.params.user, 'employee': req.params.employee};
  res.status(200).json(input);
};


// Team performance data
exports.teamPerformance = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Employee performance data
exports.teamPerformanceEmployee = function(req, res) {
  const input = {'user': req.params.user, 'employee': req.params.employee};
  res.status(200).json(input);
};


// Team par data
exports.teamPar = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Employee par data
exports.teamParEmployee = function(req, res) {
  const input = {'user': req.params.user, 'employee': req.params.employee};
  res.status(200).json(input);
};

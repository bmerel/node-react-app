const teamModel = require('../models/teamModel');
const userModel = require('../models/userModel');

// All Team Data
exports.teamAll = function(req, res) {
  let user = req.params.user;
  teamModel.teamAll(user).then(data => res.status(200).json(data));
};


// All Team Employee Data
exports.teamAllEmployee = function(req, res) {
  res.status(200).json({'user': req.params.user, 'employee': req.params.employee});
};


// Team Bio Data
exports.teamBio = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// Team Employee Bio Data
exports.teamBioEmployee = function(req, res) {
  res.status(200).json({'user': req.params.user, 'employee': req.params.employee});
};


// Team Performance Data
exports.teamPerformance = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// Team Employee Performance Data
exports.teamPerformanceEmployee = function(req, res) {
  res.status(200).json({'user': req.params.user, 'employee': req.params.employee});
};


// Team Par Data
exports.teamPar = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// Team Employee Par Data
exports.teamParEmployee = function(req, res) {
  res.status(200).json({'user': req.params.user, 'employee': req.params.employee});
};

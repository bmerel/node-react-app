const userModel = require('../models/userModel');

// All data
exports.userAll = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Bio data
exports.userBio = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Performance data
exports.userPerformance = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Performance item data
exports.userPerformanceItem = function(req, res) {
  const input = {'user': req.params.user, 'id': req.params.id};
  res.status(200).json(input);
};


// PAR data
exports.userPar = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// PAR item data
exports.userParItem = function(req, res) {
  const input = {'user': req.params.user, 'id': req.params.id};
  res.status(200).json(input);
};


// Transaction data
exports.userTransaction = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Transaction item data
exports.userTransactionItem = function(req, res) {
  const input = {'user': req.params.user, 'id': req.params.id};
  res.status(200).json(input);
};


// Approval data
exports.userApproval = function(req, res) {
  const input = {'user': req.params.user};
  res.status(200).json(input);
};


// Approval item data
exports.userApprovalItem = function(req, res) {
  const input = {'user': req.params.user, 'id': req.params.id};
  res.status(200).json(input);
};

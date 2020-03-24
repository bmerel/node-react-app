const userModel = require('../models/userModel');
const database = require('../common/database');

// All data
exports.userAll = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Bio data
exports.userBio = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Performance data
exports.userPerformance = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Performance item data
exports.userPerformanceItem = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// PAR data
exports.userPar = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// PAR item data
exports.userParItem = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Transaction data
exports.userTransaction = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Transaction item data
exports.userTransactionItem = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Approval data
exports.userApproval = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};


// Approval item data
exports.userApprovalItem = function(req, res) {
  database.apiUsage(req);
  res.status(200).json(req.params);
};

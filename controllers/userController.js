// All User Data
exports.userAll = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User Bio Data
exports.userBio = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User Performance Summary Data
exports.userPerformance = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User Performance Item Data
exports.userPerformanceItem = function(req, res) {
  res.status(200).json({"user": req.params.user, "id": req.params.id});
};


// User PAR Summary Data
exports.userPar = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User PAR Summary Data
exports.userParItem = function(req, res) {
  res.status(200).json({"user": req.params.user, "id": req.params.id});
};


// User Transaction Summary Data
exports.userTransaction = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User Transaction Item Data
exports.userTransactionItem = function(req, res) {
  res.status(200).json({"user": req.params.user, "id": req.params.id});
};


// User Approval Summary Data
exports.userApproval = function(req, res) {
  res.status(200).json({"user": req.params.user});
};


// User Approval Item Data
exports.userApprovalItem = function(req, res) {
  res.status(200).json({"user": req.params.user, "id": req.params.id});
};

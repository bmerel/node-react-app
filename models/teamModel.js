const database = require('../common/database');


// All team data
exports.teamAll = function(input) {
  const text = 'SELECT * FROM users WHERE LOWER(oprid) = $1';
  const values = [input.user];
  const query = {text: text, values: values};

  return database.select(query)
};


// All employee data
exports.teamAllEmployee = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Team bio data
exports.teamBio = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Employee bio data
exports.teamBioEmployee = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Team performance data
exports.teamPerformance = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Employee performance data
exports.teamPerformanceEmployee = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Team par data
exports.teamPar = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};


// Employee par data
exports.teamParEmployee = function(input) {
  const text = '';
  const values = [];
  const query = {text: text, values: values};

  return database.select(query)
};

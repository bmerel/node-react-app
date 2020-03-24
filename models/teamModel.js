const database = require('../common/database');


// All team data
exports.teamAll = function(input) {
  const name = 'teamAll';
  const text = 'SELECT * FROM users WHERE LOWER(oprid) = $1';
  const values = [input.user];
  const query = {name: name, text: text, values: values};

  return database.select(query)
};


// All employee data
exports.teamAllEmployee = function(input) {
  const name = 'teamAllEmployee';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Team bio data
exports.teamBio = function(input) {
  const name = 'teamBio';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Employee bio data
exports.teamBioEmployee = function(input) {
  const name = 'teamBioEmployee';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Team performance data
exports.teamPerformance = function(input) {
  const name = 'teamPerformance';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Employee performance data
exports.teamPerformanceEmployee = function(input) {
  const name = 'teamPerformanceEmployee';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Team par data
exports.teamPar = function(input) {
  const name = 'teamPar';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};


// Employee par data
exports.teamParEmployee = function(input) {
  const name = 'teamParEmployee';
  const text = '';
  const values = [];
  const query = {};

  return database.select(query)
};

const database = require('../common/database');

exports.teamAll = function(user) {
  const query = {
    name: 'selectTeamAll',
    text: 'SELECT * FROM users WHERE firstname = $1',
    values: [user],
  }

  return database.select(query)

}

//const query = `SELECT * FROM users`;
// data = database.select(query).then(res => console.log(res))
//data = database.select(query)
//data.then(res => console.log(res))

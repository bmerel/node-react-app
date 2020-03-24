// import packages
// import configuration
const { Pool } = require('pg');
const config = require('../configuration.json')

// import database configuration
// get database configuration values
const databaseConfig = config['development']['database'];
const host = databaseConfig['host'];
const port = databaseConfig['port'];
const database = databaseConfig['database'];
const username = databaseConfig['username'];
const password = databaseConfig['password'];

// create PostgreSQL pool of clients for performance
const pool = new Pool({user: username, host: host, database: database, password: password, port: port});

// create default PostgreSQL pool error
pool.on('error', (err, client) => {
    console.error('Error:', err);
});


// create select query
exports.select = async function(query) {
      try {
          const client = await pool.connect();
          const res = await client.query(query);
          return res.rows;
      } catch (err) {
          console.error(err);
      };
};

const config = require('../config.json')
const { Pool } = require('pg');

const databaseConfig = config['development']['database'];
const host = databaseConfig['host'];
const port = databaseConfig['port'];
const database = databaseConfig['database'];
const username = databaseConfig['username'];
const password = databaseConfig['password'];

const pool = new Pool({
    user: username,
    host: host,
    database: database,
    password: password,
    port: port,
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

exports.select = async function(query) {
      try {
          const client = await pool.connect();
          const res = await client.query(query);
          return res.rows;
      } catch (err) {
          console.error(err);
      };
};

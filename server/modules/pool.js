const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  // Enter your database name below
  database: 'test_database'
});

module.exports = pool;
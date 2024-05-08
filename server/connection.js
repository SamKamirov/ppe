const Pool = require("pg").Pool;
const pool = new Pool({
  // user: "mint",
  user: 'postgres',
  host: "localhost",
  database: "ppe",
  password: "postgres",
  port: 5432,
});

module.exports = { pool };

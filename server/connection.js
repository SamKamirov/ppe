const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ppe",
  password: "58632",
  port: 5432,
});

module.exports = { pool };

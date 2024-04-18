const Pool = require("pg").Pool;
const pool = new Pool({
  user: "mint",
  host: "localhost",
  database: "ppe",
  password: "58632",
  port: 5432,
});

module.exports = { pool };

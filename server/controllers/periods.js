const asyncWrapper = require("../async");
const { pool } = require("../connection");

const getPeriods = asyncWrapper(async (req, res) => {
    const result = await pool.query('select * from periods');
    res.status(200).json([...result.rows])
});

module.exports = { getPeriods };
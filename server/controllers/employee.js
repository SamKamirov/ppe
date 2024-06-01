const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { adaptEmployeeToClient } = require("../utils/utils");

const getEmployees = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from employee');
    const adapted = response.rows ? response.rows.map(adaptEmployeeToClient) : null;
    res.status(200).json([...adapted]);
});

module.exports = { getEmployees };
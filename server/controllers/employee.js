const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { adaptEmployeeToClient } = require("../utils/utils");

const isValidEmployee = (employee) => {

}

const getEmployees = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from employee');
    const adapted = response.rows ? response.rows.map(adaptEmployeeToClient) : null;
    res.status(200).json([...adapted]);
});

const insertEmployee = asyncWrapper(async (req, res) => {
    const body = req.body;

    const response = await pool.query(`insert into employee values('${personellNumber}',
    '${middleName}', '${lastName}', '${structuralUnit}', '${position}', '${enterDate}',
    '${changePositionDate}', '${sex}', '${height}', '${clothesSize}', '${shoeSize}', '${headwearSize}',
    '${gasMaskSize}')`)
});

module.exports = {
    getEmployees,
    insertEmployee
};
const asyncWrapper = require("../async");
const { pool } = require("../connection");

const getSizesReport = asyncWrapper(async (req, res) => {
    const response = await pool.query('select personell_number, first_name, middle_name, last_name, clothes_size, shoe_size, headwear_size, employee.gas_mask_size, ' +
        'structural_units.title as structural_unit, positions.title as position from employee ' +
        'inner join structural_units on employee.structural_unit = structural_units.id ' +
        'inner join positions on employee.position = positions.id;')
    res.status(201).json(response.rows);
});

const getRulesCheckReportData = asyncWrapper(async, (req, res) => {
    const response = pool.query('select ')
})

module.exports = { getSizesReport };
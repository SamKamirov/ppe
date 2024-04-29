const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { getSizesReportQuery } = require("../queries/reports");
const { adaptSizeReportToClient, adaptRuleToClient } = require("../utils/utils");

const getSizesReport = asyncWrapper(async (req, res) => {
    const response = await pool.query(getSizesReportQuery());
    const adapted = response.rows.map((item) => adaptSizeReportToClient(item));
    res.status(201).json(adapted);
});

const getRulesCheckReportData = asyncWrapper(async (req, res) => {
    const response = await pool.query('select first_name, middle_name, last_name, structural_units.title as structural_unit, positions.title as position, fullname from ppe_using ' +
        'inner join ppe on ppe.id = ppe_using.ppe ' +
        'inner join employee on ppe_using.employee = employee.id ' +
        'inner join structural_units on employee.structural_unit = structural_units.id ' +
        'inner join positions on employee.position = positions.id;');

    const adapted = response.rows.map((item) => adaptRuleToClient(item));
    res.status(200).json(adapted)
})

module.exports = { getSizesReport, getRulesCheckReportData };
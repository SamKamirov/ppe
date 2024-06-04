const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { adaptEmployeeToClient, adaptPPEToClient, isValidRuleData, sendErrorMessage } = require("../utils/utils");

const getEmployees = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from employee');
    const adapted = response.rows.map((item) => adaptEmployeeToClient(item))
    res.status(201).json(adapted);
});

const getRuleSetData = asyncWrapper(async (req, res) => {
    const ppes = await pool.query('select * from ppe');
    const periods = await pool.query('select * from periods');
    const employees = await pool.query('select * from employee');
    const sertificates = await pool.query('select * from sertificates');

    const ppesRows = ppes.rows.map((ppe) => adaptPPEToClient(ppe));
    const periodsRows = periods.rows;
    const employeesRows = employees.rows.map((employee) => adaptEmployeeToClient(employee));
    const sertificatesRows = sertificates.rows;

    const adapted = { ppes: ppesRows, periods: periodsRows, employees: employeesRows, sertificates: sertificatesRows };
    res.status(201).json(adapted);
});

const insertRuleSet = asyncWrapper(async (req, res) => {
    const body = req.body;

    if (!isValidRuleData(body)) {
        sendErrorMessage(res, 'Ошибка, проверьте правильность введённых данных');
        return
    };

    const response = await pool.query(
        `insert into ppe_using(ppe, period, amount, start_date, end_date, employee, sertificate) 
        values ('${body.ppe}', '${body.period}', '${body.amount}', '${body.dateStart}', '${body.dateEnd}', '${body.employee}', '${body.sertificate}')`
    );

    res.status(200).json({ message: 'Успешно!' })
});

const getStructuralUnits = asyncWrapper(async (req, res) => {
    const structuralUnits = await pool.query('select * from structural_units');
    res.status(200).json([...structuralUnits.rows])
});

const getPositions = asyncWrapper(async (req, res) => {
    const positions = await pool.query('select * from positions');
    res.status(200).json([...positions.rows]);
});

module.exports = {
    getEmployees,
    getRuleSetData,
    insertRuleSet,
    getStructuralUnits,
    getPositions
};
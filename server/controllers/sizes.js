const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { getSizesReport } = require("../queries/reports");
const { adaptSizeReportToClient, adaptSizesTypesToClient } = require("../utils/utils");

const getSinglePPESizes = asyncWrapper(async (req, res) => {
    const response = await pool.query(getSizesReport());
    const adapted = response.rows.map((item) => adaptSizeReportToClient(item));
    res.status(201).json(adapted);
})

const getSizesTypes = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from size_types');
    res.status(201).json([...response.rows]);
});

module.exports = { getSizesTypes };
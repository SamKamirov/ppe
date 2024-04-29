const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { getSizesReport } = require("../queries/reports");
const { adaptSizeReportToClient } = require("../utils/utils");

const getSinglePPESizes = asyncWrapper(async (req, res) => {
    const response = await pool.query(getSizesReport());
    const adapted = response.rows.map((item) => adaptSizeReportToClient(item));
    res.status(201).json(adapted);
})

module.exports = { getSinglePPESizes };
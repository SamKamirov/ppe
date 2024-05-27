const asyncWrapper = require("../async");
const { pool } = require("../connection");
const { adaptSizeRangeToClient } = require("../utils/utils");

const getSizesTypes = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from size_types');
    res.status(201).json([...response.rows]);
});

const getSizeRanges = asyncWrapper(async (req, res) => {
    const response = await pool.query('select sizes.id, chest_size, waist_size, neck_size, letter_reference, local_size, chest_interval, waist_interval, title as size_type from sizes inner join size_types on sizes.size_type_id = size_types.id');
    const adapted = response.rows.map(adaptSizeRangeToClient);
    res.status(201).json([...adapted]);
});

module.exports = { getSizesTypes, getSizeRanges };
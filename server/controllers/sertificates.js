const asyncWrapper = require('../async');
const { pool } = require('../connection');

const getSertificates = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from sertificates');
    res.status(201).json(response.rows);
});

const insertSertificate = asyncWrapper(async (req, res) => {
    const body = req.body;
    const response = await pool.query(`insert into sertificates(title) values ('${body.title}')`)
    res.status(200).json(response);
})

module.exports = { getSertificates, insertSertificate };
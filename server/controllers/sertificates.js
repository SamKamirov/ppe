const asyncWrapper = require('../async');
const { pool } = require('../connection');
const { sendErrorMessage } = require('../utils/utils');

const getSertificates = asyncWrapper(async (req, res) => {
    const response = await pool.query('select * from sertificates');
    res.status(201).json(response.rows);
});

const insertSertificate = asyncWrapper(async (req, res) => {
    const body = req.body;

    if (body.title === '') {
        sendErrorMessage(res, 'Ошибка, проверьте правильность введённых данных');
        return
    }

    const response = await pool.query(`insert into sertificates(title) values ('${body.title}')`)
    res.status(200).json(response);
})

module.exports = { getSertificates, insertSertificate };
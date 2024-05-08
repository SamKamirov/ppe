const asyncWrapper = require("../async");
const jwt = require('jsonwebtoken');
const { pool } = require("../connection");
const { sendErrorMessage } = require("../utils/utils");
const crypto = require('crypto-js');
const { SECRET_KEY } = require("../const");

const loginController = asyncWrapper(async (req, res) => {
    const { username, password } = req.body;

    // const cipherText = crypto.AES.encrypt(password, SECRET_KEY).toString();
    // const token = crypto.AES.encrypt(`${password}${username}`, SECRET_KEY).toString();

    const users = (await pool.query('select * from users')).rows;
    const DBuser = users.find((item) => {
        const userPassword = crypto.AES.decrypt(item.password, SECRET_KEY).toString(crypto.enc.Utf8);
        return userPassword === password;
    });

    if (DBuser) {
        const currentUser = await pool.query(`select users.id, token, first_name || ' ' || middle_name as username from users inner join employee on users.employee = employee.id where first_name || ' ' || middle_name = 'Камиров Семён'`)
        const userRows = currentUser.rows[0];
        console.log({ ...userRows });
        res.status(200).json({ ...userRows });
    };
});

const checkAuthAction = asyncWrapper(async (req, res) => {
    const token = req.headers['x-token'];
    const user = await pool.query(`select users.id, token, first_name || ' ' || middle_name as username from users inner join employee on users.employee = employee.id where token='${token}'`)
    if (user) res.status(200).json({ user });
});

module.exports = {
    loginController,
    checkAuthAction
};
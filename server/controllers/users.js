const asyncWrapper = require("../async");
const jwt = require('jsonwebtoken');
const { pool } = require("../connection");
const { sendErrorMessage } = require("../utils/utils");
const { encrypt, decrypt } = require("../crypto/crypto");

const loginController = asyncWrapper(async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const hash = encrypt(password);
    console.log(hash);

    const pass = decrypt(hash);

    console.log(pass);

    const user = pool.query(`
    select users.id, password, first_name || ' ' || middle_name as username from users inner join employee on users.employee = employee.id where first_name || ' ' || middle_name = '${username}' and password = '${password}'
    `);

    // if (!user.rows) {
    //     sendErrorMessage(res, 'Логин или пароль неверны. Попробуйте ещё раз');
    //     return
    // }
})

module.exports = {
    loginController
};
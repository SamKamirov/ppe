const express = require('express');
const { getEmployees, insertEmployee } = require('../controllers/employee');
const router = express.Router();

router.route('/').get(getEmployees).post(insertEmployee);

module.exports = router;
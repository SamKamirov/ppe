const express = require('express');
const { getEmployees } = require('../controllers/employee');
const router = express.Router();

router.route('/').get(getEmployees);

module.exports = router;
const express = require('express');
const { getPeriods } = require('../controllers/periods');
const router = express.Router();

router.route('/').get(getPeriods);

module.exports = router;
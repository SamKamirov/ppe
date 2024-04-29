const express = require('express');
const { getRuleSetData, insertRuleSet } = require('../controllers/services');
const router = express.Router();

router.route('/').get(getRuleSetData).post(insertRuleSet);

module.exports = router;
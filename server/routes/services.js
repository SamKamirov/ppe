const express = require('express');
const { getRuleSetData, insertRuleSet, getStructuralUnits } = require('../controllers/services');
const router = express.Router();

router.route('/').get(getRuleSetData).post(insertRuleSet);
router.route('/structuralUnits').get(getStructuralUnits);

module.exports = router;
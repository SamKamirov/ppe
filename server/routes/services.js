const express = require('express');
const { getRuleSetData, insertRuleSet, getStructuralUnits, getPositions } = require('../controllers/services');
const router = express.Router();

router.route('/').get(getRuleSetData).post(insertRuleSet);
router.route('/structuralUnits').get(getStructuralUnits);
router.route('/positions').get(getPositions);

module.exports = router;
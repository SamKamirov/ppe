const express = require('express');
const { getSizesReport, getRulesCheckReportData } = require('../controllers/reports');
const router = express.Router();

router.route('/sizes').get(getSizesReport);
router.route('/rules').get(getRulesCheckReportData);

module.exports = router;
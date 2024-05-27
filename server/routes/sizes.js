const express = require('express');
const { getSinglePPESizes, getSizesTypes, getSizeRanges } = require('../controllers/sizes');
const router = express.Router();

// router.route('/').get(getSinglePPESizes);

router.route('/').get(getSizesTypes);
router.route('/ranges').get(getSizeRanges);

module.exports = router;
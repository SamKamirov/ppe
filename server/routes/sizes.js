const express = require('express');
const { getSinglePPESizes, getSizesTypes } = require('../controllers/sizes');
const router = express.Router();

// router.route('/').get(getSinglePPESizes);

router.route('/').get(getSizesTypes);

module.exports = router;
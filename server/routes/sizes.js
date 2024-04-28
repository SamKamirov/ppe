const express = require('express');
const { getSinglePPESizes } = require('../controllers/sizes');
const router = express.Router();

router.route('/').get(getSinglePPESizes);

module.exports = router;
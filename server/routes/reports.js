const express = require('express');
const { getSizesReport } = require('../controllers/reports');
const router = express.Router();

router.route('/').get(getSizesReport);
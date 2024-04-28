const express = require('express');
const { getSertificates, insertSertificate } = require('../controllers/sertificates');
const router = express.Router();

router.route('/').get(getSertificates).post(insertSertificate);

module.exports = router;
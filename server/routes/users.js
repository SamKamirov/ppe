const express = require('express');
const { loginController, checkAuthAction } = require('../controllers/users');
const router = express.Router();

router.route('/').post(loginController).get(checkAuthAction);

module.exports = router;
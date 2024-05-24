const express = require("express");
const router = express.Router();
const { sendEmail } = require("../emailer/emailer");

router.route('/').post(sendEmail);

module.exports = router;

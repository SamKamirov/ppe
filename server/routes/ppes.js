const express = require("express");
const router = express.Router();
const { getPPEs, getPPE, insertPPE, deletePPE, getHeightRanges } = require("../controllers/ppes");

router.route('/').get(getPPEs);
router.route('/upload').post(insertPPE);
router.route('/height-ranges').get(getHeightRanges);
router.route('/:id').get(getPPE).delete(deletePPE);

module.exports = router;

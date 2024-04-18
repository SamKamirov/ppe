const express = require("express");
const { getPPEs, getPPE, insertPPE } = require("../queries/ppes");
const router = express.Router();

router.get("/ppes", getPPEs);
router.post("/ppes/upload", insertPPE);
router.get("/ppes/:id", getPPE);

module.exports = router;

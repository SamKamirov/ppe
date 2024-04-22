const express = require("express");
const { getPPEs, getPPE, insertPPE, deletePPE } = require("../controllers/ppes");
const router = express.Router();

router.route("/").get(getPPEs);
router.route("/upload").post(insertPPE);
router.route("/:id").get(getPPE).delete(deletePPE);

module.exports = router;

const express = require("express");
const { getPPEs, getPPE, insertPPE, deletePPE, insertPPEUsingAct, getActs } = require("../controllers/ppes");
const router = express.Router();

router.route("/").get(getPPEs);
router.route("/upload").post(insertPPE);
router.route("/acts/act").get(getActs).post(insertPPEUsingAct);
router.route("/:id").get(getPPE).delete(deletePPE);

module.exports = router;

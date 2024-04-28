const express = require("express");
const router = express.Router();
const { getPPEs, getPPE, insertPPE, deletePPE, insertPPEUsingAct, getActs } = require("../controllers/ppes");

router.route("/").get(getPPEs);
router.route("/upload").post(insertPPE);
router.route("/acts/act").get(getActs).post(insertPPEUsingAct);
router.route("/:id").get(getPPE).delete(deletePPE);

module.exports = router;

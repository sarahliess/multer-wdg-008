const express = require("express");
const router = express.Router();
//import Controller
const getPictures = require("../controllers/getPictures");

router.route("/get-pics").get(getPictures);

module.exports = router;

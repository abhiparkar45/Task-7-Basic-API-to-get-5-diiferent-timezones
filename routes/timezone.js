const express = require("express");
const checkInput = require('../middlewares/checkInput')

const router = express.Router();

const {sendTime} = require("../controllers/timezoneController");

router.get("/gettime/:cityName",checkInput,sendTime);
// router.route("/gettime/:cityName").get(checkInputFun,sendTime);

module.exports = router;
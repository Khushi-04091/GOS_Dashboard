const express = require("express");
const {
    getOperatingUnits
} = require("../controllers/operatingUnitController");

const router = express.Router();

router.get("/", getOperatingUnits);

module.exports = router;
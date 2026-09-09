const express = require("express");
const {
    getGeographicImpacts
} = require("../controllers/geographicImpactController");

const router = express.Router();

router.get("/", getGeographicImpacts);

module.exports = router;
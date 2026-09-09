const express = require("express");

const {
    getPLOverview
} = require("../controllers/plOverviewController");

const router = express.Router();

router.get("/", getPLOverview);

module.exports = router;
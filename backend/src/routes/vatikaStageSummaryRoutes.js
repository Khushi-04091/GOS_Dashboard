const express = require("express");

const {
    getVatikaStageSummary
} = require("../controllers/vatikaStageSummaryController");

const router = express.Router();

router.get("/", getVatikaStageSummary);

module.exports = router;
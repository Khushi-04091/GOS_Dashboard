const express = require("express");

const {
    getGOSRelationshipSummary
} = require("../controllers/gosRelationshipSummaryController");

const router = express.Router();

router.get("/", getGOSRelationshipSummary);

module.exports = router;
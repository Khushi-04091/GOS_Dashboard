const express = require("express");

const {
    getGOSConnections
} = require("../controllers/gosConnectionController");

const router = express.Router();

router.get("/", getGOSConnections);

module.exports = router;
const express = require("express");

const {
    getStageMovements
} = require("../controllers/stageMovementController");

const router = express.Router();

router.get("/", getStageMovements);

module.exports = router;
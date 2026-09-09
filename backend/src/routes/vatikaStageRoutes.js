const express = require("express");

const {
    getVatikaStages
} = require("../controllers/vatikaStageController");

const router = express.Router();

router.get("/", getVatikaStages);

module.exports = router;
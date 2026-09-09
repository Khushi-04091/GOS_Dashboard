const express = require("express");

const {
    getVatikaLifecycle
} = require("../controllers/vatikaLifecycleController");

const router = express.Router();

router.get("/", getVatikaLifecycle);

module.exports = router;
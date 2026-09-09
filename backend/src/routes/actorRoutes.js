const express = require("express");
const { getActors } = require("../controllers/actorController");

const router = express.Router();

router.get("/", getActors);

module.exports = router;
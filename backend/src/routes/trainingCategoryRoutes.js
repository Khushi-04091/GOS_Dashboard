const express = require("express");

const {
    getTrainingCategories
} = require("../controllers/trainingCategoryController");

const router = express.Router();

router.get("/", getTrainingCategories);

module.exports = router;
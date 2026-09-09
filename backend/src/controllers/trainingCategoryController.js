const TrainingCategory = require("../models/TrainingCategory");

const getTrainingCategories = async (req, res) => {
    try {
        const trainingCategories = await TrainingCategory.findAll();

        res.json(trainingCategories);
    } catch (error) {
        console.error("Error fetching training categories:", error);

        res.status(500).json({
            message: "Failed to fetch training categories"
        });
    }
};

module.exports = {
    getTrainingCategories
};
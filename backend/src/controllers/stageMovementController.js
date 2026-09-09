const StageMovement = require("../models/StageMovement");
const { fallbackStageMovements } = require("../data/fallback");

const getStageMovements = async (req, res) => {
    try {
        const stageMovements = await StageMovement.findAll();

        res.json(stageMovements);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback Stage Movement data.");

        res.json(fallbackStageMovements);
    }
};

module.exports = {
    getStageMovements
};
const VatikaStage = require("../models/VatikaStage");
const { fallbackVatikaStages } = require("../data/fallback");

const getVatikaStages = async (req, res) => {
    try {
        const vatikaStages = await VatikaStage.findAll();

        res.json(vatikaStages);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback Vatika stage data.");

        res.json(fallbackVatikaStages);
    }
};

module.exports = {
    getVatikaStages
};
const VatikaLifecycle = require("../models/VatikaLifecycle");
const { fallbackVatikaLifecycle } = require("../data/fallback");

const getVatikaLifecycle = async (req, res) => {
    try {
        const lifecycle = await VatikaLifecycle.findAll();

        res.json(lifecycle);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback Vatika lifecycle data.");

        res.json(fallbackVatikaLifecycle);
    }
};

module.exports = {
    getVatikaLifecycle
};
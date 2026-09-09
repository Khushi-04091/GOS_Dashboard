const Actor = require("../models/Actor");
const { fallbackActors } = require("../data/fallback");

const getActors = async (req, res) => {
    try {
        const actors = await Actor.findAll();

        res.json(actors);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback actor data.");

        res.json(fallbackActors);
    }
};

module.exports = {
    getActors
};
const OperatingUnit = require("../models/OperatingUnit");
const { fallbackOperatingUnits } = require("../data/fallback");

const getOperatingUnits = async (req, res) => {
    try {
        const operatingUnits = await OperatingUnit.findAll();

        res.json(operatingUnits);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback operating unit data.");

        res.json(fallbackOperatingUnits);
    }
};

module.exports = {
    getOperatingUnits
};
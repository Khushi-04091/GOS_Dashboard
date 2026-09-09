const GeographicImpact = require("../models/GeographicImpact");

const getGeographicImpacts = async (req, res) => {
    try {
        const geographicImpacts = await GeographicImpact.findAll();

        res.json(geographicImpacts);
    } catch (error) {
        console.error("Error fetching geographic impact data:", error);

        res.status(500).json({
            message: "Failed to fetch geographic impact data"
        });
    }
};

module.exports = {
    getGeographicImpacts
};
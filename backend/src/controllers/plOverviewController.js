const PLOverview = require("../models/PLOverview");

const getPLOverview = async (req, res) => {
    try {
        const plOverview = await PLOverview.findAll();

        res.json(plOverview);
    } catch (error) {
        console.error("Error fetching P&L overview:", error);

        res.status(500).json({
            message: "Failed to fetch P&L overview"
        });
    }
};

module.exports = {
    getPLOverview
};
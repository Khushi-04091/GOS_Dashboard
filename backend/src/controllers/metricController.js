const DashboardMetric = require("../models/DashboardMetric");
const { fallbackMetrics } = require("../data/fallback");

const getMetrics = async (req, res) => {
    try {
        const metrics = await DashboardMetric.findAll();

        res.json(metrics);
    } catch (error) {
        console.log("Database unavailable.");
        console.log("Using fallback metric data.");

        res.json(fallbackMetrics);
    }
};

module.exports = {
    getMetrics
};
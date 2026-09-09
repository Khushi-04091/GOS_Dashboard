const VatikaStageSummary = require("../models/VatikaStageSummary");

const getVatikaStageSummary = async (req, res) => {
    try {
        const summary = await VatikaStageSummary.findOne();

        res.json(summary);
    } catch (error) {
        console.error("Error fetching Vatika Stage Summary:", error);

        res.status(500).json({
            message: "Failed to fetch Vatika Stage Summary"
        });
    }
};

module.exports = {
    getVatikaStageSummary
};
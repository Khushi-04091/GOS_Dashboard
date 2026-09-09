const GOSRelationshipSummary = require("../models/GOSRelationshipSummary");

const getGOSRelationshipSummary = async (req, res) => {
    try {
        const summary = await GOSRelationshipSummary.findOne();

        res.json(summary);
    } catch (error) {
        console.error("Error fetching GOS relationship summary:", error);

        res.status(500).json({
            message: "Failed to fetch GOS relationship summary"
        });
    }
};

module.exports = {
    getGOSRelationshipSummary
};
const GOSConnection = require("../models/GOSConnection");

const getGOSConnections = async (req, res) => {
    try {
        const connections = await GOSConnection.findAll();

        res.json(connections);
    } catch (error) {
        console.error("Error fetching GOS connection data:", error);

        res.status(500).json({
            message: "Failed to fetch GOS connection data"
        });
    }
};

module.exports = {
    getGOSConnections
};
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GOSRelationshipSummary = sequelize.define("GOSRelationshipSummary", {
    activeRelationships: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = GOSRelationshipSummary;
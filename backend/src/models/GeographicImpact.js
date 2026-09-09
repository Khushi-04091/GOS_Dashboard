const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GeographicImpact = sequelize.define("GeographicImpact", {
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
    },
    outreach: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = GeographicImpact;
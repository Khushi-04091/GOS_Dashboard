const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StageMovement = sequelize.define("StageMovement", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    changePercent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    trend: {
        type: DataTypes.JSON,
        allowNull: true
    }
});

module.exports = StageMovement;
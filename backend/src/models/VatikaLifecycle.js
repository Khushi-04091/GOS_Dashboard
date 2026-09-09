const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const VatikaLifecycle = sequelize.define("VatikaLifecycle", {
    stage: {
        type: DataTypes.STRING,
        allowNull: false
    },

    vatikas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    conversionPercent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    avgTimeToStage: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = VatikaLifecycle;
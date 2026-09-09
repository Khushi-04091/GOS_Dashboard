const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DashboardMetric = sequelize.define("DashboardMetric", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    value: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },

    changePercent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true
    },

    unit: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = DashboardMetric;
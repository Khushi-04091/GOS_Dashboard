const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PLOverview = sequelize.define("PLOverview", {
    vertical: {
        type: DataTypes.STRING,
        allowNull: false
    },
    revenue: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    cost: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    surplusDeficit: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    }
});

module.exports = PLOverview;
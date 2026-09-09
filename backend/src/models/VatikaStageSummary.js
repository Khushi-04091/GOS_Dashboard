const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const VatikaStageSummary = sequelize.define("VatikaStageSummary", {

    totalVatikas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    avgTimeToStage: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: false
    },

    newlyPromoted: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    atRiskVatikas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    newlyPromotedChangePercent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    atRiskChangePercent: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }

});

module.exports = VatikaStageSummary;
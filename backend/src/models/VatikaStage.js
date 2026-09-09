const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const VatikaStage = sequelize.define("VatikaStage", {

    stage: {
        type: DataTypes.STRING,
        allowNull: false
    },

    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    percentage: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }

});

module.exports = VatikaStage;
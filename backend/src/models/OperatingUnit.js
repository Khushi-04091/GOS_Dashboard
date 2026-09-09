const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OperatingUnit = sequelize.define("OperatingUnit", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = OperatingUnit;
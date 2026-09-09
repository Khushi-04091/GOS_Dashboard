
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Actor = sequelize.define("Actor", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Actor;
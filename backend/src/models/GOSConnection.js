const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const GOSConnection = sequelize.define("GOSConnection", {

    section: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    color: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = GOSConnection;
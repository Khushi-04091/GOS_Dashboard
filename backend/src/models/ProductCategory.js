const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductCategory = sequelize.define("ProductCategory", {
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    producers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = ProductCategory;
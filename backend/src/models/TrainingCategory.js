const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TrainingCategory = sequelize.define("TrainingCategory", {
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    percentage: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    trainings: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = TrainingCategory;
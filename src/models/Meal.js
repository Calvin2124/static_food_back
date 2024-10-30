const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Meals = sequelize.define('Meals', {
    Meal: {
        type: DataTypes.ENUM('Petit-déjeuner', 'Déjeuner', 'Dîner'),
        allowNull: false,
        unique: true,
    },
});

module.exports = Meals;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Diner = sequelize.define('Diner', {
    Drink: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Entree: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Plat: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }, 
     Dessert: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

module.exports = Diner;
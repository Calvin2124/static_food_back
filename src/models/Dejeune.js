const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dejeune = sequelize.define('Dejeune', {
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

module.exports = Dejeune;
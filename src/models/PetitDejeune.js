const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PetitDejeune = sequelize.define('PetitDejeune', {
   
    Drink: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Plat: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    
})

module.exports = PetitDejeune;
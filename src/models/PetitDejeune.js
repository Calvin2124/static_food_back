const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PetitDejeune = sequelize.define('PetitDejeune', {

    Drink: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    Plat: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    countryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Countries', // Le nom de la table correspondant au modèle Country
            key: 'id',
        },
        allowNull: false,
    },
    
}, {
    sequelize,
    modelName: 'PetitDejeune',
});

module.exports = PetitDejeune;
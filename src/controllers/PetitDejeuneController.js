const { PetitDejeune } = require('../models');
const { Country } = require('../models');

// Créer un petit déjeuner, le pays est par défaut dans une autre table 
exports.create = async (req, res) => {
    try {
        console.log(req.body);

        const petitDejeuneData = {
            Drink: req.body.Drink,
            Plat: req.body.Plat,
            countryId: req.body.countryId,
        };

        // Utiliser le modèle Sequelize pour créer l'entrée
        const data = await PetitDejeune.create(petitDejeuneData);
        res.send(data);

    } catch (err) {
        res.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création du petit déjeuner.',
        });
    }
};
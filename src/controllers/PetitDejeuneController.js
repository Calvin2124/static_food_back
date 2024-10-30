const { PetitDejeune } = require('../models');
const { Country } = require('../models');

// Créer un petit déjeuner, le pays est par defaut dans une autre table 
exports.create = (req, res) => {

    
    // const petitDejeune = {
    //     Drink: req.body.Drink,
    //     Plat: req.body.Plat,
    //     countryId: req.body.countryId,
    // };
    PetitDejeune.create(petitDejeune)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Une erreur est survenue lors de la création du petit déjeuner.',
            });
        });
};

const express = require('express');
const router = express.Router();
const PetitDejeuneController = require('../controllers/PetitDejeuneController');


router.post('/petitDejeune', PetitDejeuneController.create);

module.exports = router;
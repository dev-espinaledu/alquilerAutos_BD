const express = require('express');
const router = express.Router();

const autoController = require('../controllers/autoController');

// Ruta para obtener autos disponibles
router.get('/', autoController.autosDisponibles);

// Ruta para registrar un nuevo auto
router.post('/', autoController.registrarAuto);

module.exports = router;
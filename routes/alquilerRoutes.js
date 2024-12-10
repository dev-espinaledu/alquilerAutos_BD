const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

// Ruta para registrar un nuevo alquiler
router.post('/', alquilerController.realizarAlquiler);

// Ruta para obtener el historial de alquileres
router.get('/historial', alquilerController.historial);

module.exports = router;
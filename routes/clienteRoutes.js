const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

// Ruta para el login de clientes
router.post('/login', clienteController.loginCliente);

// Ruta para registrar un nuevo cliente
router.post('/register', clienteController.registrarCliente);

// Ruta para obtener todos los clientes
router.get('/', clienteController.verclientes);

module.exports = router;
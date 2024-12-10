const express = require('express');
const app = express();
require('dotenv').config();

const alquilerR = require('./routes/alquilerRoutes');
const autosR = require('./routes/autoRoutes');
const clientesR = require('./routes/clienteRoutes');

// Definir el puerto con un valor predeterminado
const PORT = process.env.PORT || 4000;

// Middleware para analizar JSON
app.use(express.json());

// Prefijos para cada conjunto de rutas
app.use('/api/alquiler', alquilerR);
app.use('/api/autos', autosR);
app.use('/api/clientes', clientesR);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
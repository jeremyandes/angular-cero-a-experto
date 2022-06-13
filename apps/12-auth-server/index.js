const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Crear el servidor/aplicación de Express
const app = express();

// Directorio Público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Variables de Entorno
dotenv.config();

// Rutas
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
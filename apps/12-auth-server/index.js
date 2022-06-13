const express = require('express');
const cors = require('cors');

// Crear el servidor/aplicación de Express
const app = express();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000}`);
});
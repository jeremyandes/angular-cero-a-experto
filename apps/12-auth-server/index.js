const express = require('express');

const app = express();

// Rutas
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000}`);
});
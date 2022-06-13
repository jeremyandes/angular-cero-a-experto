const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        body: {
            returnCode: 'OK',
            message: 'Todo salió bien',
        }
    })
});

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 4000}`);
});
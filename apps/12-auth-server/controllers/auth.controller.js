const { response } = require('express');

const newUser = (req, res = response) => {
    return res.json({
        ok: true,
        message: 'Crear usuario /new',
    });
}

const loginUser = (req, res = response) => {
    return res.json({
        ok: true,
        message: 'Login del usuario /',
    });
}

const renewToken = (req, res = response) => {
    return res.json({
        ok: true,
        message: '/Renew',
    });
}

module.exports = {
    newUser,
    loginUser,
    renewToken,
}
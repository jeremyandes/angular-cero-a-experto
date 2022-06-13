const { request, response } = require('express');

const newUser = (req = request, res = response) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    console.log(name, email, password);

    return res.json({
        ok: true,
        message: 'Crear usuario /new',
    });
}

const loginUser = (req = request, res = response) => {
    console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        message: 'Login del usuario /',
    });
}

const renewToken = (req = request, res = response) => {
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
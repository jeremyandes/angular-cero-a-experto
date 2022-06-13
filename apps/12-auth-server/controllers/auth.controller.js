const { request, response } = require('express');
const { validationResult } = require('express-validator');

const newUser = (req = request, res = response) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    return res.json({
        ok: true,
        message: 'Crear usuario /new',
    });
}

const loginUser = (req = request, res = response) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

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
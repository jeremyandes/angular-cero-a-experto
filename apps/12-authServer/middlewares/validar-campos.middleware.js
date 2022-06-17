const { request, response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req = request, res = response, next) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    } else {
        next();
    }
}

module.exports = {
    validarCampos,
}
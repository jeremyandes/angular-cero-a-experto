const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { generateJWT } = require('../helpers/jwt');

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    // Si no hay token
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'Error en el token',
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        console.log('JWT Renew Payload', { uid, name });

        // Creo un nuevo token
        const newToken = await generateJWT(uid, name);

        // Envío la info a la request para capturarla en el controller
        req.uid = uid;
        req.name = name;
        req.newToken = newToken;

    } catch (error) {

        return res.status(401).json({
            ok: false,
            message: 'Token no válido',
        })

    }

    // TODO OK
    next();
}

module.exports = {
    validarJWT,
}
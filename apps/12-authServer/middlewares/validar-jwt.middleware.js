const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'Error en el token',
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        console.log('JWT Payload', { uid, name });
        req.uid = uid;
        req.name = name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Token no válido',
        })
    }

    next();
}

module.exports = {
    validarJWT,
}
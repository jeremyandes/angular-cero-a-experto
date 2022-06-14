const { request, response } = require('express');
const User = require('../models/User.model');

const newUser = async (req = request, res = response) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    try {

        // Verificar email
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                message: 'Ya existe un usuario con ese email',
            })
        }

        // Crear un usuario con el modelo
        const dbUser = new User(req.body);

        // Encriptar el password

        // Generar el JWT

        // Crear usuario en la DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: 'Algo salio mal, hable con el administrador',
        });
    }

}

const loginUser = (req = request, res = response) => {
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
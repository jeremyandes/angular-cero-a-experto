const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, loginUser, renewToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos.middleware');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

// Crear un nuevo usuario
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La password es obligatoria').isLength({ min: 6 }),
    validarCampos,
], newUser);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La password es obligatoria').isLength({ min: 6 }),
    validarCampos,
], loginUser);

// Validar y revalidar token
router.post('/renew', [
    validarJWT,
], renewToken);

module.exports = router;
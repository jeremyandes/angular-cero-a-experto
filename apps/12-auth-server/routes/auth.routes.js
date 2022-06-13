const { Router } = require('express');
const { newUser, loginUser, renewToken } = require('../controllers/auth.controller');

const router = Router();

// Crear un nuevo usuario
router.post('/new', newUser);

// Login de usuario
router.post('/', loginUser);

// Validar y revalidar token
router.post('/renew', renewToken);

module.exports = router;
const { Router } = require('express');

const router = Router();

// Crear un nuevo usuario
router.post('/new', (req, res) => {
    return res.json({
        ok: true,
        message: 'Crear usuario /new',
    });
});

// Login de usuario
router.post('/', (req, res) => {
    return res.json({
        ok: true,
        message: 'Login del usuario /',
    });
});

// Validar y revalidar token
router.post('/renew', (req, res) => {
    return res.json({
        ok: true,
        message: '/Renew',
    });
});

module.exports = router;
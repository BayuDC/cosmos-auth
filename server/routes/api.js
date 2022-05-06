const router = require('express').Router();
const authController = require('../controllers/auth');

router.get('/', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

router.get('/auth', authController.status);
router.post('/auth/login', authController.login);
router.post('/auth/signup', authController.signup);
router.get('/auth/me', authController.me);

module.exports = router;

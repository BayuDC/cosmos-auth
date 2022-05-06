const router = require('express').Router();
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.get('/', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

router.get('/auth', authMiddleware.authGuard, (req, res) => res.send());
router.post('/auth/login', authMiddleware.guestGuard, authController.login);
router.post('/auth/signup', authMiddleware.guestGuard, authController.signup);
router.get('/auth/me', authMiddleware.authGuard, authController.me);

module.exports = router;

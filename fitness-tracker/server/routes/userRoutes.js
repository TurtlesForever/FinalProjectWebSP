const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authMiddleware.verifyToken, userController.getUser);
router.put('/profile', authMiddleware.verifyToken, userController.updateUser);
router.delete('/profile', authMiddleware.verifyToken, userController.deleteUser);

module.exports = router;
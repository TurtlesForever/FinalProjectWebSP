const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/:id', userController.getUser);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', verifyToken, userController.getUser);
router.put('/profile', verifyToken, userController.updateUser);
router.delete('/profile', verifyToken, userController.deleteUser);

module.exports = router;
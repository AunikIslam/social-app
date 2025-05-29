const path = require('path');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/login', userController.getLoginPage);

router.get('/sign-up', userController.getSignUpPage);

router.post('/sign-up', userController.signUpUser);

module.exports = router;
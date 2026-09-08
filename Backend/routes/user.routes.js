const express = require('express');
const routes = express.Routes();
const userController = require('../controllers/user.controller');

const {body} = require('express-validator');
routes.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage
    ('First name must be at last 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must be at last 6 characters long')
], userController.registerUser)


module.exports = routes ;
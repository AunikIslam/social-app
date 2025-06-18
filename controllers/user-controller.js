const User = require('../models/user');

exports.getLoginPage = (req, res, next) => {
    res.render('user/user-login', {
        path: '/cart',
        pageTitle: 'Login',
        user: User
    });
}

exports.getSignUpPage = (req, res, next) => {
    res.render('user/user-sign-up', {
        path: '/cart',
        pageTitle: 'Sign Up',
        user: User
    });
}

exports.signUpUser = (req, res, next) => {
    User.findAll({
        where: {
            email: req.body.email
        }
    }).then((users) => {
        if (users.length > 0) {
            return res.json({duplicateUser: true})
        } else {
            return User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            })
        }
    })
    .then((user) => {
    });
}

exports.logInUser = (req, res, next) => {

}
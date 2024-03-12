const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('.../models/User');

const router = express.Router();

// Sign up route
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Login route
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle sign up form submission
router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({ username: req.body.username, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Handle login form submission
router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;

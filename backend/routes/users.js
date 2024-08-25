// src/routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

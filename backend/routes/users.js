const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude password field
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

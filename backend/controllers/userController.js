// backend/controllers/userController.js

const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        // Fetch all users excluding sensitive data like passwords
        const users = await User.find({}, 'name email _id');
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

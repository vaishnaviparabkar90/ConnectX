const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.get('/:userId', async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [
                { sender: req.params.userId },
                { receiver: req.params.userId }
            ]
        });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth'); // JWT authentication middleware

// Fetch chat messages between two users by socketId
router.get('/:socketId', auth, async (req, res) => {
  const currentUserSocketId = req.user.socketId; // Assuming req.user contains the authenticated user
  const otherUserSocketId = req.params.socketId;

  try {
    const messages = await Message.find({
      $or: [
        { sender: currentUserSocketId, receiver: otherUserSocketId },
        { sender: otherUserSocketId, receiver: currentUserSocketId }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;

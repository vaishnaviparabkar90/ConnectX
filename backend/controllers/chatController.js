const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  const message = new Message({ ...req.body, sender: req.user._id });
  await message.save();
  res.send(message);
};

const getMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.id });
  res.send(messages);
};

module.exports = { sendMessage, getMessages };

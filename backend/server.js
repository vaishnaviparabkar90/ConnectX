const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes'); // Import message routes
const User = require('./models/User');
const Message = require('./models/Message');
const userRoutes = require('./routes/users');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes); // Add route for messages
app.use('/api/users', userRoutes); 

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('login', async (userId) => {
        socket.userId = userId;
        const user = await User.findById(userId);
        if (user) {
            user.socketId = socket.id;
            await user.save();
        }
        const users = await User.find();
        io.emit('users', users);
    });

    socket.on('sendMessage', async (message) => {
        const newMessage = new Message(message);
        await newMessage.save();

        io.to(message.receiver).emit('receiveMessage', message);
        io.to(message.sender).emit('receiveMessage', message);
    });

    socket.on('disconnect', async () => {
        console.log(`User disconnected: ${socket.id}`);
        const user = await User.findOne({ socketId: socket.id });
        if (user) {
            user.socketId = null;
            await user.save();
        }
    });
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});

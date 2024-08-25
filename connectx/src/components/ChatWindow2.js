import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import './ChatWindow.css'; // Add your styles for ChatWindow

const socket = io('http://localhost:5000');

const ChatWindow = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const currentUser = useSelector(state => state.user.currentUser);

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            if (message.sender === currentUser?._id || message.receiver === currentUser?._id) {
                setMessages(prevMessages => [...prevMessages, message]);
            }
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [currentUser]);

    useEffect(() => {
        if (currentUser) {
            socket.emit('login', currentUser._id);
        }
    }, [currentUser]);

    const handleSendMessage = () => {
        if (message.trim() && selectedUser) {
            const messageData = {
                sender: currentUser._id,
                receiver: selectedUser._id,
                text: message,
                timestamp: new Date()
            };
            socket.emit('sendMessage', messageData);
            setMessages(prevMessages => [...prevMessages, messageData]);
            setMessage('');
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === currentUser._id ? 'message sent' : 'message received'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/selectors/chatSelectors';
import socket from './socket';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatWindow2 = ({ selectedUser, currentUser }) => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const chatId = [currentUser, selectedUser._id].sort().join('_');
    const storedMessages = useSelector(state => getMessages(state, chatId));

    useEffect(() => {
        // Fetch previous messages
        const fetchMessages = async () => {
            const response = await fetch(`/api/messages/${currentUser}`);
            const data = await response.json();
            setMessages(data);
        };
        fetchMessages();

        // Handle incoming messages
        socket.on('receiveMessage', (msg) => {
            if (msg.sender === selectedUser._id || msg.receiver === selectedUser._id) {
                setMessages(prevMessages => [...prevMessages, msg]);
            }
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, [selectedUser, currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            sender: currentUser,
            receiver: selectedUser._id,
            content: message,
        };
        socket.emit('sendMessage', newMessage);
        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (
        <div className="chat-window">
            <div className="chat-header bg-primary text-white p-2">
                <h5>{selectedUser.name}</h5>
            </div>
            <div className="chat-body p-3" style={{ height: '300px', overflowY: 'scroll' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === currentUser ? 'message-sent' : 'message-received'}`}>
                        <div className="message-content">
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-footer d-flex p-2">
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    required
                />
                <button type="submit" className="btn btn-primary ms-2">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow2;

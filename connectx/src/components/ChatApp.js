// src/components/ChatApp.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import ChatWindow2 from './ChatWindow2';

const ChatApp = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const currentUser = useSelector(state => state.user.currentUser); 

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="d-flex">
            <Sidebar onSelectUser={handleSelectUser} currentUser={currentUser} />
            <div className="flex-grow-1 ms-3">
                {selectedUser ? (
                    <ChatWindow2 selectedUser={selectedUser} />
                ) : (
                    <div className="alert alert-info">
                        Select a user to start chatting.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatApp;

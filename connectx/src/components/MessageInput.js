import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <InputGroup className="message-input">
      <FormControl
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        aria-label="Message"
      />
      <InputGroup.Text>
        <Button variant="primary" onClick={handleSend}>Send</Button>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default MessageInput;

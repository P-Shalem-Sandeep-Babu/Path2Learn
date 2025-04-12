import React, { useState } from 'react';
import '../../styles/parent.css';

const ParentChat = ({ teacher, onClose }) => {
  const [messages, setMessages] = useState([
    { text: `Hello, I'm ${teacher}. How can I help you with your child's progress?`, sender: 'teacher' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add parent message
    setMessages([...messages, { text: newMessage, sender: 'parent' }]);
    setNewMessage('');

    // Simulate teacher response after a delay
    setTimeout(() => {
      const responses = [
        "I've noticed your child is doing well in class.",
        "There are some areas we need to work on together.",
        "I'll provide extra materials to help with this topic.",
        "Your child has shown great improvement recently!"
      ];
      setMessages(prev => [...prev, { 
        text: responses[Math.floor(Math.random() * responses.length)], 
        sender: 'teacher' 
      }]);
    }, 2000);
  };

  return (
    <div className="parent-chat-modal">
      <div className="chat-container">
        <div className="chat-header">
          <h4>Chat with {teacher}</h4>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentChat;
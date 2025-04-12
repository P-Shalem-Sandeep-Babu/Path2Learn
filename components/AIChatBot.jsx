import React, { useState } from 'react';
import '../styles/main.css';

const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const GOOGLE_AI_ENDPOINT =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBhGh18CfurNKWyxeTw4t6Im1GpemY2uUE";

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(GOOGLE_AI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        }),
      });

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Hmm... I couldn't think of anything to say.";

      const aiMessage = { text: aiText, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chatbot">
      <div className="chat-header">
        <h4>AI Learning Assistant</h4>
        <p>Ask me anything about your studies</p>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <p>Hi there! I'm your AI learning assistant. How can I help you with your studies today?</p>
            <div className="suggested-questions">
              <p>Try asking:</p>
              <button onClick={() => setInput("Explain algebraic equations")}>
                Explain algebraic equations
              </button>
              <button onClick={() => setInput("Help with science homework")}>
                Help with science homework
              </button>
              <button onClick={() => setInput("Create a study plan for math")}>
                Create a study plan for math
              </button>
            </div>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              <div className="message-content">{msg.text}</div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="message ai">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit" disabled={isLoading}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default AIChatBot;

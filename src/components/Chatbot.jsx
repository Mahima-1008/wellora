import { useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Wellora's AI assistant. How can I help you find what you need today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I can certainly help with that. Are you looking for our personal care or organic range?", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: "320px",
          height: "450px",
          background: "var(--bg-secondary)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          marginBottom: "15px",
          border: "1px solid var(--border-light)",
          animation: "fadeIn 0.3s ease-out"
        }}>
          {/* Header */}
          <div style={{
            background: "var(--text-primary)",
            color: "white",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FiMessageCircle size={20} />
              <span style={{ fontWeight: "500" }}>Wellora Support</span>
            </div>
            <FiX style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: "20px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                background: msg.sender === "user" ? "var(--bg-primary)" : "#f0f0f0",
                color: "var(--text-primary)",
                padding: "10px 15px",
                borderRadius: "15px",
                maxWidth: "80%",
                fontSize: "13px",
                lineHeight: "1.5"
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={{ padding: "15px", borderTop: "1px solid var(--border-light)", display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px 15px",
                border: "1px solid var(--border-light)",
                borderRadius: "20px",
                outline: "none",
                fontSize: "13px"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "var(--text-primary)",
                color: "white",
                border: "none",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <FiSend size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "var(--accent-color)",
          color: "white",
          border: "none",
          boxShadow: "var(--shadow-md)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          float: "right",
          transition: "transform 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={28} />}
      </button>
    </div>
  );
}

export default Chatbot;

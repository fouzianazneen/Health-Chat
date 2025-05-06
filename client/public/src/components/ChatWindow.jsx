import React, { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const res = await fetch("http://localhost:5000/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    const botMessage = { sender: "bot", text: data.fulfillmentText };
    setMessages(prev => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="h-80 overflow-y-auto border p-2 bg-white shadow rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          className="border p-2 flex-grow rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button className="bg-blue-600 text-white px-4 rounded-r" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;

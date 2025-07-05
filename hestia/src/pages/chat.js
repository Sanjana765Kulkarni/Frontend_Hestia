import React, { useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Hestia", text: "Hello, I'm Hestia. How are you feeling today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }

    setMessages(prev => [...prev, { sender: "User", text: input }]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://hestia-backend-rpby.onrender.com/chat",
        { text: input, uid: user.uid },
        { headers: { "Content-Type": "application/json" }}
      );

      const reply = response.data.reply || "Sorry, something went wrong.";
      setMessages(prev => [...prev, { sender: "Hestia", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: "Hestia", text: "Sorry, failed to get response." }]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#181611] text-white overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      <div className="px-10 md:px-40 flex flex-1 flex-col py-5 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-end gap-3 p-4 ${msg.sender === "User" ? "justify-end" : ""}`}>
            {msg.sender === "Hestia" && (
              <div className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")` }} />
            )}
            <div className={`flex flex-col gap-1 ${msg.sender === "User" ? "items-end" : "items-start"}`}>
              <p className="text-[#bab19c] text-[13px]">{msg.sender}</p>
              <p className={`text-base font-normal max-w-[360px] rounded-xl px-4 py-3 ${msg.sender === "User" ? "bg-[#f3c144] text-[#181611]" : "bg-[#393428]"}`}>
                {msg.text}
              </p>
            </div>
            {msg.sender === "User" && (
              <div className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOKRWYlOsQahCEUJ-tHnAu2ynNYp2aFQPGmZVZnsdma4BjpGbSTElcTP-SWWVse5dD8ytyeV2RYNckRI0dyiKPojNhQSTdrB4CqnQkWEpm4O18B5Wh--rDBOhRVW76CCrDjjjsxB0-lXdoOh4wYryu_TdET_KQh0d3YpUDz1QFq6qBJf7Q7pN7ruLT7nHZzP4uoSxU8eoBlK_aSDhnCbLkxoKRT0Ifqhn0n2fDxAbrknG6yUFpoKUOJY404qa3KH5PFSGKvnvL-C03")` }} />
            )}
          </div>
        ))}
        {loading && (
          <div className="p-4 text-sm text-center text-gray-400">Hestia is typing...</div>
        )}
      </div>

      <div className="flex items-center px-4 py-3 gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex w-full rounded-xl text-white bg-[#393428] px-4 py-3 text-base placeholder:text-[#bab19c] focus:outline-none"
        />
        <button onClick={sendMessage} className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-[#f3c144] text-[#181611] text-sm font-bold">
          Send
        </button>
      </div>
    </div>
  );
}
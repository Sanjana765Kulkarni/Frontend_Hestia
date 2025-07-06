import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

// Typing indicator
const TypingIndicator = () => (
  <motion.div
    className="flex items-center gap-2 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div
      className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0"
      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")` }}
    />
    <div className="flex flex-col gap-1 items-start">
      <p className="text-[#bab19c] text-[13px]">Hestia</p>
      <div className="flex items-center gap-1.5 bg-[#393428] rounded-xl px-4 py-3">
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.1, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} />
      </div>
    </div>
  </motion.div>
);

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Hestia", text: "Hello, I'm Hestia. How are you feeling today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://hestia-backend-rpby.onrender.com/chat",
        { text: input, uid: user.uid },
        { headers: { "Content-Type": "application/json" } }
      );
      const reply = response.data.reply || "Sorry, something went wrong.";
      setMessages((prev) => [...prev, { sender: "Hestia", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "Hestia", text: "Sorry, failed to get response." }]);
    }

    setLoading(false);
  };

  return (
    <div className="relative flex flex-col bg-[#181611] text-white overflow-hidden h-[calc(100vh-4rem)]" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                className={`flex items-end gap-3 ${msg.sender === "User" ? "justify-end" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {msg.sender === "Hestia" && (
                  <div className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")` }} />
                )}
                <div className={`flex flex-col gap-1 ${msg.sender === "User" ? "items-end" : "items-start"}`}>
                  <p className="text-[#bab19c] text-[11px] sm:text-[13px]">{msg.sender}</p>
                  <p className={`text-sm sm:text-base font-normal max-w-xs sm:max-w-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 ${msg.sender === "User" ? "bg-[#f3c144] text-[#181611]" : "bg-[#393428]"}`}>
                    {msg.text}
                  </p>
                </div>
                {msg.sender === "User" && (
                  <div className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOKRWYlOsQahCEUJ-tHnAu2ynNYp2aFQPGmZVZnsdma4BjpGbSTElcTP-SWWVse5dD8ytyeV2RYNckRI0dyiKPojNhQSTdrB4CqnQkWEpm4O18B5Wh--rDBOhRVW76CCrDjjjsxB0-lXdoOh4wYryu_TdET_KQh0d3YpUDz1QFq6qBJf7Q7pN7ruLT7nHZzP4uoSxU8eoBlK_aSDhnCbLkxoKRT0Ifqhn0n2fDxAbrknG6yUFpoKUOJY404qa3KH5PFSGKvnvL-C03")` }} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area now outside the scroll */}
      <div className="bg-[#181611] p-4 border-t border-[#221d11]">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 w-full rounded-xl text-white bg-[#393428] px-4 py-3 text-base placeholder:text-[#bab19c] focus:outline-none focus:ring-2 focus:ring-[#f3c144] transition-shadow"
          />
          <motion.button
            onClick={sendMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center rounded-full h-12 w-12 bg-[#f3c144] text-[#181611] font-bold shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
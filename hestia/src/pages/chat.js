import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCopy, FaRegEdit } from "react-icons/fa";

/* -----------------------  HESTIA typing indicator  ----------------------- */
const TypingIndicator = () => (
  <motion.div
    className="flex items-center gap-2 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div
      className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0"
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")',
      }}
    />
    <div className="flex flex-col gap-1 items-start">
      <p className="text-[#bab19c] text-[13px]">Hestia</p>
      <div className="flex items-center gap-1.5 bg-[#393428] rounded-xl px-4 py-3">
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, delay: 0.1, repeat: Infinity }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
        />
      </div>
    </div>
  </motion.div>
);
/* ======================================================================== */

export default function Chat() {
  /* --------------------  state -------------------- */
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Hestia", text: "Hello, I'm Hestia. How are you feeling today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [username, setUsername] = useState("User");
  const [gender, setGender] = useState("male");           // default
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  /* --------------  read name & gender once  -------------- */
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user?.displayName) setUsername(user.displayName);

    const storedGender = localStorage.getItem("gender");
    if (storedGender === "male" || storedGender === "female") {
      setGender(storedGender);
    }
  }, []);

  /* ----------  derive avatar URL based on gender  ---------- */
  const userAvatar =
    gender === "female"
    ? "/female-avatar.png"
    : gender === "male"
    ? "/male-avatar.png"
    : "/plant-avatar.png"; // 🌿 Plant

  /* --------------------  auto‑scroll  -------------------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* --------------  helpers (unchanged)  -------------- */
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 240) + "px";
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
    adjustTextareaHeight();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  const handleCopy = (text) => navigator.clipboard.writeText(text);
  const startEditing = (i, t) => {
    setEditingIndex(i);
    setEditingText(t);
  };
  const cancelEditing = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  /* --------------------  send / edit  -------------------- */
  const sendMessage = async () => {
    if (!input.trim()) return;
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return alert("Please log in first.");

    setMessages((p) => [...p, { sender: "User", text: input }]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "48px";
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://hestia-backend-rpby.onrender.com/chat",
        { text: input, uid: user.uid }
      );
      setMessages((p) => [
        ...p,
        { sender: "Hestia", text: data.reply || "Sorry, something went wrong." },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((p) => [
        ...p,
        { sender: "Hestia", text: "Sorry, failed to get response." },
      ]);
    }
    setLoading(false);
  };

  const saveEdit = async (idx) => {
    if (!editingText.trim()) return;
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return alert("Please log in first.");

    const updated = [...messages];
    updated[idx].text = editingText;
    if (updated[idx + 1]?.sender === "Hestia") updated.splice(idx + 1, 1);
    setMessages(updated);
    setEditingIndex(null);
    setEditingText("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://hestia-backend-rpby.onrender.com/chat",
        { text: editingText, uid: user.uid }
      );
      setMessages((p) => {
        const m = [...p];
        m.splice(idx + 1, 0, {
          sender: "Hestia",
          text: data.reply || "Sorry, something went wrong.",
        });
        return m;
      });
    } catch (err) {
      console.error(err);
      setMessages((p) => {
        const m = [...p];
        m.splice(idx + 1, 0, {
          sender: "Hestia",
          text: "Sorry, failed to get response.",
        });
        return m;
      });
    }
    setLoading(false);
  };

  /* --------------  latest‑user‑message index  -------------- */
  const lastUserMsgIndex = [...messages].reverse().findIndex((m) => m.sender === "User");
  const latestUserIndex =
    lastUserMsgIndex >= 0 ? messages.length - 1 - lastUserMsgIndex : -1;

  /* ===================================================================== */
  return (
    <div
      className="relative flex flex-col bg-[#181611] text-white h-screen pt-[4rem] pb-[4rem]"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      {/* ======================  message list  ====================== */}
      <div
        className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                className={`relative group flex flex-col ${
                  msg.sender === "User" ? "items-end" : "items-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* --------  avatar + bubble row  -------- */}
                <div className="flex items-end gap-3">
                  {/* AI avatar + copy‑on‑hover */}
                  {msg.sender === "Hestia" && (
                    <div className="relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                        <FaRegCopy
                          className="cursor-pointer text-white hover:text-[#f3c144]"
                          onClick={() => handleCopy(msg.text)}
                        />
                      </div>
                      <div
                        className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")',
                        }}
                      />
                    </div>
                  )}

                  {/* message bubble + sender name */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#bab19c] text-[11px] sm:text-[13px]">
                      {msg.sender === "User" ? username : msg.sender}
                    </p>
                    {editingIndex === idx ? (
                      <>
                        <textarea
                          className="w-full rounded p-2 text-black"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                        />
                        <div className="flex gap-2 mt-1">
                          <button
                            onClick={cancelEditing}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => saveEdit(idx)}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          >
                            Save
                          </button>
                        </div>
                      </>
                    ) : (
                      <p
                        className={`text-sm sm:text-base max-w-xs sm:max-w-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 ${
                          msg.sender === "User"
                            ? "bg-[#f3c144] text-[#181611]"
                            : "bg-[#393428]"
                        }`}
                      >
                        {msg.text}
                      </p>
                    )}
                  </div>

                  {/* user avatar */}
                  {msg.sender === "User" && (
                    <div
                      className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                      style={{ backgroundImage: `url("${userAvatar}")` }}
                    />
                  )}
                </div>

                {/* copy + (conditionally) edit */}
                {msg.sender === "User" && (
                  <div className="absolute top-2 right-0 hidden group-hover:flex gap-2 z-10">
                    <FaRegCopy
                      className="cursor-pointer hover:text-[#f3c144]"
                      onClick={() => handleCopy(msg.text)}
                    />
                    {idx === latestUserIndex && (
                      <FaRegEdit
                        className="cursor-pointer hover:text-[#f3c144]"
                        onClick={() => startEditing(idx, msg.text)}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* ======================  composer  ====================== */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#181611] border-t border-[#221d11] p-4 z-40">
        <div className="flex items-end gap-3 max-w-4xl mx-auto">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 w-full resize-none rounded-xl text-white bg-[#393428] px-4 py-3 text-base placeholder:text-[#bab19c] focus:outline-none focus:ring-2 focus:ring-[#f3c144] transition-all overflow-y-hidden scrollbar-hide"
            style={{ minHeight: "48px", maxHeight: "240px" }}
          />
          <motion.button
            onClick={sendMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center rounded-full h-12 w-12 bg-[#f3c144] text-[#181611] font-bold shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

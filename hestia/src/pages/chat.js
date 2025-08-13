import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPlus, FaTrash, FaRegCopy, FaRegEdit } from "react-icons/fa";

const TypingIndicator = () => (
  <motion.div
    className="flex items-center gap-2 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div
      className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0"
      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")' }}
    />
    <div className="flex flex-col gap-1 items-start">
      <p className="text-[#bab19c] text-[13px]">Hestia</p>
      <div className="flex items-center gap-1.5 bg-[#393428] rounded-xl px-4 py-3">
        {[0, 0.1, 0.2].map((delay, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, delay, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Chat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [username, setUsername] = useState("User");

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user?.displayName) setUsername(user.displayName);
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (user) {
      const fetchChats = async () => {
        try {
          const response = await axios.get(`https://hestia-backend-rpby.onrender.com/chats/${user.uid}`);
          setChats(response.data);
          if (response.data.length > 0) {
            setActiveChatId(response.data[0].id);
          } else {
            handleNewChat();
          }
        } catch (error) {
          console.error("Failed to fetch chat history:", error);
          handleNewChat();
        }
      };
      fetchChats();
    }
  }, [user]);

  useEffect(() => {
    if (user && activeChatId) {
      const currentChat = chats.find(c => c.id === activeChatId);
      // Only fetch messages for chats that have been saved to the backend.
      // New chats are handled locally until the first message is sent.
      if (currentChat && currentChat.title !== "New Chat") {
        setLoading(true);
        const fetchMessages = async () => {
          try {
            const response = await axios.get(`https://hestia-backend-rpby.onrender.com/chats/${user.uid}/${activeChatId}`);
            setMessages(response.data.length > 0 ? response.data : [{ sender: "Hestia", text: "Hello, I'm Hestia. How are you feeling today?" }]);
          } catch (error) {
            console.error("Failed to fetch messages:", error);
            setMessages([{ sender: "Hestia", text: "Could not load chat. Please try again." }]);
          } finally {
            setLoading(false);
          }
        };
        fetchMessages();
      }
    }
  }, [activeChatId, user]); // Removed 'chats' from dependencies to prevent re-fetching on title change

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

  const sendMessage = async () => {
    if (!input.trim() || !user) return;

    const isNewChat = chats.some(c => c.id === activeChatId && c.title === "New Chat");

    setMessages((prev) => [...prev, { sender: "User", text: input }]);
    const currentInput = input;
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "48px";
    setLoading(true);

    try {
      const response = await axios.post("https://hestia-backend-rpby.onrender.com/chat", {
        text: currentInput,
        uid: user.uid,
        did: activeChatId
      });
      const reply = response.data.reply || "Sorry, something went wrong.";
      setMessages((prev) => [...prev, { sender: "Hestia", text: reply }]);
      
      if (isNewChat) {
        // Refetch the chat list to get the proper title from the backend
        const fetchChats = async () => {
            try {
                const response = await axios.get(`https://hestia-backend-rpby.onrender.com/chats/${user.uid}`);
                setChats(response.data);
            } catch (error) {
                console.error("Failed to refetch chat list:", error);
            }
        };
        fetchChats();
      }
    } catch {
      setMessages((prev) => [...prev, { sender: "Hestia", text: "Sorry, failed to get response." }]);
    }
    setLoading(false);
  };

  const saveEdit = async (idx) => {
    if (!editingText.trim() || !user) return;
    const updated = [...messages];
    updated[idx].text = editingText;

    if (messages[idx + 1]?.sender === "Hestia") updated.splice(idx + 1, 1);
    setMessages(updated);
    setEditingIndex(null);
    setEditingText("");
    setLoading(true);

    try {
      const res = await axios.post("https://hestia-backend-rpby.onrender.com/chat", {
        text: editingText,
        uid: user.uid,
        did: activeChatId
      });
      const reply = res.data.reply || "Sorry, something went wrong.";
      setMessages((prev) => {
        const next = [...prev];
        next.splice(idx + 1, 0, { sender: "Hestia", text: reply });
        return next;
      });
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next.splice(idx + 1, 0, { sender: "Hestia", text: "Sorry, failed to get response." });
        return next;
      });
    }
    setLoading(false);
  };

  const handleNewChat = () => {
    const newChatId = `chat-${Date.now()}`;
    setChats(prev => [{ id: newChatId, title: "New Chat" }, ...prev]);
    setActiveChatId(newChatId);
    setMessages([{ sender: "Hestia", text: "Hello, I'm Hestia. How are you feeling today?" }]);
    setInput("");
    setEditingIndex(null);
    setEditingText("");
    setLoading(false);
    if (textareaRef.current) textareaRef.current.style.height = "48px";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleCopy = (text) => navigator.clipboard.writeText(text);
  const startEditing = (idx, text) => { setEditingIndex(idx); setEditingText(text); };
  const cancelEditing = () => { setEditingIndex(null); setEditingText(""); };
  const lastUserMsgIndex = [...messages].reverse().findIndex(m => m.sender === "User");
  const latestUserIndex = lastUserMsgIndex >= 0 ? messages.length - 1 - lastUserMsgIndex : -1;

  const handleDeleteChat = (id) => {
    setChats((prev) => prev.filter((c) => c.id !== id));
    if (activeChatId === id) {
      setActiveChatId(null);
      handleNewChat();
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-[#100e0b] z-50 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0"} overflow-hidden`}>
        <div className="h-full flex flex-col pt-20 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">Chat History</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-white hover:text-[#f4c653]">
              <FaTimes size={20} />
            </button>
          </div>
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 w-full p-2 rounded-lg text-white hover:bg-[#221d11] mb-4"
          >
            <FaPlus /> New Chat
          </button>
          <div className="space-y-2 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  activeChatId === chat.id ? "bg-[#f4c653] text-black" : "text-[#f4c653] hover:bg-[#221d11]"
                }`}
              >
                <span onClick={() => setActiveChatId(chat.id)} className="flex-1 truncate">
                  {chat.title}
                </span>
                <FaTrash onClick={() => handleDeleteChat(chat.id)} className="ml-2 hover:text-red-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className={`flex-1 ml-0 ${isSidebarOpen ? "ml-64" : ""} transition-all duration-300`}>
        <div className="flex items-center gap-4 p-4 bg-[#181611]">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white hover:text-[#f4c653]">
            <FaBars size={24} />
          </button>
        </div>

        <div className="relative flex flex-col bg-[#181611] text-white h-screen pt-2 pb-[4rem]">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 scrollbar-hide">
            <div className="max-w-4xl mx-auto space-y-4">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className={`relative group flex flex-col ${msg.sender === "User" ? "items-end" : "items-start"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-end gap-3">
                      {msg.sender === "Hestia" && (
                        <div className="relative group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                            <FaRegCopy className="cursor-pointer text-white hover:text-[#f3c144]" onClick={() => handleCopy(msg.text)} />
                          </div>
                          <div className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD9ek015INyM7vHC4DjJCIWre7HWzj4O8b25J760nKUJ2NbkFi_3FCg4JtHKCXYHTr_WCXdBVbjMp0gtoBZt0YzB0pIJGsoxGrEGw8-4XcYYWtgCalCF0IzbHB2a93vbXQoBihop02NYqeN5HTrm7oPP53Aa-Zf_dj5I-aL-8Fj1z_RztuF6Cwh6Jz6Jb39mPIWts8DqEe60cNvgF76FvB4lmN2gElD8KiZer1uPV_9s_CNCwAOF8679H2X3gaG0KxdybRLzqdx1Qq")' }} />
                        </div>
                      )}
                      <div className="flex flex-col gap-1">
                        <p className="text-[#bab19c] text-[11px] sm:text-[13px]">{msg.sender === "User" ? username : msg.sender}</p>
                        {editingIndex === idx ? (
                          <>
                            <textarea className="w-full rounded p-2 text-black" value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                            <div className="flex gap-2 mt-1">
                              <button onClick={cancelEditing} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">Cancel</button>
                              <button onClick={() => saveEdit(idx)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Save</button>
                            </div>
                          </>
                        ) : (
                          <p className={`text-sm sm:text-base max-w-xs sm:max-w-md rounded-xl px-3 py-2 sm:px-4 sm:py-3 ${msg.sender === "User" ? "bg-[#f3c144] text-[#181611]" : "bg-[#393428]"}`}>
                            {msg.text}
                          </p>
                        )}
                      </div>
                      {msg.sender === "User" && (
                        <div className="bg-center bg-no-repeat bg-cover rounded-full w-8 h-8 sm:w-10 sm:h-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOKRWYlOsQahCEUJ-tHnAu2ynNYp2aFQPGmZVZnsdma4BjpGbSTElcTP-SWWVse5dD8ytyeV2RYNckRI0dyiKPojNhQSTdrB4CqnQkWEpm4O18B5Wh--rDBOhRVW76CCrDjjjsxB0-lXdoOh4wYryu_TdET_KQh0d3YpUDz1QFq6qBJf7Q7pN7ruLT7nHZzP4uoSxU8eoBlK_aSDhnCbLkxoKRT0Ifqhn0n2fDxAbrknG6yUFpoKUOJY404qa3KH5PFSGKvnvL-C03")' }} />
                      )}
                    </div>
                    {msg.sender === "User" && (
                      <div className="absolute top-2 right-0 hidden group-hover:flex gap-2 z-10">
                        <FaRegCopy className="cursor-pointer hover:text-[#f3c144]" onClick={() => handleCopy(msg.text)} />
                        {idx === latestUserIndex && (
                          <FaRegEdit className="cursor-pointer hover:text-[#f3c144]" onClick={() => startEditing(idx, msg.text)} />
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
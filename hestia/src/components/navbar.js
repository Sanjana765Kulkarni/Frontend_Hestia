import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FaBars, FaTimes, FaPlus, FaTrash } from "react-icons/fa";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const location = useLocation();
  const isChatPage = location.pathname === "/chat";

  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const handleLogout = async () => {
    try {
      navigate("/");
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleNewChat = () => {
    // Placeholder
  };

  const handleDeleteChat = (id) => {
    // Placeholder
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-black flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483e23] px-10 py-3 transition-all duration-300 ease-in-out ${
          isSidebarOpen && isChatPage ? "ml-64" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          {isChatPage && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white hover:text-[#f4c653]"
            >
              <FaBars size={20} />
            </button>
          )}
          <div
            className="flex items-center gap-4 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.png"
              alt="Hestia Logo"
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Hestia
            </h2>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          {user && (
            <p className="text-transparent text-base font-extrabold bg-clip-text bg-gradient-to-r from-[#f4c653] via-[#fff5c7] to-[#f4c653] animate-gradient">
              Hello, {user.displayName || "User"}
            </p>
          )}
        </div>

        <div className="flex items-center gap-8">
          <span
            className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
            onClick={() => navigate("/about")}
          >
            About
          </span>
          <span
            className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
            onClick={() => navigate("/contact")}
          >
            Contact
          </span>

          {user && (
            <button
              onClick={handleLogout}
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold hover:bg-[#e6b347] transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {isChatPage && (
        <div
          className={`fixed top-0 left-0 h-full bg-[#100e0b] transition-all duration-300 ease-in-out z-50 ${
            isSidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <div className="h-full flex flex-col pt-20 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-white">Chat History</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-white hover:text-[#f4c653]"
              >
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
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer font-sans ${
                    activeChatId === chat.id
                      ? "bg-[#f4c653] text-black"
                      : "text-[#f4c653] hover:bg-[#221d11]"
                  }`}
                >
                  <span
                    onClick={() => setActiveChatId(chat.id)}
                    className="flex-1 truncate"
                  >
                    {chat.title}
                  </span>
                  <FaTrash
                    onClick={() => handleDeleteChat(chat.id)}
                    className="ml-2 hover:text-red-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
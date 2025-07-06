import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      navigate("/");
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header
      className="bg-black flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483e23] px-4 sm:px-10 py-3"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div
        className="flex items-center gap-4 text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" alt="Hestia Logo" className="h-8 w-8 object-contain" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Hestia
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
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
        </div>

        {user && (
          <button
            onClick={handleLogout}
            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold hover:bg-[#e6b347] transition-colors"
          >
            Logout
          </button>
        )}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black md:hidden z-50"
          >
            <div className="flex flex-col items-start gap-4 p-4">
              <span
                className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
                onClick={() => { navigate("/"); setIsMenuOpen(false); }}
              >
                Home
              </span>
              <span
                className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
                onClick={() => { navigate("/about"); setIsMenuOpen(false); }}
              >
                About
              </span>
              <span
                className="text-white text-sm font-medium cursor-pointer hover:text-[#f4c653] transition-colors"
                onClick={() => { navigate("/contact"); setIsMenuOpen(false); }}
              >
                Contact
              </span>
              {user && (
                <button
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold hover:bg-[#e6b347] transition-colors"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

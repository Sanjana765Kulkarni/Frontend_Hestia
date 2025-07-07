import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

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
      className="sticky top-0 z-50 bg-black flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483e23] px-10 py-3"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
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

      <div className="flex flex-1 justify-center">
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
  );
}
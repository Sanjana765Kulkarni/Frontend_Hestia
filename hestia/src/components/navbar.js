import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header
      className="bg-black flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483e23] px-10 py-3"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div
        className="flex items-center gap-4 text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" alt="Hestia Logo" className="h-8 w-8 object-contain" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Hestia</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <span
            className="text-white text-sm font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >Home</span>
          <span
            className="text-white text-sm font-medium cursor-pointer"
            onClick={() => navigate("/about")}
          >About</span>
          <span
            className="text-white text-sm font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >Contact</span>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold"
        >
          <span className="truncate">Get Started</span>
        </button>
      </div>
    </header>
  );
}
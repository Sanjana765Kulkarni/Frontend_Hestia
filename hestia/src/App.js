import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // 👈 your new constant navbar
import Home from "./pages/home";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Signin from "./pages/signin";
import About from "./pages/about";
import TermsOfService from "./pages/TermsofService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* 👈 now always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">
            404 - Page Not Found
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Signup from "./pages/signup";
import About from "./pages/about";
import TermsOfService from "./pages/TermsofService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/privateRoute";

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null); // track auth state
  const location = useLocation();
  const isChatPage = location.pathname === "/chat";

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen && isChatPage ? "ml-64" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute user={user}>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
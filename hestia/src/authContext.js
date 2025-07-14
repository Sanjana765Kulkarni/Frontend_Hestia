import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      /* ────────────────────────────────────────────────────────────────
         NEW: keep gender in‑sync with the currently signed‑in user
      ────────────────────────────────────────────────────────────────── */
      const prevUid = localStorage.getItem("uid");

      if (user) {
        // New login or account switch
        if (prevUid !== user.uid) {
          localStorage.removeItem("gender");      // reset old gender
          localStorage.setItem("uid", user.uid);  // remember this user
        }
      } else {
        // Completely signed out
        localStorage.removeItem("uid");
        localStorage.removeItem("gender");
      }
      /* ──────────────────────────────────────────────────────────────── */

      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

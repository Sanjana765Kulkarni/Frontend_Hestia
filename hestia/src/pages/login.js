import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider         // ← Apple
} from "firebase/auth";
import "../firebase"; // ensure this imports your firebase.js

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  /* ------------------------  email / password  ------------------------ */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      /* ask gender if we still don’t have it  */
      if (!localStorage.getItem("gender")) {
        const g = window
          .prompt("Are you male or female? (type male / female / none)")
          ?.toLowerCase();
        if (g === "male" || g === "female" || g === "none") {
          localStorage.setItem("gender", g);
        }
      }
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  /* ------------------------  Google sign‑in  -------------------------- */
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("Google user:", result.user.displayName);
      if (!localStorage.getItem("gender")) {
        const g = window
          .prompt("Are you male or female? (type male / female / none)")
          ?.toLowerCase();
        if (g === "male" || g === "female" || g === "none") {
          localStorage.setItem("gender", g);
        }
      }
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
  };

  /* ------------------------  Apple sign‑in  --------------------------- */
  const handleAppleLogin = async () => {
    setError("");
    try {
      const appleProvider = new OAuthProvider("apple.com");
      // optional scopes: appleProvider.addScope('email');
      const result = await signInWithPopup(auth, appleProvider);
      console.log("Apple user:", result.user.displayName);
      if (!localStorage.getItem("gender")) {
        const g = window
          .prompt("Are you male or female? (type male / female / none)")
          ?.toLowerCase();
        if (g === "male" || g === "female" || g === "none") {
          localStorage.setItem("gender", g);
        }
      }
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
  };

  /* =================================================================== */
  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="flex flex-1 items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">

          {/* ------------------  header  ------------------ */}
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-[#f4c653] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-2xl">H</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">
              Sign in to continue your journey with Hestia
            </p>
          </div>

          {/* ------------------  card  ------------------ */}
          <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
            {/* form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#f4c653] bg-black border-[#483e23] rounded focus:ring-[#f4c653] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-[#f4c653] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f4c653] text-[#221d11] font-bold py-3 px-4 rounded-lg hover:bg-[#e6b347] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#483e23]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#1a1611] px-2 text-gray-400">Or</span>
              </div>
            </div>

            {/* Google button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-transparent border border-[#483e23] text-white text-sm font-bold px-4 hover:bg-[#221d11] transition-colors"
            >
              {/* Google SVG */}
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.532 24.552c0-1.584-.144-3.12-.42-4.608H24.268v8.736h13.08c-.564 2.82-2.22 5.22-4.644 6.864v5.664h7.26c4.248-3.912 6.672-9.648 6.672-16.656z" fill="#4285F4"/>
                <path d="M24.268 48c6.48 0 11.928-2.136 15.9-5.76l-7.26-5.664c-2.136 1.44-4.86 2.292-7.64 2.292-5.88 0-10.86-3.972-12.648-9.264H4.14v5.832C8.16 42.66 15.732 48 24.268 48z" fill="#34A853"/>
                <path d="M11.62 28.728c-.48-1.44-.756-2.964-.756-4.548s.276-3.108.756-4.548V13.8H4.14C2.856 16.62 2.1 19.86 2.1 23.184c0 3.324.756 6.564 2.04 9.36l7.48-5.832z" fill="#FBBC05"/>
                <path d="M24.268 9.924c3.528 0 6.708 1.224 9.216 3.636l6.444-6.444C36.18 2.964 30.74 0 24.268 0 15.732 0 8.16 5.34 4.14 13.8l7.48 5.832c1.788-5.292 6.768-9.264 12.648-9.264z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Apple button */}
            <button
              onClick={handleAppleLogin}
              className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-transparent border border-[#483e23] text-white text-sm font-bold px-4 hover:bg-[#221d11] transition-colors mt-3"
            >
              {/* Apple SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" className="w-5 h-5 fill-white">
                <path d="M13.545 13.026c-.242.558-.533 1.077-.873 1.553-.46.647-.837 1.094-1.127 1.34-.51.468-1.06.704-1.65.709-.421 0-.925-.117-1.511-.35-.587-.233-1.124-.35-1.61-.35-.508 0-1.06.117-1.658.35-.6.233-1.102.35-1.508.35-.6-.01-1.158-.243-1.673-.7-.31-.285-.7-.777-1.17-1.475-.495-.74-.9-1.59-1.214-2.553C.303 10.988.117 9.892.117 8.845c0-1.403.3-2.608.9-3.614.54-.93 1.274-1.395 2.205-1.395.442 0 1.015.135 1.717.404.69.27 1.144.404 1.362.404.162 0 .647-.158 1.455-.474.78-.305 1.435-.43 1.964-.376 1.45.12 2.54.798 3.27 2.034-1.29.79-1.933 1.904-1.932 3.342 0 1.113.415 2.048 1.245 2.805.37.353.787.623 1.25.81zM9.43.34c0 .98-.356 1.812-1.067 2.494-.757.723-1.633 1.15-2.62 1.276-.066-.98.308-1.867 1.123-2.65.79-.748 1.72-1.17 2.794-1.247.006.042.01.084.01.127z" />
              </svg>
              Continue with Apple
            </button>

            {/* footer link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/signin")}
                  className="text-[#f4c653] hover:underline font-semibold"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </div>

          {/* tiny footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <button
                onClick={() => navigate("/terms")}
                className="text-[#f4c653] hover:underline"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                onClick={() => navigate("/privacy")}
                className="text-[#f4c653] hover:underline"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

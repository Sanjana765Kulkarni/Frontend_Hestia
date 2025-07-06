import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "../firebase"; // ensure this imports your firebase.js

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="flex flex-1 items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="h-16 w-16 bg-[#f4c653] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-2xl">H</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">
              Sign in to continue your journey with Hestia
            </p>
          </div>

          <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
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

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#483e23]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#1a1611] px-2 text-gray-400">
                  Or
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-transparent border border-[#483e23] text-white text-sm font-bold px-4 hover:bg-[#221d11] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.532 24.552c0-1.584-.144-3.12-.42-4.608H24.268v8.736h13.08c-.564 2.82-2.22 5.22-4.644 6.864v5.664h7.26c4.248-3.912 6.672-9.648 6.672-16.656z" fill="#4285F4"/>
                <path d="M24.268 48c6.48 0 11.928-2.136 15.9-5.76l-7.26-5.664c-2.136 1.44-4.86 2.292-7.64 2.292-5.88 0-10.86-3.972-12.648-9.264H4.14v5.832C8.16 42.66 15.732 48 24.268 48z" fill="#34A853"/>
                <path d="M11.62 28.728c-.48-1.44-.756-2.964-.756-4.548s.276-3.108.756-4.548V13.8H4.14C2.856 16.62 2.1 19.86 2.1 23.184c0 3.324.756 6.564 2.04 9.36l7.48-5.832z" fill="#FBBC05"/>
                <path d="M24.268 9.924c3.528 0 6.708 1.224 9.216 3.636l6.444-6.444C36.18 2.964 30.74 0 24.268 0 15.732 0 8.16 5.34 4.14 13.8l7.48 5.832c1.788-5.292 6.768-9.264 12.648-9.264z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

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

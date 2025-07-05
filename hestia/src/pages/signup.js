import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../firebase"; // adjust path based on your folders

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#1f1e14] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        

        <div className="px-40 flex flex-1 justify-center py-5">
          <form
            className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"
            onSubmit={handleSignup}
          >
            <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create an account</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#5d593c] bg-[#2e2c1e] focus:border-[#5d593c] h-14 placeholder:text-[#bfbb9c] p-[15px] text-base font-normal leading-normal"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#5d593c] bg-[#2e2c1e] focus:border-[#5d593c] h-14 placeholder:text-[#bfbb9c] p-[15px] text-base font-normal leading-normal"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div className="flex px-4 py-3">
              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#f4f1db] text-[#1f1e14] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
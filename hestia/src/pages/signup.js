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
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#413e2a] px-10 py-3">
          <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => navigate("/")}>
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Hestia</h2>
          </div>
        </header>

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
import React from "react";

export default function Login() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#232010] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#494222] px-10 py-3">
          <div className="flex items-center gap-4">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em]">Hestia</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium cursor-pointer">Home</a>
              <a className="text-sm font-medium cursor-pointer">About</a>
              <a className="text-sm font-medium cursor-pointer">Services</a>
              <a className="text-sm font-medium cursor-pointer">Contact</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#494222] text-white text-sm font-bold">
              Sign Up/Log In
            </button>
          </div>
        </header>

        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-[512px] py-5">
            <h2 className="text-[28px] font-bold text-center pb-3 pt-5">Welcome back</h2>

            <div className="flex flex-wrap items-end gap-4 px-4 py-3 max-w-[480px] w-full">
              <label className="flex flex-col flex-1 min-w-40">
                <p className="text-base font-medium pb-2">Email or Username</p>
                <input
                  placeholder="Enter your email or username"
                  className="form-input w-full flex-1 rounded-lg text-white focus:outline-0 border border-[#685f31] bg-[#342f18] focus:border-[#685f31] h-14 p-[15px] placeholder:text-[#cbc190]"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-end gap-4 px-4 py-3 max-w-[480px] w-full">
              <label className="flex flex-col flex-1 min-w-40">
                <p className="text-base font-medium pb-2">Password</p>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input w-full flex-1 rounded-lg text-white focus:outline-0 border border-[#685f31] bg-[#342f18] focus:border-[#685f31] h-14 p-[15px] placeholder:text-[#cbc190]"
                />
              </label>
            </div>

            <p className="text-[#cbc190] text-sm text-center underline pb-3 pt-1 px-4 cursor-pointer">
              Forgot Password?
            </p>

            <div className="flex px-4 py-3 w-full">
              <button className="flex flex-1 justify-center rounded-lg h-10 bg-[#f2cc0c] text-[#232010] text-sm font-bold px-4">
                Login
              </button>
            </div>

            <p
              className="text-[#cbc190] text-sm text-center underline pb-3 pt-1 px-4 cursor-pointer"
              onClick={() => navigate("/signup.js")} // Add this handler
            >
              Don't have an account? Sign up
            </p>
            <p className="text-[#cbc190] text-sm text-center pb-3 pt-1 px-4">
              Say "Hestia, help me log in" to begin with voice input.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#232010] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        

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
              onClick={() => navigate("/signin")} // Add this handler
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

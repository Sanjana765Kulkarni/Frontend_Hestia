import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-black overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#483e23] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor" />
                </g>
                <defs><clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Hestia</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium" href="#">Home</a>
              <a className="text-white text-sm font-medium" href="#">About</a>
              <a className="text-white text-sm font-medium" href="#">Services</a>
              <a className="text-white text-sm font-medium" href="#">Contact</a>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuX3ZgsVZH-aPStEC4W3dnZr8pBr1rS3osgU8le678OtNhDTF8L_HYmasRvQaCWArAOODcSCB0jgvIAi0k4Ffr8d9E4oXlYqJuyRoPjvUsBWTJS1--wT_HxkYuPvlpbSZ0Y3B5o38TZeLlYqJAgE4iyo7WcZShbifCqnal4xnuu_8eTyK02OeKpHPpMyMCF0eRhXgKGw_AO3Uaothwm4xHhMAs1P2HcV9EcorLQ_C6H55OgA7TBiVykg4-kCKwX5eqVjai2CH5G0T5")` }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black tracking-[-0.033em]">Welcome to Hestia</h1>
                    <h2 className="text-white text-sm font-normal">Your personal AI therapy companion. Hestia offers personalized support and guidance to help you navigate life's challenges and achieve mental well-being.</h2>
                  </div>
                  <button
                    onClick={() => navigate("/login")}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-4 bg-[#f4c653] text-[#221d11] text-sm font-bold"
                  >
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a className="text-[#caba91] text-base font-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#caba91] text-base font-normal min-w-40" href="#">Terms of Service</a>
                <a className="text-[#caba91] text-base font-normal min-w-40" href="#">Contact Us</a>
              </div>
              <p className="text-[#caba91] text-base font-normal">© 2024 Hestia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
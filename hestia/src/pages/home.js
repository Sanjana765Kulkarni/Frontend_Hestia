import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-black overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        

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
                <a className="text-[#caba91] text-base font-normal min-w-40" onClick={() => navigate("/privacy")}>Privacy Policy</a>
                <a className="text-[#caba91] text-base font-normal min-w-40" onClick={() => navigate("/terms")}>Terms of Service</a>
                <a className="text-[#caba91] text-base font-normal min-w-40" onClick={() => navigate("/privacy")}>Contact Us</a>
              </div>
              <p className="text-[#caba91] text-base font-normal">© 2024 Hestia. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
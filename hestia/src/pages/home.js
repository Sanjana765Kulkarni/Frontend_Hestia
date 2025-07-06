import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Placeholder icons
const FeatureIcon = ({ children }) => (
  <div className="bg-[#221d11] p-3 rounded-full mb-4">{children}</div>
);

const HowItWorksStep = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-[#f4c653] text-black flex items-center justify-center font-bold text-xl mb-4">
      {number}
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleGetStarted = () => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <motion.div
                  className="flex min-h-[360px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center overflow-hidden"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuX3ZgsVZH-aPStEC4W3dnZr8pBr1rS3osgU8le678OtNhDTF8L_HYmasRvQaCWArAOODcSCB0jgvIAi0k4Ffr8d9E4oXlYqJuyRoPjvUsBWTJS1--wT_HxkYuPvlpbSZ0Y3B5o38TZeLlYqJAgE4iyo7WcZShbifCqnal4xnuu_8eTyK02OeKpHPpMyMCF0eRhXgKGw_AO3Uaothwm4xHhMAs1P2HcV9EcorLQ_C6H55OgA7TBiVykg4-kCKwX5eqVjai2CH5G0T5")`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-4"
                  >
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                      Find Clarity and Peace, One Conversation at a Time
                    </h1>
                    <h2 className="text-white text-base max-w-2xl mx-auto">
                      Hestia is your personal AI companion, here to offer support and guidance whenever you need it.
                    </h2>
                  </motion.div>
                  <motion.button
                    onClick={handleGetStarted}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-[#f4c653] text-[#221d11] text-base font-bold"
                  >
                    <span className="truncate">Get Started for Free</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <motion.section
          className="py-16 px-4 sm:px-10 md:px-20 lg:px-40 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Hestia?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover a new way to approach your mental wellness with features designed for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-[#1a1611] p-8 rounded-xl border border-[#483e23]">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f4c653]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </FeatureIcon>
              <h3 className="font-bold text-xl mb-2">24/7 Availability</h3>
              <p className="text-sm text-gray-400">Hestia is always here for you, day or night, providing instant support without the wait.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-[#1a1611] p-8 rounded-xl border border-[#483e23]">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f4c653]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.789-2.756 9.348m-2.488-2.488A9.04 9.04 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9a9.04 9.04 0 01-1.756 5.86M12 11v3m0 0v2m0-2h.01" />
                </svg>
              </FeatureIcon>
              <h3 className="font-bold text-xl mb-2">Personalized AI</h3>
              <p className="text-sm text-gray-400">Our AI learns and adapts to your needs, offering tailored conversations and insights.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-[#1a1611] p-8 rounded-xl border border-[#483e23]">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f4c653]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </FeatureIcon>
              <h3 className="font-bold text-xl mb-2">Secure & Confidential</h3>
              <p className="text-sm text-gray-400">Your privacy is our priority. All conversations are encrypted and stored securely.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          className="py-16 px-4 sm:px-10 md:px-20 lg:px-40 text-center bg-[#0a0908]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Begin your journey towards mental wellness with a process designed for ease and comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <HowItWorksStep number="1" title="Create Your Account" description="Sign up for free in just a few minutes to create your secure, personal space." />
            <HowItWorksStep number="2" title="Start a Conversation" description="Open the chat and talk about what's on your mind. No topic is too big or too small." />
            <HowItWorksStep number="3" title="Begin Your Journey" description="Receive empathetic support and evidence-based guidance to help you grow." />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="flex justify-center border-t border-[#221d11]">
          <div className="flex max-w-[960px] flex-1 flex-col items-center">
            <div className="flex flex-col gap-6 px-5 py-10 text-center w-full">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img src="/logo.png" alt="Hestia Logo" className="h-8 w-8 object-contain" />
                <h2 className="text-white text-lg font-bold">Hestia</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <a
                  className="text-[#caba91] text-base font-normal cursor-pointer hover:text-[#f4c653] transition-colors"
                  onClick={() => navigate("/privacy")}
                >
                  Privacy Policy
                </a>
                <a
                  className="text-[#caba91] text-base font-normal cursor-pointer hover:text-[#f4c653] transition-colors"
                  onClick={() => navigate("/terms")}
                >
                  Terms of Service
                </a>
                <a
                  className="text-[#caba91] text-base font-normal cursor-pointer hover:text-[#f4c653] transition-colors"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </a>
              </div>
              <p className="text-[#caba91] text-sm font-normal mt-4">
                © 2024 Hestia. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import React from "react";

export default function TermsOfService() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-12">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl font-black tracking-[-0.033em] mb-4">
                Terms of Service
              </h1>
              <p className="text-white text-lg">Last updated: January 2024</p>
            </div>

            {/* 1. Acceptance of Terms */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Hestia ("the Service"), you accept and agree to be
                bound by these terms. If you do not agree, please do not use this service.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hestia is an AI-powered mental health support platform providing
                conversational therapy techniques and emotional support. Our service includes:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>AI-powered conversational support</li>
                <li>Mental wellness resources and guidance</li>
                <li>Personalized therapeutic conversations</li>
                <li>24/7 availability for support</li>
              </ul>
            </section>

            {/* 3. Medical Disclaimer */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">3. Medical Disclaimer</h2>
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-4">
                <p className="text-red-100 leading-relaxed font-semibold">
                  IMPORTANT: Hestia is NOT a substitute for professional medical or psychological treatment.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our AI companion provides support and guidance, but cannot diagnose, treat, or cure
                any mental health conditions. If you are experiencing:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-4">
                <li>Thoughts of self-harm or suicide</li>
                <li>Severe depression or anxiety</li>
                <li>Substance abuse issues</li>
                <li>Any mental health crisis</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Please contact a licensed mental health professional, your doctor, or emergency services immediately.
              </p>
            </section>

            {/* 4. User Responsibilities */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">4. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">By using Hestia, you agree to:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Provide accurate information when requested</li>
                <li>Use the service for legitimate mental health support purposes</li>
                <li>Not attempt to circumvent or misuse the AI system</li>
                <li>Respect the privacy of others if sharing the platform</li>
                <li>Seek professional help when advised or experiencing severe symptoms</li>
              </ul>
            </section>

            {/* 5. Privacy and Data */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">5. Privacy and Data</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. We collect and use your information as described
                in our Privacy Policy. Key points include:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Conversations are encrypted and stored securely</li>
                <li>We do not share personal information with third parties</li>
                <li>You can request deletion of your data at any time</li>
                <li>We use data to improve our AI and provide better support</li>
              </ul>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Hestia and its creators shall not be liable for any direct, indirect, incidental,
                special, consequential, or punitive damages, including without limitation, loss of
                profits, data, use, goodwill, or other intangible losses resulting from your use
                of the service.
              </p>
            </section>

            {/* 7. Service Availability */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">7. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                While we strive to provide 24/7 availability, we do not guarantee uninterrupted
                service. We may temporarily suspend the service for maintenance, updates, or
                other technical reasons. We will provide notice when possible.
              </p>
            </section>

            {/* 8. Changes to Terms */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">8. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users
                of significant changes via email or through the platform. Continued use of the
                service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">9. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-[#f4c653] mt-2">support@hestia.ai</p>
            </section>

            {/* Emergency Resources */}
            <section className="bg-yellow-900/20 border border-yellow-500 rounded-xl p-6">
              <p className="text-yellow-100 text-center">
                <strong>Emergency Resources:</strong><br />
                National Suicide Prevention Lifeline: 988<br />
                Crisis Text Line: Text HOME to 741741
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

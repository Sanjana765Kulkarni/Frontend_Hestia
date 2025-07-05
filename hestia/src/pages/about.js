import React from "react";

export default function About() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-12">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 space-y-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl font-black tracking-[-0.033em] mb-4">
                About Hestia
              </h1>
              <p className="text-white text-lg">
                Your trusted AI companion for mental wellness and emotional support
              </p>
            </div>

            {/* Mission */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At Hestia, we believe mental health support should be accessible, personalized,
                and available whenever you need it. Our AI-powered therapy companion provides
                a safe space to explore thoughts, feelings, and challenges with empathy and understanding.
              </p>
            </section>

            {/* What We Do */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-6 text-[#f4c653]">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-300 text-sm">
                    Available whenever you need someone to talk to, day or night.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Personalized Care</h3>
                  <p className="text-gray-300 text-sm">
                    Tailored responses based on your unique needs and conversation history.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-gray-300 text-sm">
                    Your conversations are confidential and protected with advanced encryption.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Evidence-Based</h3>
                  <p className="text-gray-300 text-sm">
                    Built on proven therapeutic techniques and mental health research.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Story */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hestia was born from recognizing the barriers in mental health support — cost,
                availability, stigma, and accessibility. We wanted to create a solution providing
                immediate, judgment-free support to anyone who needs it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Named after the Greek goddess of the hearth and home, Hestia represents warmth,
                comfort, and sanctuary — feelings we strive to offer to every user through our AI companion.
              </p>
            </section>

            {/* Important Notice */}
            <section className="bg-yellow-900/20 border border-yellow-500 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Important Notice</h2>
              <p className="text-yellow-100 leading-relaxed">
                While Hestia provides valuable support and guidance, it is not a replacement for
                professional mental health care. If you’re experiencing a crisis, thoughts of self-harm,
                or severe depression, please seek help from a licensed mental health professional or
                contact emergency services immediately.
              </p>
              <div className="mt-4 pt-4 border-t border-yellow-500/30">
                <p className="text-yellow-100 text-sm">
                  <strong>Crisis Resources:</strong><br />
                  National Suicide Prevention Lifeline: 988<br />
                  Crisis Text Line: Text HOME to 741741
                </p>
              </div>
            </section>

            {/* Our Values */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-6 text-[#f4c653]">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Empathy</h3>
                  <p className="text-gray-300 text-sm">
                    We approach every interaction with understanding and compassion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy</h3>
                  <p className="text-gray-300 text-sm">
                    Your mental health journey is personal, and we respect that completely.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-300 text-sm">
                    Mental health support should be available to everyone, regardless of circumstances.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Growth</h3>
                  <p className="text-gray-300 text-sm">
                    We constantly improve our AI to better serve your mental wellness needs.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

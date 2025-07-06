import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-40 flex flex-1 justify-center py-12">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl font-black tracking-[-0.033em] mb-4">
                Contact Us
              </h1>
              <p className="text-white text-lg">
                Have questions or need support? We're here to help.
              </p>
            </div>

            {submitted && (
              <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-8 text-center">
                <p className="text-green-400">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#483e23] rounded-lg focus:outline-none focus:border-[#f4c653] transition-colors resize-vertical"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f4c653] text-[#221d11] font-bold py-3 px-6 rounded-lg hover:bg-[#e6b347] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
                  <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-[#f4c653] mb-1">
                        Email Support
                      </h3>
                      <p className="text-gray-300">support@hestia.ai</p>
                      <p className="text-sm text-gray-400">
                        We typically respond within 24 hours
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#f4c653] mb-1">
                        Emergency Support
                      </h3>
                      <p className="text-gray-300">
                        If you're in crisis, please contact:
                      </p>
                      <p className="text-sm text-gray-400">
                        National Suicide Prevention Lifeline: 988
                      </p>
                      <p className="text-sm text-gray-400">
                        Crisis Text Line: Text HOME to 741741
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
                  <h2 className="text-2xl font-bold mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-[#f4c653] mb-1">
                        How does Hestia work?
                      </h3>
                      <p className="text-sm text-gray-300">
                        Hestia uses advanced AI to provide personalized mental
                        health support through conversational therapy techniques.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#f4c653] mb-1">
                        Is my data secure?
                      </h3>
                      <p className="text-sm text-gray-300">
                        Yes, we use end-to-end encryption and follow strict privacy
                        guidelines to protect your information.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#f4c653] mb-1">
                        Can Hestia replace therapy?
                      </h3>
                      <p className="text-sm text-gray-300">
                        Hestia is designed to complement professional therapy, not
                        replace it. For serious mental health concerns, please consult
                        a licensed therapist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

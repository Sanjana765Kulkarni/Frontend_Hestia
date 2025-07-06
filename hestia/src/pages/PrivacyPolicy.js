import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-40 flex flex-1 justify-center py-12">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-white text-4xl font-black tracking-[-0.033em] mb-4">
                Privacy Policy
              </h1>
              <p className="text-white text-lg">Last updated: January 2024</p>
            </div>

            {/* Our Commitment to Privacy */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At Hestia, we understand that your mental health information is deeply
                personal and sensitive. We are committed to protecting your privacy
                and maintaining the confidentiality of your conversations and personal
                information.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Conversation Data</h3>
                  <p className="text-gray-300 text-sm">
                    We collect and store your conversations with our AI to provide
                    personalized support and improve our service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Account Information</h3>
                  <p className="text-gray-300 text-sm">
                    Basic account details such as email address and username (if applicable).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Usage Analytics</h3>
                  <p className="text-gray-300 text-sm">
                    Non-personal usage statistics to understand how our service is used
                    and improve functionality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Data</h3>
                  <p className="text-gray-300 text-sm">
                    IP address, browser type, and device information for security and
                    technical support purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">
                How We Use Your Information
              </h2>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li>To provide personalized AI therapy and mental health support</li>
                <li>To improve our AI algorithms and therapeutic approaches</li>
                <li>To ensure platform security and prevent misuse</li>
                <li>To communicate important updates about our service</li>
                <li>To comply with legal obligations when required</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>End-to-end encryption for all conversations</li>
                <li>Secure servers with regular security audits</li>
                <li>Limited access to personal data by authorized personnel only</li>
                <li>Regular backups with encrypted storage</li>
                <li>Continuous monitoring for security threats</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Data Sharing</h2>
              <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mb-4">
                <p className="text-green-100 leading-relaxed font-semibold">
                  We do NOT sell, rent, or share your personal information with third parties
                  for marketing purposes.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share information only in these limited circumstances:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>When required by law or legal process</li>
                <li>To prevent imminent harm to yourself or others</li>
                <li>With your explicit consent</li>
                <li>
                  With service providers who help operate the platform (under strict
                  confidentiality agreements)
                </li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Access your personal data and conversation history</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Export your data in a readable format</li>
                <li>Opt out of non-essential communications</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your conversation data to provide ongoing personalized support. You
                can request deletion of your data at any time. Some data may be retained for
                legal compliance or security purposes as required by law, but this will be
                anonymized when possible.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">
                International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your data may be processed and stored in countries other than your own. We
                ensure appropriate safeguards are in place to protect your data in accordance
                with applicable privacy laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Hestia is not intended for use by children under 13. We do not knowingly
                collect personal information from children under 13. If we learn that we have
                collected such information, we will delete it immediately.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes via email or through our platform. Your continued use of
                Hestia after changes indicates your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-[#1a1611] rounded-xl p-8 border border-[#483e23]">
              <h2 className="text-2xl font-bold mb-4 text-[#f4c653]">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your data,
                please contact us:
              </p>
              <div className="text-[#f4c653]">
                <p>Email: privacy@hestia.ai</p>
                <p>Support: support@hestia.ai</p>
              </div>
            </section>

            {/* Crisis Reminder */}
            <section className="bg-blue-900/20 border border-blue-500 rounded-xl p-6">
              <p className="text-blue-100 text-center leading-relaxed">
                <strong>Remember:</strong> If you're experiencing a mental health crisis,
                please reach out for immediate help.<br />
                National Suicide Prevention Lifeline: 988 | Crisis Text Line: Text HOME to 741741
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

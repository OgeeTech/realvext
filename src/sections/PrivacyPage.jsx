import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserShield,
  FaLock,
  FaCookieBite,
  FaServer,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ================= HEADER ================= */}
      <div className="bg-[#0f172a] text-white pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Navigation */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-bold text-sm group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy <span className="text-green-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We are committed to protecting your personal data and ensuring your
            privacy.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 font-mono bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/10">
            Last Updated: January 28, 2026
          </div>
        </div>
      </div>

      {/* ================= CONTENT BODY ================= */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-24 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="prose prose-lg text-gray-600 max-w-none">
            {/* Section 1 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaUserShield />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Information We Collect
                </h2>
              </div>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, update your profile, or communicate with
                us. This may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Identity Data:</strong> Full name, date of birth, and
                  government ID numbers (for KYC).
                </li>
                <li>
                  <strong>Contact Data:</strong> Email address, phone number,
                  and physical address.
                </li>
                <li>
                  <strong>Financial Data:</strong> Bank account details and
                  payment card information (processed securely by our partners).
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaServer />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  How We Use Your Data
                </h2>
              </div>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                <li>
                  Processing your property share purchases and rental income
                  distributions.
                </li>
                <li>
                  Verifying your identity to comply with financial regulations
                  (AML/KYC).
                </li>
                <li>
                  Sending you technical notices, updates, security alerts, and
                  support messages.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaLock />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Data Security
                </h2>
              </div>
              <p>
                realVext takes reasonable measures to help protect information
                about you from loss, theft, misuse, and unauthorized access. We
                use bank-grade encryption (AES-256) for sensitive data and
                strictly control access to our databases.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaCookieBite />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Cookies & Tracking
                </h2>
              </div>
              <p>
                We use cookies and similar tracking technologies to track the
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold text-lg">?</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Contact Us
                </h2>
              </div>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="font-bold text-[#0f172a]">
                  Data Protection Officer
                </p>
                <p className="text-green-600">privacy@realvext.com</p>
                <p className="text-gray-500 text-sm mt-1">
                  123 Investment Way, Victoria Island, Lagos
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

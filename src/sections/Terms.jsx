import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileContract, FaShieldAlt } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ================= HEADER ================= */}
      <div className="bg-[#0f172a] text-white pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>

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
            Terms & <span className="text-green-500">Conditions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Please read these terms carefully before using the realVext
            platform.
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
                  <span className="font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Introduction
                </h2>
              </div>
              <p>
                Welcome to realVext. By accessing our website, mobile
                application, or using our services, you agree to be bound by
                these Terms and Conditions and our Privacy Policy. If you do not
                agree with any part of these terms, you must not use our
                services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">2</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Account Registration
                </h2>
              </div>
              <p>
                To access investment opportunities, you must create an account.
                You agree to provide accurate, current, and complete information
                during the registration process. You are responsible for
                safeguarding your password and for all activities that occur
                under your account.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-sm md:text-base">
                <li>You must be at least 18 years old to register.</li>
                <li>
                  One individual may not maintain multiple accounts without
                  permission.
                </li>
                <li>
                  KYC (Know Your Customer) verification is required for all
                  investors.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaShieldAlt />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Investment Risks
                </h2>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl">
                <p className="text-orange-900 m-0 text-sm font-medium">
                  <strong>Important Notice:</strong> Real estate investments
                  carry risks, including the potential loss of capital,
                  illiquidity, and variable returns.
                </p>
              </div>
              <p className="mt-4">
                While realVext vets all properties, we do not guarantee future
                performance. Historical returns are not indicative of future
                results. Investors should seek independent financial advice
                before committing funds.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">4</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Fees and Payments
                </h2>
              </div>
              <p>
                realVext charges a management fee on rental income and a
                platform fee on initial property purchases. All fees are
                transparently displayed before you confirm any transaction.
                Payments are processed via secure third-party gateways.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <span className="font-bold">5</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Intellectual Property
                </h2>
              </div>
              <p>
                The content, organization, graphics, design, and other matters
                related to the Site are protected under applicable copyrights
                and intellectual property laws. Copying, redistribution, or
                publication of any part of this Site is strictly prohibited.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <FaFileContract />
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] m-0">
                  Governing Law
                </h2>
              </div>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the Federal Republic of Nigeria, without regard to
                its conflict of law provisions.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-4">
              Have questions about these terms?
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#0f172a] text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

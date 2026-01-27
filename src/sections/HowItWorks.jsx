import React from "react";
import {
  FaUserPlus,
  FaSearchDollar,
  FaFileSignature,
  FaWallet,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description:
        "Sign up in minutes. We verify your identity (KYC) to ensure a secure and compliant community of co-owners.",
      icon: <FaUserPlus />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Explore Vetted Properties",
      description:
        "Browse our marketplace of high-yield real estate. Every property is vetted by legal experts and professional valuers.",
      icon: <FaSearchDollar />,
      color: "bg-green-50 text-green-600",
    },
    {
      id: 3,
      title: "Purchase Shares",
      description:
        "Buy ownership shares instantly. You don't need millions—start with what you have and own a fraction of premium assets.",
      icon: <FaFileSignature />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: 4,
      title: "Earn & Grow",
      description:
        "Receive rental income directly to your wallet. Watch your capital appreciate and vote on key property decisions.",
      icon: <FaWallet />,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className="font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0f172a] text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Property Ownership, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Simplified.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Forget the paperwork, the middle-men, and the massive capital
            requirements. realVext makes investing in real estate as easy as
            shopping online.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-green-900/40 hover:-translate-y-1"
          >
            Start Your Journey <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ================= TIMELINE STEPS ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Vertical Line (Hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gray-100 -translate-x-1/2 z-0"></div>

          <div className="space-y-16 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* 1. Content Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center text-2xl mb-6 shadow-sm ${step.color} md:hidden`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* 2. Center Icon (Desktop Only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-gray-50 items-center justify-center shadow-lg z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${step.color}`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* 3. Empty Side for Balance */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER (UPDATED TO MATCH STATSBANNER) ================= */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-[#0f172a] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Matching Glow Effect */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to own your share?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of Nigerians securing their financial future with
              safe, vetted property investments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button - Green */}
              <button className="px-10 py-4 bg-green-600 text-white rounded-full font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-900/20 w-full sm:w-auto">
                Create Free Account
              </button>

              {/* Secondary Button - White (High Contrast) */}
              <button className="px-10 py-4 bg-white text-[#0f172a] rounded-full font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-md">
                View Marketplace
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

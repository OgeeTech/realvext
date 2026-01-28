import React, { useState } from "react";
import { FaChevronDown, FaArrowRight, FaHeadset, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is realVext?",
      answer:
        "realVext is a collective property investment platform that allows you to own shares in high-value real estate assets for a fraction of the cost, earning rental income and capital appreciation.",
    },
    {
      question: "How does the verification process work?",
      answer:
        "We use a secure KYC (Know Your Customer) process. You'll need to upload a government-issued ID and a selfie. Verification is usually completed within minutes.",
    },
    {
      question: "What types of properties can I invest in?",
      answer:
        "We list a variety of vetted properties including residential apartments, commercial office spaces, and student housing across prime locations in Nigeria.",
    },
    {
      question: "Can I sell my shares whenever I want?",
      answer:
        "Yes, you can list your shares on our secondary marketplace. Once another user purchases them, the funds are instantly credited to your wallet.",
    },
    {
      question: "How are rental returns distributed?",
      answer:
        "Rental income is collected from tenants and distributed automatically to your realVext wallet based on the percentage of shares you own in that property.",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      {/* CSS for Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0; 
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= SECTION 1: TOP INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Text */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">
              Frequently Asked <br />
              <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
              Find answers to common questions about realVext's property
              investment services, registration process, and security measures.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-[#0f172a]">
              <Link
                to="/contact"
                className="hover:text-green-600 transition-colors"
              >
                Contact Support &gt;
              </Link>
              <Link
                to="/features"
                className="hover:text-green-600 transition-colors"
              >
                How It Works &gt;
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative z-10">
              <img
                src="/img/faq.png"
                alt="Support Agent"
                className="w-[400px] h-[450px] object-cover rounded-3xl shadow-lg bg-[#ebf9f0]"
              />

              {/* --- Floating Badge 1: Help Center (WITH PULSE) --- */}
              <div className="absolute top-8 -left-12 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-[bounce_3s_infinite] border border-green-100">
                {/* PULSE INDICATOR ADDED HERE */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
                </span>

                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <FaHeadset />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Help Center
                  </p>
                  <p className="text-xs font-bold text-[#0f172a]">
                    24/7 Support
                  </p>
                </div>
              </div>

              {/* --- Floating Badge 2: Quick Answers --- */}
              <div
                className="absolute bottom-8 -right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-[bounce_3s_infinite]"
                style={{ animationDelay: "1000ms" }}
              >
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                  <FaBolt />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Quick Answers
                  </p>
                  <p className="text-xs font-bold text-purple-600">
                    Instant Help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: ACCORDION LIST ================= */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Get answers to the most common questions about realVext.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 animate-fade-in-up hover:-translate-y-1 ${
                  openIndex === index
                    ? "bg-white border-green-500 shadow-lg"
                    : "bg-white border-gray-200 hover:border-green-300 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span
                    className={`text-base font-semibold ${openIndex === index ? "text-[#0f172a]" : "text-gray-700"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-green-600" : "text-green-500"}`}
                  >
                    <FaChevronDown />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 3: BOTTOM CTA CARD (PULSE REMOVED) ================= */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0f172a] px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl animate-fade-in-up">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] z-0"></div>
          <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Left Content */}
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <h3 className="text-3xl font-bold text-white mb-8">
              We're here to help
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                Contact Support <FaArrowRight size={14} />
              </Link>
              <Link
                to="/features"
                className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>

          {/* Right Content - 24/7 Graphic (NO PULSE) */}
          <div className="relative z-10">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Static Back Glow (Optional, keeping it subtle) */}
              <div className="absolute inset-0 bg-green-500/10 blur-xl rounded-full z-0"></div>

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-[6px] border-gray-700 z-10" />

              {/* Green Progress Ring */}
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg] z-20">
                <circle
                  cx="72"
                  cy="72"
                  r="66"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="6"
                  strokeDasharray="414"
                  strokeDashoffset="103"
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner Text */}
              <div className="text-center relative z-20">
                <span className="block text-3xl font-extrabold text-white">
                  24/7
                </span>
                <span className="block text-xs font-medium text-gray-400">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

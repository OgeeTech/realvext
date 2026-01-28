import React from "react";
import { FaFeatherAlt, FaRegPaperPlane, FaClock } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white font-sans py-20">
      {/* ================= CSS ANIMATIONS ================= */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-green-400/20 rounded-full blur-[120px] animate-float pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-float delay-600 pointer-events-none"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon & Tagline */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-3xl mb-6 animate-float">
            <FaFeatherAlt className="text-4xl text-green-600" />
          </div>
          <div className="flex items-center justify-center gap-2 text-green-600 font-bold tracking-wider uppercase text-sm mb-4">
            <FaClock /> Something big is brewing
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] mb-6 leading-tight animate-fade-in-up delay-200 tracking-tight">
          Our Blog is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            Coming Soon
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-400">
          Get ready for expert insights, market trends, and exclusive tips on
          building generational wealth through collective property co-ownership.
        </p>

        {/* Newsletter CTA Box */}
        <div className="animate-fade-in-up delay-600">
          <div className="bg-white p-2 md:p-3 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 max-w-lg mx-auto flex items-center focus-within:border-green-500 transition-all">
            <div className="pl-4 text-gray-400 hidden md:block">
              <FaRegPaperPlane size={18} />
            </div>
            <input
              type="email"
              placeholder="Enter email to get notified..."
              className="flex-1 w-full bg-transparent px-4 py-3 text-[#0f172a] focus:outline-none text-base sm:text-lg placeholder-gray-400"
            />
            <button className="bg-[#0f172a] hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg shrink-0 text-sm md:text-base">
              Notify Me
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No spam, ever. You can unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;

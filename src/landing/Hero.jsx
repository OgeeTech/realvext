import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  // --- State for Typewriter Effect ---
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  // --- Typewriter Logic ---
  useEffect(() => {
    const typeLine = async (text, setter, delay = 50) => {
      for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };

    const runTyping = async () => {
      // Clear states initially (for strict mode/reloads)
      setLine1("");
      setLine2("");
      setLine3("");

      // Sequence: Line 1 -> Line 2 -> Line 3 (Colored)
      await typeLine("Own, Manage, Grow", setLine1, 40);
      await typeLine("Property with ", setLine2, 40);
      await typeLine("Confidence.", setLine3, 50);
    };

    runTyping();
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#eaf7f0] flex items-center font-sans">
      {/* ================= Background Image & Overlays ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero.png"
          alt="Modern city skyline"
          className="
            w-full h-full 
            object-cover 
            object-[80%_center] 
            scale-110
            translate-x-10
            md:translate-x-20
          "
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf7f0] via-[#eaf7f0]/95 md:via-[#eaf7f0]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaf7f0] via-transparent to-transparent md:hidden" />
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-0">
        {/* Changed max-w-2xl to max-w-lg to reduce text width */}
        <div className="max-w-lg flex flex-col items-start gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-green-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide text-green-800 shadow-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Phase 1: Registration Open
          </div>

          {/* Headline with Typewriter Effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#0f172a] min-h-[160px] md:min-h-[220px]">
            {line1}
            <br />
            {line2}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
              {line3}
            </span>
            {/* Blinking Cursor */}
            <span className="animate-pulse text-green-600">|</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-200">
            Collectively invest in properties, manage shares, and vote on
            decisions. Join thousands securing their future in real estate
            across Nigeria.
          </p>

          {/* CTA */}
          <div className="mt-2 animate-fade-in-up delay-300">
            <button className="group px-8 py-4 bg-[#0f172a] text-white rounded-full font-semibold text-lg hover:bg-green-900 transition-all duration-300 shadow-xl shadow-green-900/20 flex items-center gap-3 transform hover:-translate-y-1">
              Get Started For Free
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up delay-500 border-t border-green-200/50 pt-6 w-full">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#eaf7f0] bg-gray-300 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#eaf7f0] bg-white flex items-center justify-center text-xs font-bold text-green-700">
                +500
              </div>
            </div>

            <div className="text-sm text-gray-600 font-medium">
              <p className="flex items-center gap-1.5">
                <FaCheckCircle className="text-green-600" />
                Trusted by investors in{" "}
                <span className="text-[#0f172a] font-bold">50+ cities</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5 ml-5">
                Managed communities across Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Animations ================= */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default Hero;

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StatsBanner = ({
  title = "Ready to build your wealth with realVext?",
  buttonText = "Get Started For Free",
  statCount = "500+",
  statLabel = "Active Investors",
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
        {/* Background Decor (Optional Glow) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            {title}
          </h3>
          <button className="group px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-500 transition-all shadow-lg shadow-green-900/20 flex items-center gap-2 mx-auto md:mx-0">
            {buttonText}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Content - Circular Stat */}
        <div className="relative z-10">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Outer Ring (Gray) */}
            <div className="absolute inset-0 rounded-full border-[6px] border-gray-700"></div>

            {/* Active Ring (Green) - SVG for partial circle */}
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
              <circle
                cx="80"
                cy="80"
                r="74" // Radius accounting for stroke
                fill="none"
                stroke="#16a34a" // Green-600
                strokeWidth="6"
                strokeDasharray="465" // Circumference ~ 2*pi*r
                strokeDashoffset="116" // 25% gap
                strokeLinecap="round"
              />
            </svg>

            {/* Inner Text */}
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-white">
                {statCount}
              </span>
              <span className="block text-xs font-medium text-gray-400 mt-1">
                {statLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;

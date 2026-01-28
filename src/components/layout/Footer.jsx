import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        {/* Left Side: Copyright & Credits */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-[#0f172a]">realVext</span>. All
            rights reserved.
          </p>
          <span className="hidden md:inline text-gray-300">•</span>
          <p>
            Powered by{" "}
            <span className="font-semibold text-green-600">Arcstack</span>
          </p>
        </div>

        {/* Right Side: Legal Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/privacy-policy"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-green-600 transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

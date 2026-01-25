import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Community", path: "/community" },
  ];

  return (
    <>
      {/* Navbar Wrapper */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-gray-200"
            : "bg-white py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group relative z-50"
          >
            <div className="w-10 h-10 bg-[#0f172a] rounded-xl flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform duration-300">
              <FaBuilding className="text-white text-sm" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-[#0f172a]">
              realVext
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-green-700 font-bold"
                    : "text-gray-600 hover:text-green-700 hover:-translate-y-0.5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ================= DESKTOP AUTH ================= */}
          <div className="hidden lg:block">
            <Link
              to="/login"
              className="flex items-center gap-3 text-base font-bold text-[#0f172a] hover:text-green-700 transition-colors group"
            >
              Log in
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shadow-sm group-hover:bg-green-100 transition-colors">
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* ================= HAMBURGER BUTTON ================= */}
          <button
            className="lg:hidden relative z-50 w-12 h-12 rounded-full bg-gray-50 hover:bg-green-50 flex flex-col justify-center items-center gap-1.5 transition-colors duration-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-[#0f172a] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0f172a] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0f172a] rounded-full transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU (Sidebar Style) ================= */}
      {/* 1. Backdrop Overlay (Optional: dims the rest of the screen) */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. The Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out border-l border-gray-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {/* Links */}
          <div className="flex flex-col gap-6 text-center w-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-semibold block transition-all duration-500 delay-[${index * 50}ms] ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } ${isActive(link.path) ? "text-green-700" : "text-gray-800"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-1 bg-gray-100 rounded-full" />

          {/* Social Icons */}
          <div
            className={`flex flex-wrap justify-center gap-4 text-[#0f172a] transition-all duration-500 delay-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a href="#" className="hover:text-green-600 transition-colors p-2">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors p-2">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors p-2">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-green-600 transition-colors p-2">
              <FaFacebookF size={20} />
            </a>
          </div>

          {/* Auth Button */}
          <Link
            to="/login"
            className={`w-full max-w-[200px] py-3 bg-[#0f172a] text-white rounded-full font-bold text-base flex justify-center items-center gap-2 hover:bg-green-900 transition-all duration-500 delay-500 shadow-lg ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Log in <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

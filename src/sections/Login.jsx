import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaApple,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaArrowLeft, // Import ArrowLeft
} from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-4 md:p-6">
      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* ================= LEFT SIDE: VISUAL & TESTIMONIAL ================= */}
        <div className="relative hidden lg:flex flex-col justify-between p-16 bg-[#0f172a] text-white overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Modern Building"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
          </div>

          {/* Top Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                realVext
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Turn your network <br />
              into <span className="text-green-400">Net Worth.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-sm">
              Join thousands of smart investors co-owning premium real estate
              assets across Nigeria.
            </p>
          </div>

          {/* Bottom Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
            <div className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/150?u=3"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1 text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-sm text-gray-200 italic mb-2">
                  "I never thought I could own property in Ikoyi this early in
                  my career. realVext made it possible."
                </p>
                <p className="text-sm font-bold text-white">Tunde B.</p>
                <p className="text-xs text-gray-400">
                  Software Engineer, Lagos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: LOGIN FORM ================= */}
        <div className="relative flex flex-col justify-center p-8 md:p-16 lg:p-20">
          {/* Back To Home Button */}
          <Link
            to="/"
            className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-gray-400 hover:text-[#0f172a] transition-colors text-sm font-bold group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Home
          </Link>

          <div className="max-w-md mx-auto w-full mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">
              Welcome back
            </h2>
            <p className="text-gray-500 mb-10">
              Please enter your details to access your portfolio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inputs remain the same... */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between items-center mb-2 ml-1">
                  <label className="block text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-bold text-green-600 hover:text-green-700"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 group"
              >
                Sign In{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social & Footer... */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-400 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-sm">
                  <FaGoogle className="text-red-500" /> Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-600 text-sm">
                  <FaApple className="text-black" /> Apple
                </button>
              </div>
            </div>

            <p className="text-center mt-8 text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-green-600 font-bold hover:underline"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

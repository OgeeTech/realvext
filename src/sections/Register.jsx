import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaApple,
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhoneAlt,
  FaArrowRight,
  FaArrowLeft, // Import ArrowLeft
  FaCheck,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-4 md:p-6">
      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[750px]">
        {/* ================= LEFT SIDE: VISUAL & VALUE PROP ================= */}
        <div className="relative hidden lg:flex flex-col justify-between p-16 bg-[#0f172a] text-white overflow-hidden order-1 lg:order-1">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Apartment"
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
              Join the future of <br />
              <span className="text-green-400">Real Estate.</span>
            </h2>
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                  <FaCheck />
                </div>
                <span className="text-gray-300">
                  Co-own premium properties starting from ₦50k
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                  <FaCheck />
                </div>
                <span className="text-gray-300">
                  Earn passive rental income for life
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                  <FaCheck />
                </div>
                <span className="text-gray-300">
                  Transparent, secure, and fully vetted
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl mt-12">
            <div className="flex items-start gap-4">
              <img
                src="https://i.pravatar.cc/150?u=5"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1 text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-sm text-gray-200 italic mb-2">
                  "Signing up took 2 minutes. Now I own shares in 3 commercial
                  properties in Abuja. Best decision ever."
                </p>
                <p className="text-sm font-bold text-white">Amina Y.</p>
                <p className="text-xs text-gray-400">Entrepreneur, Abuja</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: REGISTER FORM ================= */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-2 overflow-y-auto">
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
              Create Account
            </h2>
            <p className="text-gray-500 mb-8">
              Start building your wealth portfolio today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inputs */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaPhoneAlt />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                  required
                />
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
                  placeholder="Create Password"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 ml-1">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  required
                />
                <label className="text-sm text-gray-500 leading-snug">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-[#0f172a] font-bold hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-[#0f172a] font-bold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0f172a] text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 group"
              >
                Create Account{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-400 font-medium">
                    Or sign up with
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

            {/* Footer */}
            <p className="text-center mt-8 text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-bold hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

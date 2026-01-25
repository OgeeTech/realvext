import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT COLUMN: INFO ================= */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">
              Get in touch with us
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-lg">
              Have questions about property investment? Want to learn more about
              our collective ownership model? Our team is here to help you
              secure your future.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-8 w-full">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0f172a] mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    support@realvext.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0f172a] mb-1">
                    Call Us
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    +234 800 REAL VEXT
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0f172a] mb-1">
                    Visit Us
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    realVext HQ, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM ================= */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
            <form className="flex flex-col gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-700 placeholder-gray-400 bg-gray-50/50"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-700 placeholder-gray-400 bg-gray-50/50"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-gray-700 placeholder-gray-400 bg-gray-50/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-900/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

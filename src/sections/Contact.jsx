import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // Add form submission logic here
    alert("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-[#0f172a] text-white pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions about investing? Need help with your account? Our
            team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-gray-100">
          {/* LEFT: Contact Info (2/5 width) */}
          <div className="lg:col-span-2 bg-[#0f172a] text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-green-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-green-400">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Our Office</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      123 Investment Way, Victoria Island,
                      <br />
                      Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-green-400">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Phone Number</p>
                    <p className="text-gray-400 text-sm">
                      +234 800 REAL VEXT
                      <br />
                      +234 812 345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-green-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email Address</p>
                    <p className="text-gray-400 text-sm">
                      support@realvext.com
                      <br />
                      hello@realvext.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (3/5 width) */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-white">
            <h3 className="text-3xl font-bold text-[#0f172a] mb-2">
              Send us a message
            </h3>
            <p className="text-gray-500 mb-10">
              We usually respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400"
                  placeholder="How can we help?"
                  required
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 placeholder-gray-400 resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f172a] text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 group"
              >
                Send Message{" "}
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

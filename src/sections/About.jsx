import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaPlay,
} from "react-icons/fa";

const About = () => {
  // Values Data
  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Unwavering Security",
      desc: "We prioritize the safety of your funds and data with bank-grade encryption and legal backing.",
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      desc: "We believe in the power of the collective. Together, we achieve more than we ever could alone.",
    },
    {
      icon: <FaLightbulb />,
      title: "Radical Transparency",
      desc: "No hidden fees or confusing terms. You see exactly where your money goes and how it grows.",
    },
    {
      icon: <FaHandshake />,
      title: "Accessible Wealth",
      desc: "Breaking down barriers to entry so everyone can own a piece of the future.",
    },
  ];

  // Stats Data
  const stats = [
    { number: "500+", label: "Active Co-Owners" },
    { number: "₦250M+", label: "Assets Under Management" },
    { number: "100%", label: "Payout Record" },
  ];

  return (
    <div className="font-sans">
      {/* ================= SECTION 1: MISSION HERO ================= */}
      <section className="pt-24 pb-20 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-green-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Our Mission
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-8 tracking-tight leading-tight">
            Democratizing Real Estate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
              One Share at a Time
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Born from the belief that property ownership shouldn't be a
            privilege for the few. realVext is on a mission to help every
            Nigerian build generational wealth through secure, collective
            investment.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: OUR STORY ================= */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  It started with a simple realization: in Nigeria, real
                  estate—the most reliable path to wealth—was becoming
                  impossible for the average person to access. The capital
                  requirements were too high, and the risks were too great.
                </p>
                <div className="border-l-4 border-green-500 pl-6 italic text-gray-700 font-medium">
                  "We realized that while one person might struggle to buy a
                  building, 50 people together could buy an estate."
                </div>
                <p>
                  That's why we built realVext. To bridge the gap between
                  ambition and reality, creating a secure platform where trust
                  is built into the code, and ownership is verifiable,
                  profitable, and easy.
                </p>
              </div>
            </div>

            {/* Video/Image Placeholder */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#0f172a] group cursor-pointer">
              {/* Overlay Image (Replace src with your team photo or office) */}
              <img
                src="/img/hero.png" // Using your existing hero image as placeholder
                alt="Our Founders"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FaPlay className="text-green-600 ml-1 text-xl" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 text-white font-medium">
                Watch how we started
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: IMPACT STATS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold tracking-wide uppercase text-sm">
              Our Impact
            </span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-2">
              Making a Real Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OUR VALUES ================= */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driven by <span className="text-green-500">Values</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just build technology; we build trust. These core
              principles guide every decision we make and every feature we
              release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

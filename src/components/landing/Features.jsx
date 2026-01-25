import React from "react";
import { FaUsers, FaVoteYea, FaComments, FaChartLine } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Collective Ownership",
      description:
        "Own premium real estate without breaking the bank. Purchase shares in high-value properties and become a co-owner instantly.",
    },
    {
      icon: <FaVoteYea />,
      title: "Democratic Decisions",
      description:
        "Have a say in your property's future. Vote on key decisions like selling, renting, or renovations with our secure polling system.",
    },
    {
      icon: <FaComments />,
      title: "Group Chat & Mediator",
      description:
        "Automatically join private groups with fellow co-owners. A dedicated staff mediator ensures peace, order, and efficient communication.",
    },
    {
      icon: <FaChartLine />,
      title: "Rental Income & Growth",
      description:
        "Earn passive income from rental yields distributed based on your share ownership. Track property appreciation in real-time.",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* --- Badge --- */}
        <div className="inline-block mb-4">
          <span className="bg-green-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Features • Everything you need
          </span>
        </div>

        {/* --- Headlines --- */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
          Powerful Features to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
            Grow Your Wealth
          </span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover how realVext helps you invest, manage, and track your
          property assets with our comprehensive suite of tools designed for
          modern investors.
        </p>

        {/* --- Feature Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start text-left hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

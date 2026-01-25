import React from "react";
import { FaUsers, FaVoteYea, FaComments, FaChartLine } from "react-icons/fa";
import StatsBanner from "../ui/StatsBanner";

const Feature2 = () => {
  const mainFeatures = [
    {
      icon: <FaUsers />,
      title: "Collective Ownership",
      description:
        "Purchase shares in high-value properties and become a co-owner instantly without the full cost.",
    },
    {
      icon: <FaVoteYea />,
      title: "Democratic Decisions",
      description:
        "Vote on selling, renting, or renovations. Decisions require 75-85% consensus.",
    },
    {
      icon: <FaComments />,
      title: "Group Chat & Mediator",
      description:
        "Join private owner groups with a staff mediator to ensure peace, order, and easy communication.",
    },
    {
      icon: <FaChartLine />,
      title: "Rental Income",
      description:
        "Earn passive income distributed based on your ownership percentage. Track growth in real-time.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Create Account",
      description:
        "Sign up and verify your identity securely to access exclusive listings.",
    },
    {
      step: "2",
      title: "Purchase Shares",
      description:
        "Select a property within your budget and buy ownership shares instantly.",
    },
    {
      step: "3",
      title: "Join & Vote",
      description:
        "Automatically enter the co-owner group to chat and vote on property decisions.",
    },
    {
      step: "4",
      title: "Earn Returns",
      description:
        "Receive your share of rental income and watch your asset appreciate.",
    },
  ];

  return (
    <section className="font-sans">
      {/* ================= MAIN FEATURES ================= */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="bg-green-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Features • Everything you need
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mt-6 mb-6">
              Powerful Features to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                Grow Your Wealth
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how realVext helps you invest, manage, and track your
              property assets with ease.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS (FULL WIDTH BG) ================= */}
      <div className="bg-[#f9fafb] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
              How It Works
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              From registration to earning passive income, we've made the
              process simple.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-green-50 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mb-5 hover:bg-green-600 hover:text-white transition-colors">
                  {item.step}
                </div>

                <h4 className="text-lg font-bold text-[#0f172a] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <StatsBanner
        title="Ready to build your wealth with realVext?"
        statCount="500+"
        statLabel="Properties Secured"
      />
    </section>
  );
};

export default Feature2;

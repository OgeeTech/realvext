import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Expanded data to demonstrate the swiper
  const testimonials = [
    {
      name: "Emeka Nwosu",
      role: "Real Estate Consultant • Port Harcourt",
      image: "https://i.pravatar.cc/150?img=11",
      quote:
        "I'm excited to recommend realVext to all my clients. This platform will revolutionize how Nigerians approach collective property investment!",
    },
    {
      name: "Aisha Usman",
      role: "Fashion Entrepreneur • Kaduna",
      image: "https://i.pravatar.cc/150?img=5",
      quote:
        "I can't wait to diversify my portfolio with realVext. It allows me to focus on growing my business while my property assets appreciate worry-free!",
    },
    {
      name: "Tunde Bakare",
      role: "Software Engineer • Lagos",
      image: "https://i.pravatar.cc/150?img=3",
      quote:
        "The transparency realVext offers is unmatched. Being able to vote on property decisions makes me feel like a true owner, not just an investor.",
    },
    {
      name: "Ngozi Eze",
      role: "Doctor • Abuja",
      image: "https://i.pravatar.cc/150?img=9",
      quote:
        "Finally, a way to invest in real estate without needing millions upfront. The secure database and verification process give me total peace of mind.",
    },
  ];

  // --- Auto-Swiper Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slides every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Re-run when index changes to reset timer

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // --- Display Logic ---
  // We get the current item and the next item (wrapping around if needed)
  const firstItem = testimonials[currentIndex];
  const secondItem = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section className="py-24 bg-gray-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
            Trusted by <span className="text-green-600">investors</span>{" "}
            nationwide
          </h2>

          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-sm gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500">
              4.9/5 rating
            </span>
          </div>
        </div>

        {/* ================= TESTIMONIAL SWIPER ================= */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Always Visible */}
            <TestimonialCard item={firstItem} />

            {/* Card 2: Hidden on Mobile, Visible on Desktop */}
            <div className="hidden md:block">
              <TestimonialCard item={secondItem} />
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION CONTROLS ================= */}
        <div className="flex flex-col items-center justify-center gap-8 mb-20">
          {/* Pagination Dots & Arrows */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-600 hover:text-green-600 transition-colors bg-white hover:shadow-md"
            >
              <FaChevronLeft size={12} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-green-500"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-600 hover:text-green-600 transition-colors bg-white hover:shadow-md"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* ================= STATS FOOTER ================= */}
        <div className="max-w-4xl mx-auto border-t border-gray-200 pt-12">
          <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
            <div className="px-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                500+
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Active Investors
              </p>
            </div>
            <div className="px-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                10K+
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Properties Listed
              </p>
            </div>
            <div className="px-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                99%
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Helper Component for Cleaner Code ---
const TestimonialCard = ({ item }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-in-out h-full flex flex-col justify-between">
    <div>
      {/* Stars */}
      <div className="flex text-yellow-400 text-xs gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base italic">
        "{item.quote}"
      </p>
    </div>

    {/* User Info */}
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
      />
      <div>
        <h4 className="text-sm font-bold text-[#0f172a]">{item.name}</h4>
        <p className="text-xs text-gray-500 font-medium">{item.role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;

import React from "react";
import Hero from "../components/landing/Hero";
import Navbar from "../components/layout/Navbar";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonial";
import Contact from "../components/landing/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

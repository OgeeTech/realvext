import React from "react";
import Hero from "../components/landing/Hero";
import Navbar from "../components/layout/Navbar";
import Features from "../components/landing/Features";
import Feature2 from "../components/landing/Feature2";
import Testimonials from "../components/landing/Testimonial";
import Contact from "../components/landing/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature2 />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

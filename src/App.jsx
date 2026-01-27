import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import FAQ from "./sections/FAQ";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Navbar sits at the top, outside of routes */}
      <Navbar />

      <main className="flex-grow pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

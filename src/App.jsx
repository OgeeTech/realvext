import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./sections/About";
import HowItWorks from "./sections/HowItWorks";
import FAQ from "./sections/FAQ";
import Marketplace from "./sections/Marketplace";
import Community from "./sections/Community";
import Blog from "./sections/Blog";
import Login from "./sections/Login";
import Register from "./sections/Register";
import ScrollToTop from "./components/shared/ScrollToTop";
import Loader from "./components/shared/Loader"; // Import the Loader

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  // Simulate loading effect on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loads for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show Loader if loading is true
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      {/* 1. Navbar sits at the top, hidden on auth pages */}
      {!isAuthPage && <Navbar />}

      <main className={`flex-grow ${!isAuthPage ? "pt-[80px]" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default App;

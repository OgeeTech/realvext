import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* The Spinner */}
      <div className="relative">
        {/* Outer Ring (Gray) */}
        <div className="w-16 h-16 border-4 border-gray-100 rounded-full"></div>
        {/* Spinning Ring (Green) */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;

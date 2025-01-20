import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* Generate shimmer cards to match the layout of larger cards */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 shadow-md w-64 rounded-lg p-4 animate-pulse"
        >
          {/* Simulate Image */}
          <div className="bg-gray-300 w-full h-40 rounded-md mb-6"></div>

          {/* Simulate Text */}
          <div className="bg-gray-300 h-6 w-3/4 mb-3 rounded"></div>
          <div className="bg-gray-300 h-5 w-2/3 mb-3 rounded"></div>
          <div className="bg-gray-300 h-5 w-1/2 mb-3 rounded"></div>
          <div className="bg-gray-300 h-6 w-1/3 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

import React from "react";
import Navbar from "./Navbar";

function Paste() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-medium text-gray-800 mb-4">New Paste</h1>
          {/* Paste form will go here */}
        </div>
      </div>
    </>
  );
}

export default Paste;

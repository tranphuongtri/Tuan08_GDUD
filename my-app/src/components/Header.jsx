import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h2 className="text-xl font-bold text-pink-600">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded text-sm focus:outline-pink-400"
        />
        <span className="text-gray-500">🔔</span>
        <span className="text-gray-500">❓</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
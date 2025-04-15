import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-end space-x-1 mt-4">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          className={`w-8 h-8 rounded-full ${
            num === 1 ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
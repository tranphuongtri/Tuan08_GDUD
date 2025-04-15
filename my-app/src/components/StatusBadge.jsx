import React from "react";

const StatusBadge = ({ status }) => {
  const colors = {
    New: "bg-blue-100 text-blue-700",
    "In progress": "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
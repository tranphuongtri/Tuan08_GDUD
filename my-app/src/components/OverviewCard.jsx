import React from "react";
import { ShoppingCart, DollarSign, Users } from "lucide-react";

const iconMap = {
  Turnover: <ShoppingCart size={20} className="text-pink-500" />,
  Profit: <DollarSign size={20} className="text-blue-500" />,
  "New customer": <Users size={20} className="text-sky-500" />,
};

const OverviewCard = ({ title, value, change }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 flex-1 min-w-[250px]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mt-1">${value}</p>
          <p className="text-xs text-green-500 mt-1">+{change}% period of change</p>
        </div>
        <div className="p-2 border rounded-full">{iconMap[title]}</div>
      </div>
    </div>
  );
};

export default OverviewCard;
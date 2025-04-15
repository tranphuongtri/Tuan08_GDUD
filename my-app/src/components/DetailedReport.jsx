import React from "react";
import StatusBadge from "./StatusBadge";
import { Pencil } from "lucide-react";

const orders = [
  { name: "Elizabeth Lee", company: "AvatarSystems", value: 359, date: "10/07/2023", status: "New" },
  { name: "Carlos Garcia", company: "SmoozeShift", value: 747, date: "24/07/2023", status: "New" },
  { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: 564, date: "08/08/2023", status: "In progress" },
  { name: "Ryan Brown", company: "OmniTech Corporation", value: 541, date: "31/08/2023", status: "In progress" },
  { name: "Ryan Young", company: "DataStream Inc", value: 769, date: "01/05/2023", status: "Completed" },
  { name: "Hailey Adams", company: "FlowRush", value: 922, date: "10/06/2023", status: "Completed" },
];

const DetailedReport = () => {
  return (
    <div className="bg-white mt-6 p-4 shadow rounded-lg">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-700">Detailed report</h3>
        <div className="space-x-2">
          <button className="px-4 py-1 border text-pink-600 border-pink-600 rounded">Import</button>
          <button className="px-4 py-1 border text-pink-600 border-pink-600 rounded">Export</button>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-500 text-left">
          <tr>
            <th className="py-2 px-3">CUSTOMER NAME</th>
            <th className="py-2 px-3">COMPANY</th>
            <th className="py-2 px-3">ORDER VALUE</th>
            <th className="py-2 px-3">ORDER DATE</th>
            <th className="py-2 px-3">STATUS</th>
            <th className="py-2 px-3"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-t">
              <td className="py-2 px-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                {order.name}
              </td>
              <td className="py-2 px-3">{order.company}</td>
              <td className="py-2 px-3">${order.value}</td>
              <td className="py-2 px-3">{order.date}</td>
              <td className="py-2 px-3"><StatusBadge status={order.status} /></td>
              <td className="py-2 px-3 text-gray-400 cursor-pointer"><Pencil size={16} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm text-gray-500">63 results</div>
    </div>
  );
};

export default DetailedReport;

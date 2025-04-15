import React from "react";
import {
  HomeIcon,
  FolderIcon,
  UsersIcon,
  BarChart3Icon,
  MessageSquareIcon,
  SettingsIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen p-5 border-r">
      <h1 className="text-2xl font-bold text-pink-600 mb-10">Logo</h1>
      <nav className="space-y-2">
        <NavItem icon={<HomeIcon size={18} />} label="Dashboard" active />
        <NavItem icon={<FolderIcon size={18} />} label="Projects" />
        <NavItem icon={<UsersIcon size={18} />} label="Teams" />
        <NavItem icon={<BarChart3Icon size={18} />} label="Analytics" />
        <NavItem icon={<MessageSquareIcon size={18} />} label="Messages" />
        <NavItem icon={<SettingsIcon size={18} />} label="Integrations" />
      </nav>
      <div className="mt-20 p-3 bg-blue-100 rounded-lg">
        <p className="text-sm font-medium">V2.0 is available</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded">Try now</button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${
      active ? "bg-pink-500 text-white" : "hover:bg-gray-100"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
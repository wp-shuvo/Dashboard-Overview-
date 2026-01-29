import React from 'react';
import { Bell } from 'lucide-react';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard Overview';
      case '/call-logs':
        return 'Call Logs & History';
      case '/appointments':
        return 'Appointments';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="h-20 bg-[#111B3C] border-b border-[#2B7FFF33] flex items-center justify-between px-8">
      <h1 className="text-xl md:text-3xl font-semibold text-white">
        {getTitle()}
      </h1>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0F172A]"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
            <img
              src="https://i.ibb.co.com/vC8xHMMR/Avatar.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

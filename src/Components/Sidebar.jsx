import React from 'react';
import { Link, NavLink } from 'react-router';
import { House, Phone, Calendar, Settings, LogOut } from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const navItems = [
    {
      path: '/',
      label: 'Dashboard Overview',
      icon: House,
      end: true,
    },
    { path: '/call-logs', label: 'Call Logs', icon: Phone },
    { path: '/appointments', label: 'Appointments', icon: Calendar },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="h-screen bg-[#111B3C] text-slate-300 flex flex-col w-20 md:w-64 transition-all duration-300 border-r border-[#2B7FFF33]">
      <div className="p-4 md:p-6 flex justify-center md:justify-start items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </Link>
        </div>
        <span className="hidden md:block font-semibold text-white">
          App Name
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 md:px-4 space-y-2 mt-4">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `relative flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white \
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_12px_rgba(56,189,248,0.45)]'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            <span className="hidden md:inline font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-2 md:p-4 border-t border-slate-800">
        <button
          className="flex items-center justify-center md:justify-start gap-3
                           px-3 md:px-4 py-3 text-red-500 w-full rounded-xl
                           hover:bg-slate-800/50 transition-colors"
        >
          <LogOut size={20} />
          <span className="hidden md:inline font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

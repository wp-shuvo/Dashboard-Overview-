import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';

const DashboardLayouts = () => {
  return (
    <div className="flex h-screen bg-[#0F172A]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ">
        <Header />
        <main className="flex-1 overflow-y-auto p-8 bg-[linear-gradient(160deg,rgba(2,6,24,1)_0%,rgba(22,36,86,1)_50%,rgba(15,23,43,1)_100%)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayouts;

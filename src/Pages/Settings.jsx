import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className=" p-2 md:p-8">
      <div className="">
        {/* Tabs */}
        <div className="max-w-3xl flex gap-4 border-b border-[#192D71] mb-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-4 font-semibold transition-colors ${
              activeTab === 'profile'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`pb-3 px-4 font-semibold transition-colors ${
              activeTab === 'password'
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Password Settings
          </button>
        </div>

        {/* Profile */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Profile Image</h3>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src="https://i.ibb.co.com/vC8xHMMR/Avatar.png"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500"
                  />
                </div>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-slate-700 via-slate-500/30 to-slate-700 text-white
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_12px_rgba(56,189,248,0.45)] rounded-full text-sm font-semibold"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Info */}

            <div className="max-w-3xl">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#192D71] gap-3 pb-3">
                  <span className="text-white font-medium">Full Name:</span>
                  <span className="text-white font-semibold">Jane D.</span>
                </div>

                <div className="flex justify-between border-b border-[#192D71] pb-3">
                  <span className="text-white font-medium">Email:</span>
                  <span className="text-white font-semibold">
                    jane@gmail.com
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#192D71] pb-3">
                  <span className="text-white font-medium">Store Name:</span>
                  <span className="text-white font-semibold">
                    UbreakFix Store
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white font-medium">Store Address:</span>
                  <span className="text-white font-semibold text-right max-w-sm">
                    123 Main Street, New York, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="space-y-6">
            <p className="text-slate-400">Password settings coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;

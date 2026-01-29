import { ChevronDown } from 'lucide-react';
import React from 'react';

const Dropdowns = () => {
  const typeOptions = ['Bug', 'Feature'];
  const issueOptions = ['Open', 'Closed'];
  const timeOptions = ['This Week', 'This Month'];

  return (
    <div className="flex items-center gap-x-2 md:gap-x-4 flex-1">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="px-4 py-2 bg-[#0F172B80] text-white rounded-lg border border-[#2B7FFF1A] hover:bg-slate-800 transition-colors flex items-center justify-between w-full"
        >
          <span className="mr-2 text-xs md:mr-4 md:text-[16px]">Type</span>{' '}
          <ChevronDown size={20} />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu absolute top-full left-0 mt-2 w-full bg-[#0f172bd8] border border-[#2B7FFF1A] rounded-xl shadow-lg z-10"
        >
          {typeOptions.map((option, index) => (
            <li key={index} className="hover:bg-slate-800 transition-colors">
              <a>{option}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="px-4 py-2 bg-[#0F172B80] text-white rounded-lg border border-[#2B7FFF1A] hover:bg-slate-800 transition-colors flex items-center justify-between w-full"
        >
          <span className="mr-4 text-xs">Issues</span> <ChevronDown size={20} />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu absolute top-full left-0 mt-2 w-full bg-[#0f172bd8] border border-[#2B7FFF1A] rounded-xl shadow-lg z-10"
        >
          {issueOptions.map((option, index) => (
            <li key={index} className="hover:bg-slate-800 transition-colors">
              <a>{option}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="px-4 py-2 bg-[#0F172B80] text-white rounded-lg border border-[#2B7FFF1A] hover:bg-slate-800 transition-colors flex items-center justify-between w-full"
        >
          <span className="mr-4 text-xs">Today</span> <ChevronDown size={20} />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu absolute top-full left-0 mt-2 w-full bg-[#0f172bd8] border border-[#2B7FFF1A] rounded-xl shadow-lg z-10"
        >
          {timeOptions.map((option, index) => (
            <li key={index} className="hover:bg-slate-800 transition-colors">
              <a>{option}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdowns;

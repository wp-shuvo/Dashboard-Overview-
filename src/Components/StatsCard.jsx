import React from 'react';

const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  color = 'cyan',
}) => {
  const themes = {
    cyan: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(43,127,255,1)_0%,rgba(0,184,219,1)_100%)]',
    },
    purple: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(173,70,255,1)_0%,rgba(246,51,154,1)_100%)]',
    },
    orange: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(255,105,0,1)_0%,rgba(251,44,54,1)_100%)]',
    },
    red: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(251,44,54,1)_0%,rgba(255,32,86,1)_100%)]',
    },
    green: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(0,201,80,1)_0%,rgba(0,188,125,1)_100%)]',
    },
    blue: {
      iconBg:
        'bg-[linear-gradient(160deg,rgba(97,95,255,1)_0%,rgba(43,127,255,1)_100%)]',
    },
  };

  const theme = themes[color];

  return (
    <div className="bg-[#0F172B80] p-6 rounded-2xl border border-[#2B7FFF1A]">
      <div className="flex justify-between items-start mb-4">
        <span className="text-slate-400 font-medium text-sm">{title}</span>
        <div className={`p-2 rounded-lg ${theme.iconBg} text-white`}>
          {Icon && <Icon size={20} />}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">{value}</h3>
        <span
          className={`text-sm font-medium ${trend === 'up' ? 'text-[#05DF72]' : 'text-[#FD244A]'}`}
        >
          {trend === 'up' ? '' : ''}
          {trendValue}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;

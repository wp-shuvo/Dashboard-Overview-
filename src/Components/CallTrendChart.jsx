import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { day: 'Mon', calls: 45 },
  { day: 'Tue', calls: 52 },
  { day: 'Wed', calls: 48 },
  { day: 'Thu', calls: 60 },
  { day: 'Fri', calls: 75 },
  { day: 'Sat', calls: 70 },
  { day: 'Sun', calls: 50 },
];

const CallTrendChart = () => {
  return (
    <div className="bg-[#0F172B80] p-6 rounded-2xl border border-[#2B7FFF1A] h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Call Trends - This Week
          </h3>
          <p className="text-sm text-[#90A1B9]">Total: 472 calls</p>
        </div>
        <select className="bg-[#0F172B80] text-slate-300 text-sm rounded-lg px-3 py-2 border border-[#2B7FFF1A] outline-none">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                borderColor: '#334155',
                color: '#fff',
              }}
              itemStyle={{ color: '#3B82F6' }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendChart;

import React from 'react';
import {
  Phone,
  Bot,
  ArrowRightLeft,
  Clock,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import StatsCard from '../Components/StatsCard';
import CallTrendChart from '../Components/CallTrendChart';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Calls Today',
      value: '127',
      trend: '+12%',
      icon: Phone,
      theme: 'cyan',
    },
    {
      title: 'AI-Handled Calls',
      value: '98',
      trend: '+77%',
      icon: Bot,
      theme: 'purple',
    },
    {
      title: 'Warm Transfer',
      value: '23',
      trend: '+18%',
      icon: ArrowRightLeft,
      theme: 'orange',
    },
    {
      title: 'Appointments Booked',
      value: '34',
      trend: '+8%',
      icon: Calendar,
      theme: 'green',
    },
    {
      title: 'Missed/Failed Calls',
      value: '6',
      trend: '-3%',
      icon: AlertCircle,
      theme: 'red',
    },
    {
      title: 'Avg Call Duration',
      value: '3:42',
      trend: '+15%',
      icon: Clock,
      theme: 'blue',
    },
  ];

  const recentActivity = [
    {
      title: 'AI booked appointment for iPhone 13 screen repair',
      time: '2 min ago',
      activity: 'solved',
    },
    {
      title: 'Warm transfer to technician - Software issue',
      time: '5 min ago',
      activity: 'pending',
    },
    {
      title: 'Quote provided for iPad battery replacement',
      time: '8 min ago',
      activity: 'solved',
    },
    {
      title: 'Call dropped after 12 seconds',
      time: '15 min ago',
      activity: 'failed',
    },
  ];

  const repairRequests = [
    {
      label: 'Screen Repair',
      count: 156,
      width: '80%',
    },
    {
      label: 'Battery Replacement',
      count: 89,
      width: '60%',
    },
    {
      label: 'Back Glass Repair',
      count: 67,
      width: '45%',
    },
    {
      label: 'Software Issues',
      count: 45,
      width: '30%',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trendValue={stat.trend}
            trend={stat.trend.startsWith('+') ? 'up' : 'down'}
            icon={stat.icon}
            color={stat.theme}
          />
        ))}
      </div>

      {/* Chart */}
      <CallTrendChart />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-[#0F172B80] p-6 rounded-2xl border border-[#2B7FFF1A]">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#0F172B80] border border-[#2B7FFF1A] hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {activity.activity === 'solved' && (
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full bg-[#05DF72]`}
                    ></div>
                  )}
                  {activity.activity === 'pending' && (
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full bg-[#FF8904]`}
                    ></div>
                  )}
                  {activity.activity === 'failed' && (
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full bg-[#FF6467]`}
                    ></div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repair Requests */}
        <div className="bg-[#0F172B80] p-6 rounded-2xl border border-[#2B7FFF1A]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              Top Repair Requests
            </h3>
          </div>
          <div className="space-y-6">
            {repairRequests.map((req, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-white">{req.label}</span>
                  <span className="text-[#C0CCDD] ">{req.count} requests</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[linear-gradient(90deg,rgba(43,127,255,1)_0%,rgba(0,184,219,1)_100%)] rounded-full`}
                    style={{ width: req.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import {
  Search,
  Phone,
  Clock,
  Monitor,
  Smartphone,
  Battery,
  AlertCircle,
  CircleAlert,
} from 'lucide-react';
import CallDetails from '../Components/CallDetails';
import Dropdowns from '../Components/Dropdowns';

const mockCalls = [
  {
    id: 1,
    phone: '+1 (555) 345-6789',
    dateTime: '2025-12-16 • 09:42 AM',
    duration: '5:23',
    status: 'AI Resolved',
    outcome: 'Quote Provided',
    issue: 'Screen',
    transcript: [
      {
        role: 'AI Assistant',
        text: 'Thank you for calling UBreakIFix! How can I help you today!',
      },
      {
        role: 'Customer',
        text: 'Hi, my iPhone 13 screen is cracked. How much would it cost to repair?',
      },
      {
        role: 'AI Assistant',
        text: 'I can help with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?',
      },
      { role: 'Customer', text: 'Yes, please! When are you available?' },
      {
        role: 'AI Assistant',
        text: 'Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?',
      },
    ],
  },
  {
    id: 2,
    phone: '+1 (555) 987-6543',
    dateTime: '2025-12-16 • 10:15 AM',
    duration: '2:45',
    status: 'Warm Transfer',
    outcome: 'Escalated to technician',
    issue: 'Software',
    transcript: [],
  },
  {
    id: 3,
    phone: '+1 (555) 123-4567',
    dateTime: '2025-12-16 • 11:30 AM',
    duration: '4:10',
    status: 'Appointment',
    outcome: 'Appointment Booked',
    issue: 'Battery',
    transcript: [],
  },
  {
    id: 4,
    phone: '+1 (555) 234-5678',
    dateTime: '2025-12-16 • 01:20 PM',
    duration: '0:20',
    status: 'Dropped',
    outcome: 'Call Dropped',
    issue: 'Unknown',
    transcript: [],
  },
  {
    id: 5,
    phone: '+1 (555) 876-5432',
    dateTime: '2025-12-16 • 02:45 PM',
    duration: '3:15',
    status: 'AI Resolved',
    outcome: 'Quote Provided',
    issue: 'Screen',
    transcript: [],
  },
];

const CallLogs = () => {
  const [selectedCallId, setSelectedCallId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedCall = mockCalls.find(c => c.id === selectedCallId);

  const filteredCalls = mockCalls.filter(
    call =>
      call.phone.includes(searchTerm) ||
      call.issue.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-1">
      <div className="flex flex-col lg:flex-row lg:items-center mb-6 gap-4 ">
        {/* Search bar */}
        <div className="relative mb-5 flex-1 md:mb-0">
          <Search
            className="absolute left-4 top-3.5 text-[#90A1B9]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by phone number, issue type..."
            className="w-full bg-[#0F172B80] text-white pl-12 pr-4 py-3 rounded-xl border border-[#2B7FFF1A] outline-none focus:border-cyan-500 transition-colors"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Dropdowns */}
        <div className="flex-1 flex gap-2 justify-end">
          <Dropdowns />
        </div>
      </div>
      <div className="flex gap-6  h-[calc(100vh-220px)]">
        <div className="flex-1 flex flex-col gap-4">
          {/* Call List */}
          <div className=" bg-[#0F172B80]  border border-[#0F172B80] rounded-xl">
            <h3 className="text-white text-xl p-4">Call List</h3>
            {filteredCalls.map(call => (
              <div
                key={call.id}
                onClick={() => setSelectedCallId(call.id)}
                className={`p-4 border cursor-pointer transition-all ${
                  selectedCallId === call.id
                    ? 'bg-[#0F172B80] border-cyan-700 '
                    : 'bg-[#0F172B80] border-[#2B7FFF1A] hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[linear-gradient(0deg,rgba(0,184,219,1)_0%,rgba(43,127,255,1)_100%)] flex items-center justify-center text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium max-sm:text-sm tracking-wide">
                        {call.phone}
                      </h4>
                      <span className="text-xs text-[#90A1B9]">
                        {call.dateTime}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[12px] uppercase max-sm:text-[8px] max-sm:p-1 font-bold px-2 py-1 rounded-lg border ${
                      call.status === 'AI Resolved'
                        ? 'text-[#05DF72] border-[#00C9504D] bg-[linear-gradient(0deg,rgba(0,201,80,0.2)_0%,rgba(0,188,125,0.2)_100%)]'
                        : call.status === 'Warm Transfer'
                          ? 'text-[#FF8904] border-[#FF69004D] bg-[linear-gradient(0deg,rgba(251,44,54,0.2)_0%,rgba(255,105,0,0.2)_100%)]'
                          : call.status === 'Dropped'
                            ? 'text-[#FF0404] border-[#FF69004D] bg-[linear-gradient(0deg,rgba(255,21,0,0.2)_0%,rgba(251,44,54,0.2)_100%)]'
                            : 'text-[#51A2FF] border-[#2B7FFF4D] bg-[linear-gradient(0deg,rgba(0,184,219,0.2)_0%,rgba(43,127,255,0.2)_100%)]'
                    }`}
                  >
                    {call.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-[#90A1B9]">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{call.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>
                      <CircleAlert size={14} />
                    </span>
                    <span> {call.outcome}</span>
                  </div>
                  <div className="px-2 py-1 rounded bg-[#2B7FFF33] text-[#51A2FF]">
                    {call.issue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 hidden lg:block">
          <CallDetails call={selectedCall} />
        </div>
      </div>
    </div>
  );
};

export default CallLogs;

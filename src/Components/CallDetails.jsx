import React from 'react';
import { Copy, CirclePlay, FileText } from 'lucide-react';

const CallDetails = ({ call }) => {
  if (!call)
    return (
      <div className="text-slate-400 p-8">Select a call to view details</div>
    );

  return (
    <div className="bg-[#0F172B80]  border border-[#0F172B80] rounded-2xl  h-full flex flex-col">
      <div className="p-6 border-b border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-6">Call Details</h3>

        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <label className="text-sm text-[#90A1B9] tracking-wider block mb-1">
              Phone Number
            </label>
            <p className="text-white font-medium">{call.phone}</p>
          </div>
          <div>
            <label className="text-sm text-[#90A1B9] tracking-wider block mb-1">
              Duration
            </label>
            <p className="text-white font-medium">{call.duration}</p>
          </div>
          <div>
            <label className="text-sm text-[#90A1B9] tracking-wider block mb-1">
              Date & Time
            </label>
            <p className="text-white font-medium">{call.dateTime}</p>
          </div>
          <div>
            <label className="text-sm text-[#90A1B9] tracking-wider block mb-1">
              Issue Type
            </label>
            <p className="text-white font-medium">{call.issue}</p>
          </div>
        </div>

        <div className="mt-6">
          <label className="text-sm text-[#90A1B9] tracking-wider block mb-2">
            Call Type
          </label>
          <span
            className={`text-[10px] max-sm:text-[9px] font-bold px-2 py-1 rounded-lg border ${
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

        <div className="mt-6">
          <label className="text-sm text-[#90A1B9] tracking-wider block mb-1">
            Outcome
          </label>
          <p className="text-white font-medium">{call.outcome || 'N/A'}</p>
        </div>

        <button className="w-full mt-6 bg-[linear-gradient(317deg,rgba(246,51,154,0.2)_0%,rgba(173,70,255,0.2)_100%)] text-[#C27AFF] border border-[#AD46FF4D] rounded-xl py-3 flex items-center justify-center gap-2 transition-colors">
          <CirclePlay size={16} />
          Play Audio Recording
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-[#51A2FF]">
            <FileText size={16} />
          </div>
          <h4 className="text-sm font-semibold text-white">
            Conversation Transcript
          </h4>
        </div>

        <div className="space-y-6 text-sm">
          {call.transcript &&
            call.transcript.map((msg, idx) => (
              <div key={idx}>
                <p
                  className={`font-semibold mb-1 ${msg.role === 'AI Assistant' ? 'text-[#05DF72]' : 'text-[#51A2FF]'}`}
                >
                  {msg.role}:
                </p>
                <p className="text-white font-medium leading-relaxed">
                  {msg.text}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CallDetails;

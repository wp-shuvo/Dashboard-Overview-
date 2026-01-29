import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const BookingLink = () => {
  const [copied, setCopied] = useState(false);

  const bookingLink = 'https://techstore.com/book?id=store123';

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[linear-gradient(0deg,rgba(22,33,62,1)_0%,rgba(26,26,46,1)_100%)]  rounded-xl p-6 mt-6">
      <h3 className="text-gray-400 text-sm font-medium mb-4">Booking Link</h3>
      <div className="flex gap-4">
        <input
          type="text"
          value={bookingLink}
          readOnly
          className="flex-1 bg-[#0A0A0F80] border border-[#00FF8833] focus:border- focus:ring-0 outline-none rounded-lg px-4 py-3  "
        />
        <button
          onClick={handleCopy}
          className="bg-gradient-to-r from-slate-700 via-slate-500/30 to-slate-700 text-white
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_12px_rgba(56,189,248,0.45)] rounded-lg px-4 py-3 flex items-center text-sm font-semibold gap-2 transition-all active:scale-95"
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <Copy size={18} />
          )}
          <span className="font-medium max-sm:hidden">
            {copied ? 'Copied' : 'Copy Link'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingLink;

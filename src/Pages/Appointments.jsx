import React from 'react';
import {
  Calendar,
  CheckCircle,
  AlertCircle,
  CircleAlert,
  CircleCheckBig,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import BookingLink from '../Components/BookingLink';
import AppointmentsTable from '../Components/AppointmentsTable';

const Appointments = () => {
  //table data
  const appointmentsData = [
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '09:00',
    },
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '10:00',
    },
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '11:00',
    },
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '12:00',
    },
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '02:00',
    },
    {
      clientName: 'Jane.D',
      phone: '01960685765',
      email: 'admin@gmail.com',
      device: 'Apple/Iphone 13pro',
      repairType: 'Screen',
      date: '02/06/2026',
      slotNo: '1',
      startTime: '03:00',
    },
  ];

  return (
    <div className="p-2 md:p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="bg-[#0F172B80] rounded-lg p-6 flex flex-col border border-[#2B7FFF33] justify-between">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={20} className="text-[#51A2FF]" />
            <h3 className="text-md text-[#90A1B9] ">Total Booked</h3>
          </div>
          <div className="text-2xl font-bold mb-2">34</div>
          <p className="text-[#05DF72] text-sm">+8 this week</p>
        </div>

        <div className="bg-[#0F172B80] rounded-lg p-6 flex flex-col border border-[#2B7FFF33] justify-between">
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig size={20} className="text-[#05DF72]" />
            <h3 className="text-md text-[#90A1B9] ">AI Booked</h3>
          </div>
          <div className="text-2xl font-bold mb-2">28</div>
          <p className="text-[#90A1B9] text-sm">82% of total</p>
        </div>

        <div className="bg-[#0F172B80] rounded-lg p-6 flex flex-col border border-[#2B7FFF33] justify-between">
          <div className="flex items-center gap-3 mb-4">
            <CircleAlert size={20} className="text-[#FDC700]" />
            <h3 className="text-md text-[#90A1B9] ">Pending</h3>
          </div>
          <div className="text-2xl font-bold mb-2">3</div>
          <p className="text-[#90A1B9] text-sm">Awaiting confirmation</p>
        </div>
      </div>

      <BookingLink />

      <AppointmentsTable appointments={appointmentsData} />

      {/* Pagination */}

      {/* <div className="flex justify-center mt-3 max-w-xl">
        <div className="inline-flex items-center gap-1  font-medium">
          <span className="flex items-center  gap-1 px-3 py-1 text-sm text-[#697077] cursor-pointer">
            <ChevronLeft /> Previous
          </span>
          <span className="px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            1
          </span>

          <span className="px-3 py-1 text-sm font-semibold bg-[#A6C8FF] text-[#0F62FE] cursor-pointer">
            2
          </span>

          <span className="px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            3
          </span>

          <span className="px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            4
          </span>

          <span className="px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            5
          </span>

          <span className="px-2 py-1 text-sm text-[#0F62FE]">…</span>

          <span className="px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            11
          </span>

          <span className="flex items-center gap-1 px-3 py-1 text-sm text-[#0F62FE] cursor-pointer">
            Next <ChevronRight />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Appointments;

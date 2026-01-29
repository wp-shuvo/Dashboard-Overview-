import React from 'react';

const AppointmentsTable = ({ appointments }) => {
  return (
    <div className="bg-[#111B3B] border border-[#2B7FFF33] rounded-xl mt-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#2B7FFF33] text-[#FFFFFF] text-sm font-semibold">
              <th className="px-6 py-4 tracking-wider">Client Name</th>
              <th className="px-6 py-4 tracking-wider">Client Phone</th>
              <th className="px-6 py-4 tracking-wider">Client mail</th>
              <th className="px-6 py-4 tracking-wider">Device</th>
              <th className="px-6 py-4 tracking-wider">Repair Type</th>
              <th className="px-6 py-4 tracking-wider">Date</th>
              <th className="px-6 py-4 tracking-wider">Slot no</th>
              <th className="px-6 py-4 tracking-wider">Start Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2B7FFF33]">
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                className="hover:bg-white/5 transition-colors text-[#FFFFFF] text-sm"
              >
                <td className="px-6 py-4 text-[#51A2FF] font-medium whitespace-nowrap">
                  {appointment.clientName}
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  {appointment.phone}
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  {appointment.email}
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  {appointment.device}
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  {appointment.repairType}
                </td>
                <td className="px-6 py-4  whitespace-nowrap">
                  {appointment.date}
                </td>
                <td className="px-6 py-4  whitespace-nowrap text-center">
                  {appointment.slotNo}
                </td>
                <td className="px-6 py-4  whitespace-nowrap text-center">
                  {appointment.startTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;

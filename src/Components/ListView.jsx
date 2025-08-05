import React, { useState } from 'react'
import { FiEye, FiEdit, FiTrash2, FiActivity } from "react-icons/fi";


function ListView({ expanded = true }) {
  const [showActions, setShowActions] = useState(false);
  const [openActionIndex, setOpenActionIndex] = useState(null);


    const meetings = [
  {
    date: '01 May, 2025 at 2pm',
    status: 'Completed',
    type: 'Online',
    buyer: 'Mango Private Limited',
    brand: 'Mango',
    dept: 'Design',
    title: 'Costing Discussion with Zara',
    meetingDate: '01 May, 2025 at 2pm',
    participants: 'Mohd Saleem +2',
    roles: 'Buyer, Sales',
  },
  {
    date: '02 May, 2025 at 3pm',
    status: 'Upcoming',
    type: 'Offline',
    buyer: 'Cherry Innovations',
    brand: 'Cherry',
    dept: 'Development',
    title: 'UI/UX Review',
    meetingDate: '02 May, 2025 at 3pm',
    participants: 'Mohd Saleem +2',
    roles: 'Buyer, Sales',
  },
   {
    date: '03 May, 2025 at 10am',
    status: 'Follow-up',
    type: 'Offline',
    buyer: 'Pineapple Inc.',
    brand: 'Pineapple',
    dept: 'Marketing',
    title: 'Campaign Starategy',
    meetingDate: '03 May, 2025 at 10am',
    participants: 'Mohd Saleem +2',
    roles: 'Buyer, Sales',
  },
  {
    date: '04 May, 2025 at 1pm',
    status: 'Re-scheduled',
    type: 'Offline',
    buyer: 'Peach Corp',
    brand: 'Peach',
    dept: 'Finance',
    title: 'Budget Review',
    meetingDate: '04 May, 2025 at 1pm',
    participants: 'Mohd Saleem +2',
    roles: 'Buyer, Sales',
  },
   
  
  // Add more mock rows like above...
];
  return (
    //    <div className="w-full bg-white rounded-lg border overflow-hidden shadow-sm">
    //   {/* Scrollable wrapper */}
    //   <div className="overflow-x-auto max-h-[550px] overflow-y-auto">
    //     <table className="min-w-full text-sm text-left text-gray-700">
    //       <thead className="bg-gray-100 sticky top-0 z-10">
    //         <tr>
    //           <th className="px-4 py-3">Date & Time</th>
    //           <th className="px-4 py-3">Status</th>
    //           <th className="px-4 py-3">Type</th>
    //           <th className="px-4 py-3">Buyer Name</th>
    //           <th className="px-4 py-3">Brand</th>
    //           <th className="px-4 py-3">Dept.</th>
    //           <th className="px-4 py-3">Title</th>
    //           <th className="px-4 py-3">Meeting Date</th>
    //           {expanded && <th className="px-4 py-3">Participants</th>}
    //           <th className="px-4 py-3">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {meetings.map((meeting, index) => (
    //           <tr key={index} className="border-t">
    //             <td className="px-4 py-2 whitespace-nowrap">{meeting.date}</td>
    //             <td className="px-4 py-2">
    //               <span className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${meeting.status === 'Completed' ? 'bg-green-500' : meeting.status === 'Upcoming' ? 'bg-orange-400' : 'bg-gray-500'}`}>
    //                 {meeting.status}
    //               </span>
    //             </td>
    //             <td className="px-4 py-2">
    //               <span className={`px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700`}>
    //                 {meeting.type}
    //               </span>
    //             </td>
    //             <td className="px-4 py-2 font-medium text-blue-800">{meeting.buyer}</td>
    //             <td className="px-4 py-2">{meeting.brand}</td>
    //             <td className="px-4 py-2">{meeting.dept}</td>
    //             <td className="px-4 py-2 underline text-sm cursor-pointer text-black hover:text-blue-600">{meeting.title}</td>
    //             <td className="px-4 py-2">{meeting.meetingDate}</td>
    //             {expanded && (
    //               <td className="px-4 py-2">
    //                 <div className="flex items-center space-x-2">
    //                   <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
    //                     M
    //                   </div>
    //                   <div>
    //                     <div className="text-sm font-medium">{meeting.participants}</div>
    //                     <div className="text-xs text-gray-400">{meeting.roles}</div>
    //                   </div>
    //                 </div>
    //               </td>
    //             )}
    //             <td className="px-4 py-2 text-center text-gray-400">
    //               <button className="text-xl">⋮</button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>

    //   {/* Pagination */}
    //   <div className="flex items-center justify-between p-4 text-sm border-t bg-gray-50">
    //     <div className="flex items-center space-x-2">
    //       <span>Items Per Page</span>
    //       <select className="border px-2 py-1 rounded text-sm">
    //         <option>50</option>
    //         <option>100</option>
    //       </select>
    //     </div>
    //     <div className="flex items-center space-x-2">
    //       <span>1–50 of 100</span>
    //       <button className="px-2 py-1 border rounded">{"<"}</button>
    //       <button className="px-3 py-1 rounded bg-purple-600 text-white">1</button>
    //       <button className="px-2 py-1 border rounded">2</button>
    //       <button className="px-2 py-1 border rounded">{"..."}</button>
    //       <button className="px-2 py-1 border rounded">{">"}</button>
    //     </div>
    //   </div>
    // </div>

<div className="w-full bg-white rounded-lg border overflow-hidden p-3 shadow-sm">
 
   <div className="flex flex-wrap gap-3 items-center p-4 bg-white rounded-lg shadow-sm">
    
      <input
        type="text"
        placeholder="Search anything here..."
        className="px-2 text-[14px] py-2 border border-gray-300 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Dropdowns */}
      {[
        "Buyer Name",
        "Brand",
        "Dept",
        "Meeting Type",
        "Participants",
        "Meeting Date",
        "Status",
      ].map((label, index) => (
        <select
          key={index}
          className="px-2 py-2 text-[12px] border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>{label}</option>
        </select>
      ))}
    </div>
  <div className="overflow-x-auto">
    <div className="max-h-[550px] mb-32">
      <table className="min-w-max w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3">Date & Time</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Buyer Name</th>
            <th className="px-4 py-3">Brand</th>
            <th className="px-4 py-3">Dept.</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Meeting Date</th>
            {expanded && <th className="px-4 py-3">Participants</th>}
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 whitespace-nowrap">{meeting.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${
                    meeting.status === 'Completed'
                      ? 'bg-green-500'
                      : meeting.status === 'Upcoming'
                      ? 'bg-orange-400'
                      : 'bg-gray-500'
                  }`}
                >
                  {meeting.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700">
                  {meeting.type}
                </span>
              </td>
              <td className="px-4 py-2 font-medium text-blue-800">{meeting.buyer}</td>
              <td className="px-4 py-2">{meeting.brand}</td>
              <td className="px-4 py-2">{meeting.dept}</td>
              <td className="px-4 py-2 underline text-sm cursor-pointer text-black hover:text-blue-600">
                {meeting.title}
              </td>
              <td className="px-4 py-2">{meeting.meetingDate}</td>
              {expanded && (
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div>
                      <div className="text-sm font-medium">{meeting.participants}</div>
                      <div className="text-xs text-gray-400">{meeting.roles}</div>
                    </div>
                  </div>
                </td>
              )}
              {/* <td className="px-4 py-2 text-center text-gray-500">
                <button className="text-xl rounded-full hover:bg-gray-100 p-1 shadow">
                  ⋮
                </button>
              </td> */}
      <td className="px-4 py-2 text-center text-gray-500 relative">
      {/* Action button */}
      <button
        onClick={() =>
          setOpenActionIndex(openActionIndex === index ? null : index)
        }
        className="text-xl rounded-full hover:bg-gray-100 p-1 shadow"
      >
        ⋮
      </button>

      
      {openActionIndex === index && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50 text-left">
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FiEye /> View
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FiEdit /> Edit
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FiActivity /> Activity Log
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
              <FiTrash2 /> Delete
            </li>
          </ul>
        </div>
      )}
    </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-between p-4 text-sm border-t bg-gray-50">
    <div className="flex items-center space-x-2">
      <span>Items Per Page</span>
      <select className="border px-2 py-1 rounded text-sm">
        <option>50</option>
        <option>100</option>
      </select>
    </div>
    <div className="flex items-center space-x-2">
      <span>1–50 of 100</span>
      <button className="px-2 py-1 border rounded">{'<'}</button>
      <button className="px-3 py-1 rounded bg-purple-600 text-white">1</button>
      <button className="px-2 py-1 border rounded">2</button>
      <button className="px-2 py-1 border rounded">...</button>
      <button className="px-2 py-1 border rounded">{'>'}</button>
    </div>
  </div>
</div>



  )
}

export default ListView
import React from 'react'
import { FiUpload, FiPlus } from 'react-icons/fi';

function PageHeader() {
  return (
       <div className="flex items-center justify-between px-4 py-4 bg-[#F8FAFD]">
      {/* Left: Title & Breadcrumb */}
      <div>
        <h1 className="text-lg font-semibold">Buyer Meeting List View</h1>
        <div className="text-sm mt-1">
          <span className="text-purple-600 font-medium cursor-pointer">
            Buyer Meeting
          </span>
          <span className="text-gray-500"> &gt;&gt; Buyer Meeting List View</span>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-md shadow-sm">
          <FiUpload />
          Export
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white text-sm rounded-md shadow-sm">
          <FiPlus />
          Create New Meeting
        </button>
      </div>
    </div>
  )
}

export default PageHeader
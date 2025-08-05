import React, { useState } from 'react'


function TabFilter() {
    const tabs = [
  { name: 'All', count: 100 },
  { name: 'Draft', count: 50 },
  { name: 'Archive', count: 75 },
];
    
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="bg-white rounded-md mt-3  border border-gray-200 p-3 mb-3 mx-2 inline-flex w-full gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition ${
            activeTab === tab.name
              ? 'bg-purple-100 text-purple-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {tab.name}
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              activeTab === tab.name
                ? 'bg-purple-600 text-white'
                : 'bg-gray-600 text-white'
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default TabFilter
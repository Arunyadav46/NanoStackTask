import React from 'react'

function Sidebar() {
     const menuItems = [
    { label: 'Dashboard', icon: 'ri-home-5-line' },
    { label: 'Tasks', icon: 'ri-task-line' },
    { label: 'Buyer Meeting', icon: 'ri-calendar-line', active: true },
    { label: 'Quick Costing', icon: 'ri-lightbulb-line' },
    { label: 'Pre Order Costing', icon: 'ri-wallet-3-line' },
    { label: 'Style Library', icon: 'ri-book-open-line' },
    { label: 'Requisitions', icon: 'ri-file-list-3-line', hasSub: true },
    { label: 'Buyer Purchase', icon: 'ri-shopping-cart-line', hasSub: true },
    { label: 'Inventory', icon: 'ri-box-3-line', hasSub: true },
    { label: 'Sample Development', icon: 'ri-flask-line', hasSub: true },
    { label: 'Production', icon: 'ri-tools-line', hasSub: true },
    { label: 'Master Admin', icon: 'ri-user-settings-line' },
    { label: 'Users', icon: 'ri-user-line', hasSub: true },
    { label: 'Suppliers', icon: 'ri-team-line' },
    { label: 'Showroom', icon: 'ri-store-line' },
    { label: 'Shipment', icon: 'ri-truck-line' },
    { label: "KPI's", icon: 'ri-bar-chart-line', hasSub: true },
    { label: 'E-Invoice / E-Way Bill', icon: 'ri-file-paper-2-line' },
    { label: 'Reports', icon: 'ri-pie-chart-2-line' },
    { label: 'Master Data', icon: 'ri-database-2-line', hasSub: true },
    { label: 'Settings', icon: 'ri-settings-3-line' },
  ];
  return (
    <div className='w-[20%] bg-red-100'>
          <aside className="w-[20%] overflow-auto scrollbar-hide fixed h-screen bg-white border-r border-gray-200 px-4 py-3 overflow-y-auto">
      
     <div className="flex items-center mx-2 w-[150px] h-[50px] border border-black rounded-md overflow-hidden">
      
      <div className="bg-black h-full w-[60px] flex items-center justify-center">
      
        <span className="text-white font-bold text-xl tracking-widest">AE</span>
      </div>

    
      <div className="flex-1 h-full flex items-center justify-start px-2">
        <div className="text-[11px] text-black font-bold leading-[13px] text-center">
          <div>ADAM</div>
          <div>EXPORTS</div>
        </div>
      </div>
    </div>

      {/* Menu Items */}
      <nav className="space-y-1 mt-5">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100
              ${item.active ? 'bg-purple-100 text-purple-600 font-medium' : 'text-gray-700'}`}
          >
            <i className={`${item.icon} text-lg`}></i>
            <span className="flex-1 text-sm">{item.label}</span>
            {item.hasSub && <i className="ri-arrow-right-s-line text-gray-400 text-sm"></i>}
          </div>
        ))}
      </nav>
    </aside>
    </div>
  )
}

export default Sidebar
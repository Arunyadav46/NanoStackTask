import React, { useState } from 'react'
import { FiMenu, FiBell, FiMessageSquare } from 'react-icons/fi';
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import img from "../../public/portfolio.png"


function Header() {
  const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
      <header className="flex items-center  justify-between p-4 bg-white shadow-md">
      
      
      <div className="flex items-center gap-10">
        <FiMenu className="text-2xl cursor-pointer" />

        <div className="relative ">
          <input
            type="text"
            placeholder="Search anything here..."
            className="pl-10 pr-4 w-[200%] py-3 rounded-xl bg-gray-100 text-sm focus:outline-none"
          />
          <span className="absolute left-3 top-[19%] text-gray-500">
          <i class="text-xl ri-search-line"></i>
          </span>
        </div>
      </div>

     
      <div className="flex items-center gap-6">
        {/* Messages */}
        {/* <div className="relative">
          <FiMessageSquare className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
            10
          </span>
        </div> */}
          {/* <div className="relative">
          <input
            type="text"
            placeholder="Search anything here..."
            className="pl-10 pr-4 w-[200%] py-3 rounded-xl bg-gray-100 text-sm focus:outline-none"
          />
          <span className="absolute left-3 top-[19%] text-gray-500">
            <i className="text-xl ri-search-line"></i>
          </span>
        </div> */}
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-6 relative">
        {/* Messages */}
        <div className="relative">
          <FiMessageSquare
            className="text-2xl cursor-pointer"
            onClick={() => setShowMessages(!showMessages)}
          />
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
            10
          </span>

          {/* Dropdown Popup */}
          {showMessages && (
            <div className="absolute top-10 right-0 w-[400px] bg-white border rounded-lg shadow-lg z-50 p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">Chat</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">5 new</span>
              </div>

              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-start justify-between gap-2 py-2 border-b last:border-none">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="user"
                    className="rounded-full w-8 h-8"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">New Message</p>
                    <p className="text-xs text-gray-500">
                      You have a new messages from <span className="text-blue-500">[user_name]</span>
                    </p>
                    <p className="text-xs text-gray-400">10 mins ago</p>
                  </div>
                  <button className="text-gray-400 text-sm hover:text-red-500">×</button>
                </div>
              ))}

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 mt-4 rounded-md text-sm">
                View All
              </button>
            </div>
          )}
        </div>

        {/* Notifications */}
        {/* <div className="relative">
          <FiBell className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
            10
          </span>
        </div> */}
         <div className="relative">
      {/* Bell Icon */}
      <FiBell
        className="text-2xl cursor-pointer"
        onClick={() => setShowNotifications(!showNotifications)}
      />
      <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1">
        10
      </span>

  
      {showNotifications && (
        <div className="absolute top-10 right-0 w-[420px] bg-white border rounded-lg shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">Notifications</h3>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md">5 new</span>
          </div>

          {/* Notification Items */}
          <div className="flex items-start gap-3 py-3 border-b last:border-none">
            <img
              src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"
              alt="user"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium">Task completed</p>
              <p className="text-gray-500 text-xs">
                <span className="text-blue-500">[task_name]</span> marked as completed..
              </p>
              <p className="text-gray-400 text-xs">10 mins ago</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-sm">×</button>
          </div>

          <div className="flex items-start gap-3 py-3 border-b">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl">📅</div>
            <div className="flex-1 text-sm">
              <p className="font-medium">Meeting Created</p>
              <p className="text-gray-500 text-xs">
                New meeting <span className="text-blue-500">[meeting_title]</span> is created for <span className="text-blue-500">[date_time]</span>
              </p>
              <p className="text-gray-400 text-xs">5 mins ago</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-sm">×</button>
          </div>

          <div className="flex items-start gap-3 py-3 border-b">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl">📅</div>
            <div className="flex-1 text-sm">
              <p className="font-medium">Action Item Added</p>
              <p className="text-gray-500 text-xs">
                <span className="text-blue-500">[action_item_name]</span> is added in meeting <span className="text-blue-500">[meeting_title]</span>
              </p>
              <p className="text-gray-400 text-xs">22 May 2025</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-sm">×</button>
          </div>

          <div className="flex items-start gap-3 py-3 border-b">
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="user"
              className="rounded-full w-8 h-8"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium">Task assigned</p>
              <p className="text-gray-500 text-xs">
                <span className="text-blue-500">[task_name]</span> has been assigned to <span className="text-blue-500">[user_name]</span>.
              </p>
              <p className="text-gray-400 text-xs">2 hours ago</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-sm">×</button>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 mt-4 rounded-md text-sm">
            View All
          </button>
        </div>
      )}
    </div>

        {/* Profile */}
        {/* <div className="flex items-center mx-4 gap-2">
          <img
            src="https://i.pravatar.cc/40" // replace with actual avatar
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-righ text-sm">
            <div className="font-semibold">Mohd Saleem</div>
            <div className="text-gray-500">Admin</div>
          </div>
        </div> */}
          <div className="relative">
      {/* Profile button */}
      <div
        className="flex items-center mx-4 gap-2 cursor-pointer"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      >
        <img
          src={img}
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
        <div className=" text-sm">
          <div className="font-semibold">Arun Yadav</div>
          <div className="text-gray-500">Admin</div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {showProfileMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50">
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FiUser />
              Profile
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FiSettings />
              Settings
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              <FiLogOut />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>
    </header>
  )
}

export default Header
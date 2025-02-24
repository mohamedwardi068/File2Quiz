import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import logo from "../pictures/logo192.png";

function Navbar() {
  const [user, setUser] = useState(null); // Replace with actual auth logic
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-1 shadow-md bg-white">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="flex space-x-4 text-black font-medium">
          <div className="group relative cursor-pointer">
            Upload File 
           
          </div>
          <div className="group relative cursor-pointer">
            Choose File 
            
          </div>
          <div className="group relative cursor-pointer">
            Generate Quiz 
            
          </div>
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-1 focus:outline-none w-48"
        />
        <FaSearch className="absolute right-3 top-2 text-gray-500" />
      </div>

      {/* Right Section: Links and Buttons */}
      <div className="flex items-center space-x-6">
        <div className="flex space-x-4 font-medium">
          <button className="cursor-pointer">Support</button>
          <button className="cursor-pointer">About</button>
          <button className="cursor-pointer">Contact</button>
        </div>

        {/* Authentication Buttons */}
        {user ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2 bg-gray-100 px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-200"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUserCircle className="text-xl" />
              <span>{user.name}</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-100 shadow-md rounded-md w-32">
                <button className="block w-full px-4 py-2 text-left hover:bg-green-500 hover:text-white">Profile</button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => setUser(null)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex font-medium">
            <button className="bg-green-500 text-white px-4 py-1 rounded-l-full">Sign Up</button>
            <button className="bg-gray-100 px-4 py-1 rounded-r-full border-l border-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white">
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

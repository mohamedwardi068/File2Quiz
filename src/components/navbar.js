import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // For smooth animations
import logo from "../pictures/logo192.png";

function Navbar() {
  const [user, setUser] = useState(null); // Replace with actual auth logic
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-3 shadow-md bg-gradient-to-r from-gray-100 via-white to-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-6">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
        <div className="flex space-x-4 text-black font-medium">
          {["Upload File", "Choose File", "Generate Quiz"].map((item, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer px-3 py-1 rounded-lg hover:bg-green-500 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 transition w-48"
        />
        <FaSearch className="absolute right-3 top-2 text-gray-500 cursor-pointer hover:text-green-500 transition" />
      </div>

      {/* Right Section: Links and Buttons */}
      <div className="flex items-center space-x-6">
        <div className="flex space-x-4 font-medium">
          {["Support", "About", "Contact"].map((link, index) => (
            <motion.button
              key={index}
              className="cursor-pointer hover:text-green-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Authentication Buttons */}
        {user ? (
          <div className="relative">
            <motion.button
              className="flex items-center space-x-2 bg-gray-100 px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-200 transition"
              onClick={() => setShowDropdown(!showDropdown)}
              whileHover={{ scale: 1.05 }}
            >
              <FaUserCircle className="text-xl" />
              <span>{user.name}</span>
            </motion.button>
            {showDropdown && (
              <motion.div
                className="absolute right-0 mt-2 bg-gray-100 shadow-md rounded-md w-32"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <button className="block w-full px-4 py-2 text-left hover:bg-green-500 hover:text-white transition">
                  Profile
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200 transition"
                  onClick={() => setUser(null)}
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="flex font-medium">
            <motion.button
              className="bg-green-500 text-white px-4 py-1 rounded-l-full transition hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.button>
            <motion.button
              className="bg-gray-100 px-4 py-1 rounded-r-full border-l border-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
            >
              Log In
            </motion.button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;

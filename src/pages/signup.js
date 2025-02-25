import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../pictures/logo192.png";

function SignUp() {
  const navigate = useNavigate(); // Initialize navigate

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {

    console.log("User signed up:", { name, email, password });
    navigate("/login"); 
  };

  return (
    <motion.div 
      className="flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 h-screen p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="bg-white shadow-lg rounded-2xl overflow-hidden w-full md:w-[850px] flex flex-col md:flex-row relative"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo - Centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
          <motion.img 
            src={logo} 
            alt="Logo"
            className="h-20 w-auto"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        {/* Left Section */}
        <div className="hidden md:flex w-1/2 bg-green-500 text-white p-8 flex-col justify-center rounded-l-2xl">
          <h2 className="text-4xl font-bold mb-4">Join Us Today 🚀</h2>
          <p className="text-lg">Unlock endless possibilities with AI-powered quizzes</p>
          <ul className="mt-4 space-y-2 text-white text-md">
            <li>✔️ Generate quizzes instantly with AI</li>
            <li>✔️ Customize & edit questions</li>
            <li>✔️ Save & share quizzes</li>
            <li>✔️ Track your progress</li>
            <li>✔️ Interactive & engaging learning</li>
          </ul>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-500 mb-2 mt-12">Create Your Account</h2>
          <p className="text-gray-500 text-lg mb-6">Join us and start learning!</p>

          <form className="w-full">
            <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">Full Name</label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">Email Address</label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div className="mb-4 relative" whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-3 top-8 flex items-center cursor-pointer text-gray-500">
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </motion.div>

            <motion.div className="mb-4 relative" whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirm-password">Confirm Password</label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-3 top-8 flex items-center cursor-pointer text-gray-500">
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </motion.div>

            <motion.button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mt-4 transition transform hover:scale-105"
              type="button"
              onClick={handleSignUp} // Handle sign-up
              whileHover={{ scale: 1.05 }}
            >
              SIGN UP
            </motion.button>
          </form>

          <p className="text-gray-600 text-sm mt-4 text-center">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")} 
              className="text-green-500 hover:text-green-700 transition"
            >
              Login
            </button>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SignUp;

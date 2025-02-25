import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../pictures/logo192.png";
import { useNavigate } from "react-router-dom"; 
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      className="flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 h-screen p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-2xl overflow-hidden w-full md:w-[850px] flex flex-col md:flex-row relative"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo - Centered Between Sections */}
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
          <h2 className="text-4xl font-bold mb-4">
            Create AI-Generated Quizzes Instantly <span className="text-yellow-300">💡</span>
          </h2>
          <p className="text-lg">Effortless quiz creation, powered by AI</p>
          <ul className="mt-4 space-y-2 text-white text-md">
            <li>✔️ Upload files & generate quizzes instantly</li>
            <li>✔️ Customize & edit quiz questions</li>
            <li>✔️ Export & share quizzes with ease</li>
            <li>✔️ AI-powered question generation</li>
          </ul>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h2
            className="text-3xl font-bold text-green-500 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome Back
          </motion.h2>
          <p className="text-gray-500 text-lg mb-6">Login to continue</p>

          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-3 top-8 flex items-center cursor-pointer text-gray-500">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <p className="text-right text-gray-600 text-sm">
              <a href="aa" className="hover:text-green-700 transition">Forgot Password?</a>
            </p>

            <motion.button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mt-4 transition transform hover:scale-105"
              type="button"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/")} 
            >
              LOGIN
            </motion.button>
          </form>

          <p className="text-gray-600 text-sm mt-4 text-center">
            New user? <a className="text-green-500 hover:text-green-700 transition" onClick={() => navigate("/signup")}>Sign Up</a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Login;

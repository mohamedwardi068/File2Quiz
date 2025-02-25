import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';



function Footer() {
    return (
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%]">
        <footer className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-[1%] h-52">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">
                FILE2SUIZ - CREATE QUIZZES INSTANTLY
              </h3>
              <p className="text-gray-700 mb-2 text-1xl font-semibold">NEED HELP?</p>
              <p className="text-green-500 mb-4 text-2xl font-bold">(+126) 99-999-999</p>
              <p className="text-gray-700 mb-4">
                123 Knowledge Street, Quiz City, QC 12345
                <br />
                <a href="mailto:support@quizgenerator.com" className="text-black">
                  support@quizgenerator.com
                </a>
              </p>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-2xl bg-gray-200 p-2 rounded-full"><FaTwitter /></a>
                <a href="#" className="text-2xl bg-gray-200 p-2 rounded-full"><FaFacebook /></a>
                <a href="#" className="text-2xl bg-gray-200 p-2 rounded-full"><FaInstagram /></a>
                <a href="#" className="text-2xl bg-gray-200 p-2 rounded-full"><FaYoutube /></a>
                <a href="#" className="text-2xl bg-gray-200 p-2 rounded-full"><FaPinterest /></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">FEATURES</h3>
              <ul>
                <button className="block mt-2">Upload Files</button>
                <button className="block mt-1">Generate Quiz</button>
                <button className="block mt-1">Edit Questions</button>
                <button className="block mt-1">Export Quiz</button>
                <button className="block mt-1">Share with Others</button>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">RESOURCES</h3>
              <ul>
                <button className="block">Help Center</button>
                <button className="block">FAQs</button>
                <button className="block">Contact Support</button>
                <button className="block">Privacy Policy</button>
                <button className="block">Terms of Service</button>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-black">GET STARTED</h3>
              <ul>
                <button className="block">Sign Up</button>
                <button className="block">Log In</button>
                <button className="block">Browse Templates</button>
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-10 text-center">
            <p className="font-bold">SUBSCRIBE FOR UPDATES & NEW FEATURES</p>
            <div className="flex justify-center mt-4">
              <div className="w-1/2 flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border rounded-l-md"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-gray-700 text-sm">&copy; 2024 Quiz Generator. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    );
}

export default Footer;
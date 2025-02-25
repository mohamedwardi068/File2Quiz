import React from "react";
import Select from "react-select";
import { motion } from "framer-motion"; // Importing motion for animations

const options = [
  {
    value: "eng",
    label: "ENG",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
  {
    value: "FRA",
    label: "FRA",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png",
  },
];

const customSingleValue = ({ data }) => (
  <div className="flex items-center">
    {data.icon && (
      <img src={data.icon} alt="" className="w-4 h-4 rounded-full mr-1" />
    )}
    <span className="text-sm">{data.label}</span>
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "30px",
    height: "30px",
    fontSize: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxShadow: "none",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      border: "1px solid #555",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),
  input: (provided) => ({
    ...provided,
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "30px",
  }),
};

function Header() {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hotline Section */}
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <motion.span
          className="text-black bg-gray-300 text-sm rounded-lg px-3 py-1"
          whileHover={{ scale: 1.1 }}
        >
          Hotline 24/7
        </motion.span>
        <span className="ml-3 font-bold text-gray-900 text-sm">
          (+126) 99-999-999
        </span>
      </div>

      {/* Navigation & Language Selector */}
      <div className="flex flex-col md:flex-row items-center">
        <motion.a
          href="aaa"
          className="ml-0 md:ml-4 text-black text-sm font-medium transition-all hover:text-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Start Quiz
        </motion.a>

        <motion.a
          href="aaa"
          className="ml-0 md:ml-4 text-black text-sm font-medium transition-all hover:text-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Support
        </motion.a>

        {/* Language Selector */}
        <motion.div
          className="ml-0 md:ml-4 mt-2 md:mt-0 w-20 h-8"
          whileHover={{ scale: 1.05 }}
        >
          <Select
            styles={customStyles}
            options={options}
            components={{ SingleValue: customSingleValue }}
            defaultValue={options[0]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Header;

import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'eng', label: 'ENG', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
  { value: 'FRA', label: 'FRA', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png' },
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
    minHeight: '30px',
    height: '30px',
    fontSize: '12px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '30px',
    padding: '0 6px'
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '30px',
  }),
};

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white">
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <span className="text-black bg-gray-300 text-sm rounded-lg pl-3 pr-2 pt-1 pb-1">Hotline 24/7</span>
        <span className="ml-3  md:ml-3 font-bold text-gray-900 text-sm">(+126) 99-999-999</span>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <a   href="aaa" className="ml-0 md:ml-4 200 text-black text-sm font-medium">Start Quiz</a>
        <a  href="aaa" className="ml-0 md:ml-4 hover:underline text-black text-sm font-medium">Support</a>
        
        <div className="ml-0 md:ml-4 mt-2 md:mt-0 w-20 h-8">
          <Select
            styles={customStyles}
            options={options}
            components={{ SingleValue: customSingleValue }}
            defaultValue={options[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

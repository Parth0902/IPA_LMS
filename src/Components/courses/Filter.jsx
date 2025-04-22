import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterGroup = ({ title, options, filterName, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onFilterChange(filterName, event.target.value);
  };

  return (
    <div className="w-full">
      <button
        className="w-full text-left font-semibold text-gray-800 text-sm mb-2"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <div className="space-y-2 pl-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name={filterName}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterName: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


export default FilterGroup;

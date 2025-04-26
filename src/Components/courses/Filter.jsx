import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterGroup = ({ title, options, filterName, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('all');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onFilterChange(filterName, event.target.value);
  };

  return (
    <div className="w-full px-6">
      <button
        className="flex justify-between w-full font-semibold text-gray-800 text-sm mb-2"
        onClick={toggleDropdown}
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="space-y-2 pl-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name={filterName}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              {option.label}
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

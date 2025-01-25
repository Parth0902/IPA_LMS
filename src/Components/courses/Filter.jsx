import React, { useState } from 'react';

const FilterGroup = ({ title, options, filterName, onFilterChange }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all'); // Default to "all"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onFilterChange(filterName, event.target.value); // Notify parent component
  };

  return (
    <div className="filter-group">
      <button className="filter-button" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="">
          {options.map((option) => (
            <div className='flex-col'>
              <label key={option.value}>
                <input
                  type="radio"
                  name={filterName}
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterGroup

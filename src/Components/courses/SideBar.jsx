import React from 'react';
import FilterGroup from './Filter';

const SideBar = () => {
  return (
    <div className="flex flex-col w-64 gap-6 px-6 pt-6 border-r border-gray-200 bg-white">
      <FilterGroup
        title="Topics"
        options={[
          { value: 'all', label: 'All' },
          { value: 'topic1', label: 'Topic 1' },
          { value: 'topic2', label: 'Topic 2' },
        ]}
        filterName="topic"
        onFilterChange={() => {}}
      />
      <FilterGroup
        title="Ratings"
        options={[
          { value: 'all', label: 'All' },
          { value: 'high', label: '4 stars & up' },
          { value: 'low', label: 'Below 4 stars' },
        ]}
        filterName="rating"
        onFilterChange={() => {}}
      />
      <FilterGroup
        title="Video Duration"
        options={[
          { value: 'all', label: 'All' },
          { value: 'short', label: '< 30 mins' },
          { value: 'medium', label: '30-60 mins' },
          { value: 'long', label: '> 60 mins' },
        ]}
        filterName="duration"
        onFilterChange={() => {}}
      />
      <FilterGroup
        title="Price"
        options={[
          { value: 'all', label: 'All' },
          { value: 'free', label: 'Free' },
          { value: 'paid', label: 'Paid' },
        ]}
        filterName="price"
        onFilterChange={() => {}}
      />
    </div>
  );
};

export default SideBar;

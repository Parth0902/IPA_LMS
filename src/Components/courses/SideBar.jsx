import React from 'react';
import FilterGroup from './Filter';
import { Search} from 'lucide-react';

const SideBar = ({setShowSideBar,flag}) => {
  return (
    <div className="flex flex-col w-[250px] gap-6 pt-6 border-r border-gray-200 bg-white">
      <button className="flex items-center px-6 cursor-pointer" onClick={() => setShowSideBar(!flag)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel-plus-icon lucide-funnel-plus"><path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"/><path d="M16 6h6"/><path d="M19 3v6"/></svg>
        <h2 className="text-lg font-semibold text-gray-800 px-2">Filters</h2>
      </button>
      

      <div className="flex items-center px-4 justify-center gap-2">
        <div className="flex w-full border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-gray-400 justify-center items-center px-2 bg-gray-100 ">
          <Search />
          <input
            type="text"
            className="flex-grow bg-gray-100 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
            placeholder="Search Courses"
          />
        </div>
      </div>

      <div className='border-b border-gray-200 '></div>
      <FilterGroup
        title="Topics"
        options={[
          { value: 'all', label: 'All' },
          { value: 'topic1', label: 'Topic 1' },
          { value: 'topic2', label: 'Topic 2' },
        ]}
        filterName="topic"
        onFilterChange={() => { }}
      />

      <div className='border-b border-gray-200 '></div>
      <FilterGroup
        title="Ratings"
        options={[
          { value: 'all', label: 'All' },
          { value: 'high', label: '4 stars & up' },
          { value: 'low', label: 'Below 4 stars' },
        ]}
        filterName="rating"
        onFilterChange={() => { }}
      />
      <div className='border-b border-gray-200 '></div>
      <FilterGroup
        title="Video Duration"
        options={[
          { value: 'all', label: 'All' },
          { value: 'short', label: '< 30 mins' },
          { value: 'medium', label: '30-60 mins' },
          { value: 'long', label: '> 60 mins' },
        ]}
        filterName="duration"
        onFilterChange={() => { }}
      />
      <div className='border-b border-gray-200 '></div>
      <FilterGroup
        title="Price"
        options={[
          { value: 'all', label: 'All' },
          { value: 'free', label: 'Free' },
          { value: 'paid', label: 'Paid' },
        ]}
        filterName="price"
        onFilterChange={() => { }}
      />
      <div className='border-b border-gray-200 '></div>
    </div>

  );
};

export default SideBar;

import React, { useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react';
import FilterGroup from './Filter';

const SideBar = () => {
  return (
    <div className='flex flex-col xl:w-2/12 gap-10 px-5 py-10' style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>

      <div className='text-[20px]'>
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
      </div>

      <div className='text-[20px]'>
        <FilterGroup
          title="Ratings"
          options={[
            { value: 'all', label: 'All' },
            { value: 'topic1', label: 'Topic 1' },
            { value: 'topic2', label: 'Topic 2' },
          ]}
          filterName="topic"
          onFilterChange={() => { }}
        />
      </div>

      <div className='text-[20px] text-left '>
        <FilterGroup
          title="Video Duration"
          options={[
            { value: 'all', label: 'All' },
            { value: '', label: 'Topic 1' },
            { value: 'topic2', label: 'Topic 2' },
          ]}
          filterName="topic"
          onFilterChange={() => { }}
        />
      </div>

      <div className='text-[20px]'>
        <FilterGroup
          title="Price"
          options={[
            { value: 'all', label: 'All' },
            { value: 'topic1', label: 'Topic 1' },
            { value: 'topic2', label: 'Topic 2' },
          ]}
          filterName="topic"
          onFilterChange={() => { }}
        />
      </div>

    </div>
  )
}

export default SideBar

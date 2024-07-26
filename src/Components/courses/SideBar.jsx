import React,{useState} from 'react'
import { SlidersHorizontal, X  } from 'lucide-react';

const SideBar = () => {
  return (
    <div className='flex flex-col xl:w-2/12 gap-10 px-5 py-10' style={{boxShadow:"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
  
      <div>
        <h2 className='text-[20px]'>Topics</h2>
      </div>

      <div>
        <h2 className='text-[20px]'>Ratings</h2>
      </div>

      <div>
        <h2 className='text-[20px]'>Video Duration</h2>
      </div>

      <div>
        <h2 className='text-[20px]'>Price</h2>
      </div>
    </div>
  )
}

export default SideBar

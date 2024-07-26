import React,{useState} from 'react'
import SideBar from '../Components/courses/SideBar'
import Page from '../Components/courses/Page'
import { SlidersHorizontal, X  } from 'lucide-react';

const Courses = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className='flex flex-col mt-24'>
        <div className='flex w-full px-10'>
          <div className='w-2/12'>
            <button className='px-5 py-1 border flex justify-center items-center mt-5 gap-5' onClick={()=>setShowSideBar(!showSideBar)}>
              <h2 className='text-center font-Roboto text-[24px]'>Filters</h2>
              <SlidersHorizontal />
            </button>
          </div>

          <div className='flex w-full justify-center items-center'>
            <input type="input" className='border px-10 h-[50px]' placeholder='Search Videos' />
          </div>
        </div>
        <div className='flex justify-center '>
            {
                showSideBar && 
                <SideBar  setShowSideBar={setShowSideBar} />
            }
            <Page />
        </div>
    </div>
  )
}

export default Courses

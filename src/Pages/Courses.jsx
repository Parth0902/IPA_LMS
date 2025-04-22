import React, { useState } from 'react';
import SideBar from '../Components/courses/SideBar';
import Page from '../Components/courses/Page';
import { SlidersHorizontal } from 'lucide-react';

const Courses = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="flex flex-col mt-24 font-sans ">
      <div className="flex w-full px-10 mb-6 pt-5 flex-wrap">
        <div className='w-1/5 flex justify-start'>
          <button
            className="px-5 py-2 border border-gray-300 shadow-md rounded-lg flex items-center gap-3 hover:bg-gray-100 transition "
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <h2 className="text-lg font-semibold">Filters</h2>
            <SlidersHorizontal />
          </button>

        </div>

        <div className="w-4/5 flex-1 flex justify-center ">
          <div className="flex items-center justify-center w-full max-w-2xl mx-auto border border-gray-300  bg-white rounded">
            <input
              type="text"
              className="flex-grow border-none px-6 py-3 focus:outline-none text-sm text-gray-700"
              placeholder="Search Courses"
            />

            <button className="flex items-center bg-gray-800 hover:bg-gray-900 text-white  ml-2 transition h-full px-4 rounded">
              <span className="text-sm font-semibold">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="flex bg-slate-50">
        {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}
        <div className="flex-grow ml-6">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Courses;

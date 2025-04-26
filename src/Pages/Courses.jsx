import React, { useState } from 'react';
import SideBar from '../Components/courses/SideBar';
import Page from '../Components/courses/Page';


const Courses = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [courses, setCourses] = useState([]);

  return (
    <div className="flex flex-col mt-24 font-sans relative">
      {
        !showSideBar &&
        <button className="flex items-center  cursor-pointer absolute top-5 left-2 border border-gray-300 py-2 rounded-lg px-3 " onClick={() => setShowSideBar(!showSideBar)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel-plus-icon lucide-funnel-plus"><path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" /><path d="M16 6h6" /><path d="M19 3v6" /></svg>
          <h2 className="text-lg font-semibold text-gray-800 px-2">Filters</h2>
        </button>
      }

      <div className="flex bg-slate-50">
        {showSideBar && <SideBar setShowSideBar={setShowSideBar} flag={showSideBar} />}
        <div className="flex-grow">
          <Page courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default Courses;

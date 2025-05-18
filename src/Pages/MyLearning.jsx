import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SideBar from '../Components/courses/SideBar';
import Page from '../Components/courses/Page';
import { useApi } from '../hooks/useApi';
import { useAuth } from '../Context/AuthContext';

const MyLearing = () => {
  const { token } = useAuth();
  const [showSideBar, setShowSideBar] = useState(true);
  const apiService = useApi();

  const {
    data: courseDataRaw,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['courseData'],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: `/myCourses`,
        token,
      });
      console.log("My Courses Response:", response);
      return response;
    },
    enabled: !!token,
  });

  // Safely ensure we only pass an array to Page
  const courses = Array.isArray(courseDataRaw) ? courseDataRaw : [];

  return (
    <div className="flex flex-col mt-20 font-sans relative">
      {!showSideBar && (
        <button
          className="flex items-center cursor-pointer absolute top-5 left-2 border border-gray-300 py-2 rounded-lg px-3"
          onClick={() => setShowSideBar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel-plus"
          >
            <path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" />
            <path d="M16 6h6" />
            <path d="M19 3v6" />
          </svg>
          <h2 className="text-lg font-semibold text-gray-800 px-2">Filters</h2>
        </button>
      )}

      <div className="flex bg-slate-50">
        {showSideBar && <SideBar setShowSideBar={setShowSideBar} flag={showSideBar} />}
        <div className="flex-grow">
          {(() => {
            if (isLoading) {
              return (
                <div className="flex justify-center items-center h-[60vh] text-gray-700 text-xl">
                  Loading courses...
                </div>
              );
            } else if (isError) {
              return (
                <div className="flex justify-center items-center h-[60vh] text-red-500 text-xl">
                  Failed to load courses
                </div>
              );
            } else if (courses.length === 0) {
              return (
                <div className="flex justify-center items-center h-[60vh] text-gray-600 text-lg">
                  No courses found.
                </div>
              );
            } else {
              return <Page courses={courses} courseDestination="myCourse" />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default MyLearing;

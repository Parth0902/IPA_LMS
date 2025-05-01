import React, { useState, useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import SideBar from '../Components/courses/SideBar';
import Page from '../Components/courses/Page';
import { useApi } from '../hooks/useApi'; // Adjust if needed



const fetchCourses = async ({ pageParam = 1,apiService}) => {
  
  const result = await apiService({
    method: 'GET',
    endpoint: `/getCourses/${pageParam}`,

  });

  if (!result) {
    throw new Error('Failed to fetch courses');
  }
  return result;
};

const Courses = () => {

  const [showSideBar, setShowSideBar] = useState(true);
  const apiService =useApi()
  // Get the token from context
  const loadMoreRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['courses'],
    queryFn: ({ pageParam = 1 }) => fetchCourses({ pageParam ,apiService}),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  // Intersection Observer to trigger load more when scrolled to bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  // Combine all pages into a single array
  const allCourses = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="flex flex-col mt-24 font-sans relative">
      {!showSideBar && (
        <button
          className="flex items-center cursor-pointer absolute top-5 left-2 border border-gray-300 py-2 rounded-lg px-3"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel-plus-icon lucide-funnel-plus">
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
          {isLoading ? (
            <div className="flex justify-center items-center h-[60vh] text-gray-700 text-xl">Loading courses...</div>
          ) : isError ? (
            <div className="flex justify-center items-center h-[60vh] text-red-500 text-xl">Failed to load courses</div>
          ) : (
            <>
              <Page 
              courses={allCourses}
              courseDestination={"course"}
              />
              <div ref={loadMoreRef} className="flex justify-center py-8">
                {isFetchingNextPage ? (
                  <span className="text-gray-600 text-sm">Loading more...</span>
                ) : !hasNextPage ? (
                  <span className="text-gray-400 text-sm">No more courses</span>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

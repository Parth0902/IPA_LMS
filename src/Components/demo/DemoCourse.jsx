import React from 'react';
import VideoPlayer from '../Video/VideoPlayer';
import VideoSideBar from '../Video/VideoSideBar';

const DemoCourse = () => {
  const data = [
    "Diabetic Neuropathy and foot ",

  ];

  return (
    <div className="flex justify-center px-5 py-28 gap-5">
      <div className="w-8/12">
        {/* Ensure that both VideoPlayer and VideoSideBar share the same height */}
        <div className="h-[560px]">
          <VideoPlayer />
        </div>
      </div>

      <div className="w-4/12">
        {/* Make the sidebar scrollable with the same height as the video player */}
        <div className="h-[560px] overflow-y-auto border ">
          <VideoSideBar ChapterData={data} />
        </div>
      </div>
    </div>
  );
};

export default DemoCourse;

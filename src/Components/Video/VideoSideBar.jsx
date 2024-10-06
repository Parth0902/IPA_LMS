import { React } from "react";

const VideoSideBar = ({ ChapterData }) => {
  return (
    <div className="flex flex-col gap-2 py-2 px-2 h-full"> {/* Full height */}
      {ChapterData.map((chapter, index) => (
        <div key={index} className="flex justify-center py-4 border cursor-pointer">
          <h4 className="text-center font-popins font-medium">{chapter}</h4>
        </div>
      ))}
    </div>
  );
};

export default VideoSideBar;

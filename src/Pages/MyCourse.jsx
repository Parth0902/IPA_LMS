import React, { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useAuth } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

export default function CoursePlayer() {

  const [activeChapter, setActiveChapter] = useState(0);
  const [activeVideo, setActiveVideo] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");


  const { token } = useAuth();
  const { courseId } = useParams();
  const apiService =useApi();
  const { data: courseData } = useQuery({
    queryKey: ['courseData'],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: `/getCourseData/${courseId}`,
        token
      });
      return response;
    },
    enabled: !!token,
  });

  const selectVideo = async (chapterIndex, videoId) => {
    setActiveChapter(chapterIndex);
    setActiveVideo(videoId);

    const response = await apiService({
      method: 'GET',
      endpoint: `/iframe/${videoId}`,
      token,
    });

    setIframeUrl(response.iframeUrl);
  };

  if (!courseData) {
    return <div>Loading Course...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100 mt-24">
      {/* Video Player Section */}
      <div className="w-2/3 flex flex-col p-6 aspect-video">
        <div className="relative h-3/4 bg-black">
          {iframeUrl ? (
            <iframe
              title="Video"
              src={iframeUrl}
              className="w-full h-full"
              allow="autoplay fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              Loading video...
            </div>
          )}
        </div>

        {/* Video Description */}
        <div className="p-6 bg-white flex-grow">
          <h2 className="text-2xl font-bold mb-2">
            {courseData.chapters[activeChapter]?.Videos.find(v => v.videoId === activeVideo)?.videoName || "Video Title"}
          </h2>
          <p className="text-gray-600 mb-4">
            {courseData.chapters[activeChapter]?.Videos.find(v => v.videoId === activeVideo)?.videoDescription || "Video description will appear here"}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-4">
              Duration: {courseData.chapters[activeChapter]?.Videos.find(v => v.videoId === activeVideo)?.videoDuration || "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="w-1/3 bg-white overflow-y-auto border-l border-gray-200">
        <div className="p-4 border-b border-gray-200 top-0 bg-white z-10">
          <h2 className="text-xl font-bold">Course Content</h2>
          <p className="text-sm text-gray-500">
            {courseData.courseData.Features.chapters} chapters • {courseData.courseData.Features.quizes} quizzes • {courseData.courseData.Features.watchTime} hours total
          </p>
        </div>

        {/* Course Modules Accordion */}
        <div className="pb-16">
          {courseData.chapters.map((chapter, chapterIndex) => (
            <div key={chapter._id}>
              <Accordion
                disableGutters
                elevation={0}
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<span className="text-gray-500">▼</span>}
                  aria-controls={`panel${chapterIndex}-content`}
                  id={`panel${chapterIndex}-header`}
                  sx={{
                    padding: '16px',
                    borderBottom: '1px solid #eee',
                    '&:hover': { backgroundColor: '#f9fafb' },
                  }}
                >
                  <div className="w-full">
                    <h3 className="font-semibold">{chapter.ModuleName}</h3>
                    <p className="text-sm text-gray-500">{chapter.ModuleDuration}</p>
                  </div>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: 0 }}>
                  {chapter.Videos.map((video) => (
                    <button
                      key={video.videoId}
                      className={`flex items-center p-3 mx-2 my-1 rounded cursor-pointer ${activeVideo === video.videoId ? 'bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                      onClick={() => selectVideo(chapterIndex, video.videoId)}
                    >
                      <div className="mr-3">
                        <CheckCircle size={18} className="text-green-500" />
                      </div>
                      <div className="flex-grow text-left">
                        <p className={`${activeVideo === video.videoId ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>
                          {video.videoName}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Play size={12} className="mr-1" />
                          <span>{video.videoDuration}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                  {chapter.quizes?.map((quiz) => (
                    <a
                      key={quiz.quizId}
                      href={quiz.quizLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 mx-2 my-1 rounded hover:bg-gray-50 border-t border-gray-100"
                    >
                      <div className="mr-3">
                        📝
                      </div>
                      <div className="flex-grow text-left">
                        <p className="text-gray-800 font-medium">{quiz.quizName}</p>
                        <div className="text-xs text-gray-500">{quiz.quizDuration}</div>
                      </div>
                    </a>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

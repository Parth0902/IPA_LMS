import React, { useState, useEffect } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useAuth } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import GiveReview from '../Components/course/GiveReview';

export default function CoursePlayer() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeVideo, setActiveVideo] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');
  const { token } = useAuth();
  const { courseId } = useParams();
  const apiService = useApi();

  console.log('courseId:', courseId, 'type:', typeof courseId);


  const {
    data: courseData,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['courseData'],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: `/getVideos/${courseId}`,
        token,
      });
      return response;
    },
    enabled: !!token,
  });

  useEffect(() => {
    if (token) refetch();
  }, [token, refetch]);

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

  if (!courseData || isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg font-semibold">Loading Course...</span>
      </div>
    );
  }

  const features = courseData.courseData?.Features || {};
  const currentVideo =
    courseData.chapters[activeChapter]?.Videos.find(
      (v) => v.videoId === activeVideo
    ) || {};

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col lg:flex-row min-h-screen mt-24 ">
        {/* Video Player */}
        <div className="lg:w-2/3 w-full px-6 pb-6">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow">
            {iframeUrl ? (
              <iframe
                title="Course Video"
                src={iframeUrl}
                className="w-full h-full"
                allow="autoplay fullscreen"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                Loading video...
              </div>
            )}
          </div>

          {/* Video Details */}
          <div className="mt-4 bg-white rounded-lg shadow">
            {/* Tab Headers */}
            <div className="border-b px-6 pt-4 flex gap-6">
              {['Overview', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium border-b-2 transition-all ${activeTab === tab
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'Overview' && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {currentVideo.videoName || 'Video Title'}
                  </h2>
                  <p className="text-gray-700 mb-3">
                    {currentVideo.videoDescription || 'Video description will appear here.'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duration: {currentVideo.videoDuration || 'N/A'}
                  </p>
                </div>
              )}

              {activeTab === 'Reviews' && (
                <GiveReview courseId={courseId} token={token} />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Course Content */}
        <aside className="lg:w-1/3 w-full bg-white border-l px-6 rounded-lg sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto mb-6">
          <div className="sticky top-0 py-6 bg-white z-10 border-b">
            <h2 className="text-xl font-bold">Course Content</h2>
            <p className="text-sm text-gray-500">
              {features.chapters} chapters • {features.quizes} quizzes •{' '}
              {features.watchTime} hours total
            </p>
          </div>

          <div className="space-y-4">
            {courseData.chapters.map((chapter, chapterIndex) => (
              <Accordion
                key={chapter._id}
                disableGutters
                elevation={0}
                sx={{
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<span className="text-gray-500">▼</span>}
                  aria-controls={`panel${chapterIndex}-content`}
                  id={`panel${chapterIndex}-header`}
                  sx={{
                    padding: '12px 16px',
                    borderBottom: '1px solid #eee',
                    '&:hover': { backgroundColor: '#f9fafb' },
                  }}
                >
                  <div>
                    <h3 className="font-semibold">{chapter.ModuleName}</h3>
                    <p className="text-xs text-gray-500">{chapter.ModuleDuration}</p>
                  </div>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: 0 }}>
                  {chapter.Videos.map((video) => (
                    <button
                      key={video.videoId}
                      onClick={() => selectVideo(chapterIndex, video.videoId)}
                      className={`w-full text-left flex items-start gap-3 p-3 mx-2 my-1 rounded-md transition ${activeVideo === video.videoId
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                        }`}
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-500 mt-1 shrink-0"
                      />
                      <div className="flex flex-col text-sm">
                        <span>{video.videoName}</span>
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
                      className="flex items-start p-3 mx-2 my-1 rounded-md border-t border-gray-100 hover:bg-gray-50"
                    >
                      <span className="mr-3">📝</span>
                      <div className="text-sm">
                        <p className="font-medium text-gray-800">{quiz.quizName}</p>
                        <p className="text-xs text-gray-500">{quiz.quizDuration}</p>
                      </div>
                    </a>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </aside>
      </div>

    </div>
  );
}

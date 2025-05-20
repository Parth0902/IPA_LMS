import React, { useState, useEffect } from 'react';
import { Play, VideoIcon } from 'lucide-react';
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
import { toast } from 'react-toastify';

export default function CoursePlayer() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeVideo, setActiveVideo] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');
  const [doubt, setDoubt] = useState('');
  const { token } = useAuth();
  const { courseId } = useParams();
  const apiService = useApi();

  const {
    data: courseData,
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
    if (courseData) {
      const firstChapter = courseData?.chapters?.[0];
      const firstVideo = firstChapter?.Videos?.[0];

      if (firstChapter && firstVideo) {
        selectVideo(0, firstVideo.videoId);
      }
    }
  }, [courseData]);

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
        <span className="text-xl font-semibold">Loading Course...</span>
      </div>
    );
  }

  const currentVideo =
    courseData.chapters[activeChapter]?.Videos.find(
      (v) => v.videoId === activeVideo
    ) || {};

  const handleDoubtSubmit = () => {
    if (!doubt) {
      toast.error('Please enter a doubt before submitting.');
      return;
    }
    toast.success('Doubt submitted successfully!');
    setDoubt('');
  }

  return (
    <div className="flex flex-col bg-gray-100 text-lg">
      <div className="flex flex-col lg:flex-row mt-24">
        {/* Video Player */}
        <div className="lg:w-2/3 px-6 pb-6">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow">
            {iframeUrl ? (
              <iframe
                title="Course Video"
                src={iframeUrl}
                className="w-full h-full rounded-xl"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                loading="lazy"
              />
            ) : (
              <video
                src="https://IPA-Images.b-cdn.net/FDFM%20Load%20Screen.mp4"
                className='w-full h-full object-cover'
                autoPlay
                loop
                muted
              ></video>
            )}
          </div>
        </div>

        {/* Sidebar Course Content */}
        <aside className="lg:w-1/3 bg-white border-l mx-6 rounded-lg overflow-y-auto mb-6">
          <div className="border-b px-6 pt-4 flex gap-6">
            {['Overview', 'Reviews', 'Doubts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-base font-medium border-b-2 transition-all ${activeTab === tab
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'Overview' && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {currentVideo.videoName || 'Video Title'}
                </h2>
                <p className="text-lg text-gray-700 mb-3">
                  {currentVideo.videoDescription?.split('•')
                    .filter(point => point.trim() !== '')
                    .map((point, index) => (
                      <li key={index} className='text-[18px] text-gray-800 leading-relaxed'>
                        {point.trim()}
                      </li>
                    )) || 'Video description will appear here.'}
                </p>
                <p className="text-base text-gray-500">
                  Duration: {currentVideo.videoDuration || 'N/A'}
                </p>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <GiveReview courseId={courseId} token={token} />
            )}

            {activeTab === 'Doubts' && (
              <div className='flex flex-col gap-4'>
                <textarea
                  className="border rounded-lg p-3 text-base"
                  rows="4"
                  placeholder="Ask your doubt here..."
                  onChange={(e) => setDoubt(e.target.value)}
                  value={doubt}
                ></textarea>
                <button onClick={handleDoubtSubmit} className="bg-black text-white py-2 px-5 text-base rounded-lg">
                  Submit
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>
      <div className="mt-4 bg-white shadow m-6 p-6 rounded-lg">
        <div className="sticky top-0 py-6 bg-white z-10 border-b">
          <h2 className="text-2xl font-bold">Modules of FDFM</h2>
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
                expandIcon={<span className="text-black">▼</span>}
                aria-controls={`panel${chapterIndex}-content`}
                id={`panel${chapterIndex}-header`}
                sx={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #eee',
                  '&:hover': { backgroundColor: '#f9fafb' },
                }}
              >
                <div>
                  <h3 className="font-semibold text-lg">{chapter.ModuleName}</h3>
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
                    <VideoIcon
                      size={18}
                      className="text-slate-500 mt-1 shrink-0"
                    />
                    <div className="flex flex-col text-base">
                      <span>{video.videoName}</span>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                    <div className="text-base">
                      <p className="font-medium text-gray-800">{quiz.quizName}</p>
                    </div>
                  </a>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

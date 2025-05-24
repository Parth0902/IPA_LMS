import React, { useState, useEffect } from 'react';
import { Play, VideoIcon, CircleCheckBig } from 'lucide-react';
import { Accordion, AccordionDetails } from '@mui/material';
import { useAuth } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import GiveReview from '../Components/course/GiveReview';
import { toast } from 'react-toastify';
import { loadPlayerScript } from '../util';
export default function CoursePlayer() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
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
    queryKey: ['courseData', courseId],
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

  const { data: progress, refetch } = useQuery({
    queryKey: ['progress', courseId],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: `/getProgress/${courseId}`,
        token,
      });
      return response;
    },
    enabled: !!token,
    retry: false,
  });
  // progess:  {
  //     "courseId": "682c5e009a8550f41493cb6e",
  //     "completed": false,
  //     "moduleProgress": [
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b2da0fa5f8d96466d588",
  //             "moduleName": "1. Diabetic Foot as a Global Challenge – Anatomy, Pathophysiology, and Course Overview",
  //             "completed": false,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "354526dc-1782-4a53-9b02-1dc3cfd9471e",
  //                     "completed": true
  //                 },
  //                 {
  //                     "videoId": "7ee2f9b6-f29e-4ee0-9b0a-8a134dc69a98",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "85ff8a52-398a-4a4d-b3f8-6fd5d6168c88",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "6bb234f2-a6e0-4b53-a334-c014278e05a5",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "09423363-1693-448b-8a16-8ec739065064",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "3bcaffbb-2459-4380-bdc0-218d0f2d61df",
  //                     "completed": false
  //                 }
  //             ]
  //         },
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b2ee0fa5f8d96466d589",
  //             "moduleName": "2. Diabetic Foot Evaluation and Biomechanics Assessment.",
  //             "completed": false,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "42a009f3-13b6-4eaf-aa01-0818725b8e43",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "d53dc5e7-4243-49cc-9181-e10803623d2d",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "7ce126e1-79e3-4377-bd35-24bbc525793e",
  //                     "completed": false
  //                 },
  //                 {
  //                     "videoId": "706e7e9b-6512-4433-a3a4-8e541b858fae",
  //                     "completed": false
  //                 }
  //             ]
  //         },
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b2ff0fa5f8d96466d58a",
  //             "moduleName": "3. Wound Healing and Systemic Control in Diabetic Foot",
  //             "completed": true,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "569d3f0a-3617-425e-b398-9f0a4a95086b",
  //                     "completed": true
  //                 }
  //             ]
  //         },
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b3110fa5f8d96466d58b",
  //             "moduleName": "4. Advanced Interventions in Diabetic Foot Care",
  //             "completed": true,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "10372b43-0ed7-4b27-81cb-39caf8ced774",
  //                     "completed": true
  //                 }
  //             ]
  //         },
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b39a0fa5f8d96466d58d",
  //             "moduleName": "5. Advanced Surgical and Vascular Innovations in Diabetic Foot",
  //             "completed": true,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "6c51499f-64a5-4818-bd16-715e362f9e2c",
  //                     "completed": true
  //                 }
  //             ]
  //         },
  //         {
  //             "courseId": "682c5e009a8550f41493cb6e",
  //             "moduleId": "6823b3a50fa5f8d96466d58e",
  //             "moduleName": "6. Structural Disorders of the Diabetic Foot",
  //             "completed": false,
  //             "videoProgress": [
  //                 {
  //                     "videoId": "80771159-85cc-44ce-ba37-85fe67a8e285",
  //                     "completed": false
  //                 }
  //             ]
  //         }
  //     ]
  // }

  //

  //

  useEffect(() => {
    if (courseData && courseData.chapters?.length > 0) {
      const currentModule = courseData.chapters[activeModuleIndex];
      const firstVideo = currentModule?.Videos?.[0];

      if (firstVideo) {
        selectVideo(firstVideo.videoId);
      }
    }
  }, [courseData, activeModuleIndex]);

  useEffect(() => {
    loadPlayerScript()
      .then(() => {
        const player = new window.playerjs.Player('bunny-stream-embed');

        player.on('ready', () => {
          console.log('Player is ready');

          player.on('ended', () => {
            console.log('Video has ended');
            markVideoComplete();
          });
        });
      })
      .catch((error) => {
        console.error('Failed to load Player.js:', error);
      });
  }, [iframeUrl]);

  const selectVideo = async (videoId) => {
    setActiveVideo(videoId);
    setIframeUrl('');
    const response = await apiService({
      method: 'GET',
      endpoint: `/iframe/${videoId}`,
      token,
    });
    setIframeUrl(response.iframeUrl);
  };

  const markVideoComplete = async () => {
    let payload = {
      courseId: courseId,
      moduleId: courseData.chapters[activeModuleIndex]._id,
      videoId: activeVideo,
    };
    console.log('Payload:', payload);
    await apiService({
      method: 'POST',
      endpoint: `/updateProgress`,
      data: payload,
      token,
    });
    refetch();
  };

  const isCurrentModuleCompleted = () => {
    const module = progress?.moduleProgress?.[activeModuleIndex];
    if (!module) return false;
    return module.videoProgress.every((v) => v.completed);
  };


  if (!courseData || isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl font-semibold">Loading Course...</span>
      </div>
    );
  }

  const currentVideo = courseData.chapters[activeModuleIndex]?.Videos.find(
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
                id="bunny-stream-embed"
                key={iframeUrl}
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
                <ul className="text-lg text-gray-700 mb-3 list-disc pl-5">
                  {currentVideo.videoDescription?.split('•')
                    .filter((point) => point.trim() !== '')
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
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

      {/* Course Modules */}
      <div className="mt-4 bg-white shadow m-6 p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {courseData.chapters[activeModuleIndex]?.ModuleName}
          </h2>
          <div className="flex flex-row gap-4">
            {activeModuleIndex > 0 && (
              <button
                onClick={() => setActiveModuleIndex((prev) => prev - 1)}
                className="truncate bg-black text-white py-2 px-5 rounded-md text-base"
              >
                ← Previous Module
              </button>
            )}

            {activeModuleIndex < courseData.chapters.length - 1 && (
              <button
                onClick={() => setActiveModuleIndex((prev) => prev + 1)}
                className={`truncate py-2 px-5 rounded-md text-base ${isCurrentModuleCompleted()
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                disabled={!isCurrentModuleCompleted()}
              >
                Next Module →
              </button>
            )}

          </div>
        </div>

        <div className="space-y-4">
          <Accordion
            key={courseData.chapters[activeModuleIndex]._id}
            defaultExpanded
            disableGutters
            elevation={0}
            sx={{
              boxShadow: 'none',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionDetails sx={{ padding: 0 }}>
              {courseData.chapters[activeModuleIndex].Videos.map((video) => (
                <button
                  key={video.videoId}
                  onClick={() =>
                    selectVideo(video.videoId)
                  }
                  className={`w-full text-left flex items-start gap-3 p-3 mx-2 my-1 rounded-md transition ${activeVideo === video.videoId
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'hover:bg-gray-50 text-gray-700'
                    }`}
                >
                  {progress?.moduleProgress[activeModuleIndex]?.videoProgress?.find(
                    (v) => v.videoId === video.videoId
                  )?.completed ? (
                    <CircleCheckBig
                      size={18}
                      className="text-green-500 mt-1 shrink-0"
                    />
                  ) : (
                    <VideoIcon
                      size={18}
                      className="text-slate-500 mt-1 shrink-0"
                    />
                  )}

                  <div className="flex flex-col text-base">
                    <span>{video.videoName}</span>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Play size={12} className="mr-1" />
                      <span>{video.videoDuration}</span>
                    </div>
                  </div>
                </button>
              ))}

              {courseData.chapters[activeModuleIndex].quizes?.map((quiz) => (
                <a
                  key={quiz.quizId}
                  href={quiz.quizLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-3 mx-2 my-1 rounded-md border-t border-gray-100 hover:bg-gray-50"
                >
                  <span className="mr-3">📝</span>
                  <div className="text-base">
                    <p className="font-medium text-gray-800">
                      {quiz.quizName}
                    </p>
                  </div>
                </a>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

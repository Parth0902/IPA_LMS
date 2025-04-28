import React, { useState } from 'react';
import { Play, CheckCircle, Lock } from 'lucide-react';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { apiService } from '../../services/apiHandler';
import {useAuth} from '../../Context/AuthContext';
import { toast } from 'react-toastify';

export default function CoursePlayer() {

  const [activeChapter, setActiveChapter] = useState(0);
  const [activeVideo, setActiveVideo] = useState("Video1");
  const [expandedPanel, setExpandedPanel] = useState('panel0');
  const [iframeUrl, setIframeUrl] = useState("");

  const {token} = useAuth();

  // Course data from the API response
  const courseData = {
    "courseData": {
      "_id": "680e072b4e541c0b057739bf",
      "status": "draft",
      "courseName": "Foundations of Diabetic Foot Management (FDFM)",
      "heading": "Master the Science and Care of the Diabetic Foot",
      "courseTopic": "Diabetic Foot Care and Management",
      "coursePrice": "5800",
      "courseDescription": "The Foundations of Diabetic Foot Management (FDFM) course is designed to provide healthcare professionals with a comprehensive understanding of diabetic foot complications, their prevention, diagnosis, and treatment.",
      "courseThumbNail": "https://IPA-Images.b-cdn.net/1745690103513-Blue and Green Medical Center Modern Instagram Post.png",
      "introVideo": "e6031fc1-e356-439b-801c-f1ac89953a68",
      "Features": {
        "watchTime": "56",
        "chapters": "6",
        "quizes": "8"
      },
      "rating": 0,
      "title": "Foundations of Diabetic Foot Management (FDFM)",
      "bunnyCollectionId": "3a973851-89f0-4b4f-91bb-43710460f34e"
    },
    "chapters": [
      {
        "CourseId": "6807d07c8bb1a8956e9d8814",
        "ModuleName": "Module 1: Introduction to Diabetic Foot",
        "ModuleDescription": "Learn the basics of diabetic foot complications and their impact",
        "ModuleDuration": "45 min",
        "Videos": [
          {
            "videoName": "Understanding Diabetes and Foot Complications",
            "videoDescription": "Overview of diabetes and its effects on foot health",
            "videoDuration": "20 mins",
            "videoId": "Video1"
          },
          {
            "videoName": "Global Burden of Diabetic Foot Disease",
            "videoDiscription": "Statistics and worldwide impact of diabetic foot complications",
            "videoDuration": "15 mins",
            "videoId": "Video2"
          }
        ],
        "quizes": [
          {
            "quizName": "Module 1 Assessment",
            "quizDescription": "Test your knowledge of diabetic foot basics",
            "quizDuration": "20 mins",
            "quizLink": "#"
          }
        ]
      },
      {
        "CourseId": "6807d07c8bb1a8956e9d8814",
        "ModuleName": "Module 2: Foot Anatomy and Pathophysiology",
        "ModuleDescription": "Detailed exploration of foot structure and disease processes",
        "ModuleDuration": "60 min",
        "Videos": [
          {
            "videoName": "Foot Anatomy Essentials",
            "videoDescription": "Detailed anatomy of the foot relevant to diabetes care",
            "videoDuration": "25 mins",
            "videoId": "Video3"
          },
          {
            "videoName": "Pathophysiology of Diabetic Foot",
            "videoDescription": "Disease mechanisms in diabetic foot complications",
            "videoDuration": "20 mins",
            "videoId": "Video4"
          }
        ],
        "quizes": [
          {
            "quizName": "Anatomy Assessment",
            "quizDescription": "Test your knowledge of foot anatomy",
            "quizDuration": "15 mins",
            "quizLink": "#"
          }
        ]
      },
      {
        "CourseId": "6807d07c8bb1a8956e9d8814",
        "ModuleName": "Module 3: Clinical Assessment",
        "ModuleDescription": "Techniques for thorough assessment of diabetic foot",
        "ModuleDuration": "55 min",
        "Videos": [
          {
            "videoName": "Patient History Taking",
            "videoDescription": "How to effectively gather relevant patient information",
            "videoDuration": "15 mins",
            "videoId": "Video5"
          },
          {
            "videoName": "Physical Examination Techniques",
            "videoDescription": "Step-by-step guide to examining the diabetic foot",
            "videoDuration": "25 mins",
            "videoId": "Video6"
          }
        ],
        "quizes": [
          {
            "quizName": "Clinical Skills Assessment",
            "quizDescription": "Test your knowledge of assessment techniques",
            "quizDuration": "20 mins",
            "quizLink": "#"
          }
        ]
      },
      
    ]
  };

  

  // Handle accordion expansion
  const handleAccordionChange = (panel) => (isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  // Select a video to play
  const selectVideo = async (chapterIndex, videoId) => {
    setActiveChapter(chapterIndex);
    setActiveVideo(videoId);

    // const response = await apiService({
    //   method:'POST',
    //   endpoint:'/getVideo',  // check end point amd response and edit
    //   token,
    //   data : videoId
    // });

    // setIframeUrl(response.data.iframe);
  };


  return (
    <div className="flex h-screen bg-gray-100 mt-24">
      {/* Video Player Section */}
      <div className="w-2/3 flex flex-col p-6 aspect-video">
        <div className="relative h-3/4 bg-black">
          {iframeUrl ? (
            <iframe
              title='Video'
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
            <span className="mr-4">Duration: {courseData.chapters[activeChapter]?.Videos.find(v => v.videoId === activeVideo)?.videoDuration || "N/A"}</span>
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
        <div className="pb-16 h-16">
          {courseData.chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex}>
              <Accordion
                expanded={expandedPanel === `panel${chapterIndex}`}
                onChange={handleAccordionChange(`panel${chapterIndex}`)}
                disableGutters
                elevation={0}
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  '&:before': {
                    display: 'none',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<span className="text-gray-500">▼</span>}
                  aria-controls={`panel${chapterIndex}-content`}
                  id={`panel${chapterIndex}-header`}
                  sx={{
                    padding: '16px',
                    borderBottom: '1px solid #eee',
                    '&:hover': {
                      backgroundColor: '#f9fafb'
                    }
                  }}
                >
                  <div className="w-full">
                    <h3 className="font-semibold">{chapter.ModuleName}</h3>
                    <p className="text-sm text-gray-500">{chapter.ModuleDuration}</p>
                  </div>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                  {/* Videos */}
                  {chapter.Videos.map((video, videoIndex) => (
                    <button
                      key={videoIndex}
                      className={`flex items-center p-3 mx-2 my-1 rounded cursor-pointer ${activeVideo === video.videoId ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                      onClick={() => selectVideo(chapterIndex,video.videoId)}
                    >
                      <div className="mr-3">
                        {chapterIndex === 0 || (chapterIndex === 1 && videoIndex === 0) ?
                          <CheckCircle size={18} className="text-green-500" /> :
                          <Lock size={18} className="text-gray-400" />
                        }
                      </div>
                      <div className="flex-grow">
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

                  {/* Quizzes */}
                  {chapter.quizes.map((quiz, quizIndex) => (
                    <div
                      key={quizIndex}
                      className="flex items-center p-3 mx-2 my-1 rounded cursor-pointer hover:bg-gray-50"
                    >
                      <div className="mr-3">
                        {chapterIndex === 0 ?
                          <CheckCircle size={18} className="text-green-500" /> :
                          <Lock size={18} className="text-gray-400" />
                        }
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-700">{quiz.quizName}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Quiz</span>
                          <span className="ml-2">{quiz.quizDuration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
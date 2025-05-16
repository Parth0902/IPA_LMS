import React from 'react'
import Rating from '@mui/material/Rating';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCart, NotebookPen, Newspaper, Video, Trophy, Infinity, BookMarked, ChevronDown, IndianRupee } from 'lucide-react';
import Reviews from '../Components/course/Reviews';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: #f5f5f5;
  color: #333;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 16px;
`;

const Course = () => {
  const { token } = useAuth();
  const { addItem } = useCart();
  const { courseId } = useParams();
  const apiService = useApi();

  const { data: Data, isLoading, error } = useQuery({
    queryKey: ['courseData', courseId],
    queryFn: async () => {
      return await apiService({ method: 'GET', endpoint: `/getCourseData/${courseId}` });
    },
  });

  const handleAddToCart = async () => {
    if (!token) {
      toast.warn("Login first");
      return;
    }
    addItem(courseId);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">Loading course data...</div>
      </div>
    );
  }

  if (error || !Data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">Error loading course data</div>
      </div>
    );
  }

  const { courseData, chapters } = Data;
  // const watchTime = courseData?.Features?.watchTime || '0h 0m';
  const totalChapters = courseData?.Features?.chapters || 0;
  const totalQuizzes = courseData?.Features?.quizes || 0;

  const Features = [ // have to make it dynamic create routes need to change course schema
    {
      icon: <Video size={36} />,
      text: `Total no. of 42+ videos`, // text: `Total no. of ${totalVideos}+ videos`,
    },
    {
      icon: <BookMarked size={36} />,
      text: `${totalChapters} total modules`,
    },
    {
      icon: <Newspaper size={36} />,
      text: "Learn at your own pace",
    },
    {
      icon: <NotebookPen size={36} />,
      text: `${totalQuizzes} Total Quizzes`,
    },
    {
      icon: <Trophy size={36} />,
      text: "Certificate of Completion",
    },
    {
      icon: <Infinity size={36} />,
      text: "Access to course material for 1 year", // make it dynamic 
    }
  ];

  const objectives = [
    {
      heading: "Understand the Purpose of the FDFM Course",
      text: "Explain the objectives, scope, and significance of the course in diabetic foot management.",
    },
    {
      heading: "Recognize the Need for Specialized Training",
      text: "Identify the challenges and global burden of diabetic foot complications, with a focus on improving patient outcomes.",
    },
    {
      heading: "Outline the Course Structure",
      text: "Describe the key topics covered in the FDFM course, including anatomy, biomechanics, neuropathy, vascular complications, and wound care.",
    },
    {
      heading: "Appreciate the Multidisciplinary Approach",
      text: "Understand the collaborative role of different healthcare professionals in preventing, diagnosing, and managing diabetic foot conditions.",
    },
    {
      heading: "Identify Key Anatomical Structures",
      text: "Describe the bones, joints, muscles, tendons, and ligaments of the foot.",
    },
    {
      heading: "Understand the Vascular and Nervous Supply",
      text: "Explain the arterial, venous, and nerve supply of the foot and their clinical relevance.",
    },
  ];


  return (
    <div className='mt-24'>
      <section className='flex justify-around xl:mx-[120px] py-12'>
        <div className='w-5/12 h-full'>
          <img src={courseData.courseThumbNail} alt="" />

        </div>
        <div className='w-6/12'>
          <h4 className='font-Inter text-[40px] font-semibold'>{courseData.courseName}</h4>
          <h2 className='font-popins text-[22px] font-normal pt-3'>{courseData.heading}</h2>
          <p className='font-SubHeading text-[18px] pt-2 text-justify'>{courseData.courseDescription}</p>
          <div className='flex justify-between items-center pt-4'>

            <div className='flex gap-3 items-center'>
              <p className='font-popins text-[20px] font-bold'>Price</p>
              <h2 className='font-popins text-[22px] font-normal flex gap-3 items-center'>
                <IndianRupee size={18} /> {courseData.coursePrice}
              </h2>
            </div>

            <div className='flex gap-3 items-center'>
              <p className='font-popins text-[20px] font-bold '>Ratings</p>
              <Rating name="read-only" value={courseData.rating || 4} readOnly precision={0.5} sx={{ fontSize: '2rem' }} />
            </div>
          </div>
          <button
            className='bg-black text-white mt-5 py-3 px-4 font-Roboto font-medium rounded-lg flex gap-3'
            onClick={handleAddToCart}
          >
            Add to Cart
            <ShoppingCart color="#ffffff" />
          </button>
        </div>
      </section>

      <section className='xl:px-[120px]'>
        <h2 className='font-Inter text-[40px] font-semibold pt-5 text-center'>Features of this course</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center py-12'>
          {Features.map((feature, index) => (
            <div key={index} className='flex gap-10 w-[300px] md:w-[400px] my-3 items-center'>
              {feature.icon}
              <p className='text-[20px] font-popins font-medium'>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="xl:px-[120px]">
        <h2 className="font-Inter text-[40px] font-semibold pt-5 text-center">Objectives of this course</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-[20px] font-semibold text-gray-800">{objective.heading}</h3>
              <p className="text-[16px] font-normal text-gray-600 leading-relaxed">{objective.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='xl:px-[120px] pb-12 flex justify-center flex-col gap-2 items-center'>
        <h2 className='font-Inter text-[40px] font-semibold pt-5 text-center pb-10'>Chapters of this course</h2>
        {chapters.map((chapter) => (
          <Accordion key={chapter._id} className='w-[70%]'>
            <StyledAccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className='flex w-full justify-between px-10 items-center'>
                <p className='font-popins text-[20px] font-medium'>{chapter.ModuleName}</p>
                <p>- {chapter.ModuleDuration}</p>
              </div>
            </StyledAccordionSummary>
            <Divider />
            <StyledAccordionDetails>
              <ul className='list-disc'>
                <p className='font-popins text-[18px] font-medium px-10 py-4'>Module Objective</p>
                <ul className='list-disc px-14 pb-4'>
                  {chapter.ModuleDescription?.split('•')
                    .filter(point => point.trim() !== '')
                    .map((point, index) => (
                      <li key={index} className='font-Inter text-[16px] text-gray-700 leading-relaxed'>
                        {point.trim()}
                      </li>
                    ))}
                </ul>
                <h4 className='font-bold font-popins text-[18px] py-4 px-10 mb-5 bg-slate-300'>Videos</h4>
                {chapter.Videos.map((content, index) => (
                  <li key={index} className='flex w-full justify-between items-center px-10'>
                    <span className='font-popins text-[18px] flex gap-3'>
                      <span className='font-medium w-[10px]'>
                        {index + 1}
                      </span>
                      {content.videoName}
                    </span>
                    <span className='w-[100px] font-Inter font-normal text-slate-700'>
                      - {content.videoDuration}
                    </span>
                  </li>
                ))}

                <h4 className='font-bold font-popins text-[18px] py-4 my-5 px-10 w-full bg-slate-300'>Quizzes</h4>
                {chapter.quizes.map((content, index) => (
                  <li key={index} className='flex w-full justify-between items-center px-10'>
                    <span className='font-popins text-[18px] flex gap-3'>
                      <span className='font-medium w-[10px]'>
                        {index + 1}
                      </span>
                      {content.quizName}
                    </span>
                    <span className='w-[100px] font-Inter font-normal text-slate-700'>
                      - {content.quizDuration}
                    </span>
                  </li>
                ))}
              </ul>
            </StyledAccordionDetails>
          </Accordion>
        ))}
      </section>

      <section className='bg-gray-50 py-[60px]'>
        <h2 className='font-Inter text-[42px] font-semibold text-center'>Course Reviews</h2>
        <Reviews />
      </section>

      <section>
        <h2 className='font-Inter text-[42px] font-semibold pb-[60px] text-center'>Recommended courses</h2>
        {/* You can map recommended courses here */}
      </section>
    </div>
  );
};

export default Course;

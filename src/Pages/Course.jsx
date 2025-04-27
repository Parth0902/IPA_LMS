import React from 'react'
import Rating from '@mui/material/Rating';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCart, NotebookPen, Newspaper, Video, Trophy, Infinity, BookMarked, ChevronDown,IndianRupee } from 'lucide-react';
import Reviews from '../Components/course/Reviews'
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/apiHandler';
import { useParams } from 'react-router-dom';

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

  const { courseId } = useParams();

  const { data: Data, isLoading, error } = useQuery({
    queryKey: ['courseData', courseId],
    queryFn: async () => {
      return await apiService({ method: 'GET', endpoint: `/getCourseData/${courseId}` });
    },
  });

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

  const { courseData,chapters } = Data;
  console.log(courseData?.Features?.watchTime);
  console.log(courseData)

  const Features = [
    {
      icon: <Video size={36} />,
      text: `Total watch Time of ${courseData?.Features?.watchTime}`
    },
    {
      icon: <BookMarked size={36} />,
      text: `${courseData?.Features?.chapters} total chapters`
    },
    {
      icon: <Newspaper size={36} />,
      text: `Chapter Wise Notes`
    },
    {
      icon: <NotebookPen size={36} />,
      text: `${courseData?.Features?.quizes} Total Quizes`
    },
    {
      icon: <Trophy size={36} />,
      text: `Certificate of Completion`
    },
    {
      icon: <Infinity size={36} />,
      text: `Lifetime aceess to course material`
    },
  ]


  return (
    <div className='mt-24'>
      <section className='flex justify-around xl:mx-[120px] py-12'>
        <div className='w-5/12 bg-slate-700 rounded-xl h-[500px]'>

        </div>
        <div className='w-5/12'>
          <h4 className='font-Inter text-[40px] font-semibold pt-5'>{courseData.courseName}</h4>
          <h2 className='font-popins text-[22px] font-normal pt-3'>{courseData.heading}</h2>
          <p className='font-SubHeading text-[18px] pt-2'>{courseData.courseDescription}</p>
          <div className='flex flex-col gap-3'>
            <p className='font-popins text-[20px] pt-4 '>Ratings</p>
            <Rating name="read-only" value={4} readOnly precision={0.5} sx={{ fontSize: '2rem' }} />
          </div>

          <h2 className='font-popins text-[22px] font-normal pt-3 flex gap-3 items-center'> <IndianRupee /> {courseData.coursePrice}</h2>
          <button className='bg-black text-white mt-5 py-3 px-4 font-Roboto font-medium rounded-lg flex gap-3'>
            Add to Cart
            <ShoppingCart color="#ffffff" />
          </button>
        </div>
      </section>

      <section className='xl:px-[120px]'>
        <h2 className='font-Inter text-[40px] font-semibold pt-5 text-center'>Features of this course</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center py-12'>
          {
            Features.map((feature, index) => (
              <div key={index} className='flex gap-10 w-[300px] md:w-[400px] my-3 items-center'>
                {feature.icon}
                <p className='text-[20px] font-popins font-medium'>{feature.text}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section className='xl:px-[120px] pb-12 flex justify-center flex-col gap-2 items-center'>
        <h2 className='font-Inter text-[40px] font-semibold pt-5 text-center pb-10'>Chapters of this course</h2>
        {
          chapters.map((chapter, index) => (
            <Accordion key={chapter._id}  className='w-[70%]'>
              <StyledAccordionSummary
                expandIcon={<ChevronDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className='flex w-full justify-between px-10 items-center'>
                  <p className='font-popins text-[20px] font-medium'>{chapter.ModuleName
                  }</p>
                  <p>- {chapter.ModuleDuration}</p>
                </div>
              </StyledAccordionSummary>
              <Divider />
              <StyledAccordionDetails>
                <ul className='list-disc '>
                <h4 className='font-bold font-popins text-[18px] py-4 px-10 mb-5  bg-slate-300'>Videos</h4>
                  {
                    chapter.Videos.map((content, index) => (
                      <li key={index} className='flex w-full justify-between items-center px-10'>
                        <span className='font-popins text-[18px] flex gap-3'>
                          <span className='font-medium w-[10px]'> 
                            {index +1}
                          </span>
                           {content.videoName}
                        </span>
                        <span className='w-[100px] font-Inter font-normal text-slate-700'>- {content.videoDuration}</span>
                      </li>
                    ))
                  }

                 

                  <h4 className='font-bold font-popins text-[18px] py-4  my-5 px-10 w-full bg-slate-300'>quizes</h4>
                  {
                    chapter.quizes.map((content, index) => (
                      <li key={index} className='flex w-full justify-between items-center px-10'>
                        <span className='font-popins text-[18px] flex gap-3'>
                          <span className='font-medium w-[10px]'> 
                            {index +1}
                          </span>
                           {content.quizName}
                        </span>
                        <span className='w-[100px] font-Inter font-normal text-slate-700'>- {content.quizDuration}</span>
                      </li>
                    ))
                  }
                 
                </ul>

              </StyledAccordionDetails>
            </Accordion>
          ))
        }
      </section>

      <section className=' bg-gray-50 py-[60px]'>
        <h2 className='font-Inter text-[42px] font-semibold  text-center'>Course Reviews</h2>
        <Reviews/>
      </section>
      <section>
          <h2 className='font-Inter text-[42px] font-semibold pb-[60px] text-center'>Recommended courses</h2>
          
      </section>

    </div>
  )
}

export default Course

import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { ChevronDown, VideoIcon, NotebookPen} from 'lucide-react';
import Reviews from '../Components/course/Reviews';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import {Link, useParams } from 'react-router-dom';
import ShowMoreText from '../Components/ShowMoreText';

const StyledAccordion = styled(Accordion)`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  }

  &.Mui-expanded {
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
  }

  &::before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 24px;
  background: linear-gradient(to right, #f0f4ff, #f7f9ff);
  color: #1f2937;
  font-weight: 600;
  font-size: 18px;
  min-height: 70px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #e3eaff, #f0f4ff);
  }

  .MuiAccordionSummary-content {
    margin: 12px 0;
  }

  .MuiAccordionSummary-expandIconWrapper {
    transition: transform 0.3s ease;
  }

  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(180deg);
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #f9fafb;
  padding: 24px;
  font-size: 16px;
  color: #374151;
  border-top: 1px solid #e5e7eb;
`;

// ... (imports remain unchanged)

const MyCourseDetail = () => {
  const { courseId } = useParams();
  const apiService = useApi();

  const { data: Data, isLoading, error } = useQuery({
    queryKey: ['courseData', courseId],
    queryFn: async () => {
      return await apiService({ method: 'GET', endpoint: `/getCourseData/${courseId}` });
    },
    enabled: !!courseId,
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

  const { courseData, chapters } = Data;

  return (
    <div className='mt-24'>
      {/* Hero Section */}
      <section className='flex flex-col lg:flex-row justify-evenly md:px-24 px-6 py-12 gap-6'>
        <div className='lg:w-6/12 pt-4'>
          <img src={courseData.courseThumbNail} alt={courseData.courseName} className="rounded-xl w-full" />
        </div>
        <div className='lg:w-5/12 space-y-4'>
          <h4 className='font-Inter text-[40px] font-semibold'>{courseData.courseName}</h4>
          <h2 className='font-popins text-[22px]'>{courseData.heading}</h2>
          <ShowMoreText text={courseData.courseDescription} maxLength={300} />
        </div>
      </section>

      {/* Course Details Section */}
      <section className='xl:px-24 px-6 py-12 bg-slate-100'>
        <h2 className="text-[36px] md:text-[40px] font-semibold text-center mb-10">Modules of this course</h2>
        {chapters.map((chapter) => (
          <StyledAccordion key={chapter._id} className='w-full'>
            <StyledAccordionSummary expandIcon={<ChevronDown />}>
              <div className='flex w-full justify-between px-6 items-center'>
                <p className='text-[20px] font-medium'>{chapter.ModuleName}</p>
              </div>
            </StyledAccordionSummary>
            <Divider />
            <StyledAccordionDetails>
              <div className='px-2 md:px-4'>
                <h4 className='text-[18px] font-medium py-2'>Module Objective</h4>
                <ul className='list-disc px-6 pb-4'>
                  {chapter.ModuleDescription?.split('•')
                    .filter(point => point.trim() !== '')
                    .map((point, index) => (
                      <li key={index} className="text-[18px] text-gray-800 leading-relaxed">
                        {point.trim()}
                      </li>
                    ))}
                </ul>
                <h4 className='text-[18px] font-medium py-2'>Module Videos</h4>
                {chapter.Videos?.map((video, index) => (
                  <div key={index} className='flex items-center gap-4 py-2'>
                    <VideoIcon size={24} />
                    <p className='text-[18px] font-medium text-gray-800'>{video.videoName}</p>
                  </div>
                ))}
                <h4 className='text-[18px] font-medium py-2'>Module Assessment</h4>
                {chapter.quizes?.map((quiz, index) => (
                  <div key={index} className='flex items-center gap-4 py-2'>
                    <NotebookPen size={24} />
                    <p className='text-[18px] font-medium text-gray-800'>{quiz.quizName}</p>
                  </div>
                ))}
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </section>

      {/* Reviews Section */}
      <section className='bg-gray-50 xl:px-24 px-6 pt-12'>
        <h2 className='text-[36px] md:text-[42px] font-semibold text-center mb-10'>Course Reviews</h2>
        <Reviews />
      </section>
    </div>
  );
};

export default MyCourseDetail;

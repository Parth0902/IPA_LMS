import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import {
  ShoppingCart,
  NotebookPen,
  ShoppingBag,
  Newspaper,
  Video,
  Trophy,
  Infinity,
  BookMarked,
  ChevronDown,
  IndianRupee,
  VideoIcon
} from 'lucide-react';
import Reviews from '../Components/course/Reviews';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';
import ShowMoreText from '../Components/ShowMoreText';
import { useEffect, useState } from 'react';

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

const sectionHeading = 'font-Inter text-3xl md:text-4xl font-semibold text-center';
const subText = 'text-base md:text-lg text-gray-800 leading-relaxed';
const cardWrapper = 'bg-white shadow-md rounded-2xl p-6 transition-transform hover:scale-[1.02]';

const Course = () => {
  const { token } = useAuth();
  const { addItem } = useCart();
  const { courseId } = useParams();
  const apiService = useApi();

  const { data: Data, isLoading, error } = useQuery({
    queryKey: ['courseData', courseId],
    queryFn: async () => await apiService({ method: 'GET', endpoint: `/getCourseData/${courseId}` }),
    enabled: !!courseId,
  });

  const { data: userData } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await apiService({ method: 'GET', endpoint: '/getUser', token }),
  });

  const isCoursePurchased = userData?.user.myCourses?.some(course => course.courseId === courseId);

  const handleAddToCart = () => {
    if (!token) {
      toast.warn("Login first");
      return;
    }
    addItem(courseId);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-gray-500 text-lg">Loading course data...</div>;
  }

  if (error || !Data) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-lg">Error loading course data</div>;
  }

  const { courseData, chapters } = Data;
  const Features = [
    { icon: <Video size={32} />, text: `${courseData?.Features?.watchTime || 0}+ videos` },
    { icon: <BookMarked size={32} />, text: `${courseData?.Features?.chapters || 0} modules` },
    { icon: <Newspaper size={32} />, text: 'Learn at your own pace' },
    { icon: <NotebookPen size={32} />, text: `${courseData?.Features?.quizes || 0} assessments` },
    { icon: <Trophy size={32} />, text: 'Certificate of Completion' },
    { icon: <Infinity size={32} />, text: '1-year access' },
  ];

  const objectives = [
    { text: "Designed to provide comprehensive knowledge on prevention, assessment, and management of diabetic foot complications" },
    { text: "Focuses on pathophysiology, clinical evaluation, wound care, footwear, surgical interventions, and rehabilitation" },
    { text: "Equips healthcare professionals with essential clinical skills and decision-making abilities to improve patient outcomes" },
    { text: "Understand the pathophysiology and risk factors associated with diabetic foot ulcers. Develop skills in foot examination, screening, and risk stratification" },
    { text: "Learn strategies for patient education, lifestyle modification, and multidisciplinary care" },
    { text: "Recognize when surgical intervention is necessary and how to coordinate advanced treatments" },
  ];

  return (
    <div className='mt-24 px-4 md:px-8'>
      {/* Hero Section */}
      <section className='flex flex-col lg:flex-row justify-around gap-10 py-12'>
        <div className='lg:w-6/12'>
          <img src={courseData.courseThumbNail} alt={courseData.courseName} className="rounded-xl w-full object-cover" />
        </div>
        <div className='lg:w-5/12 space-y-4'>
          <h4 className='text-3xl md:text-4xl font-semibold'>{courseData.courseName}</h4>
          <h2 className='text-lg md:text-xl'>{courseData.heading}</h2>
          <ShowMoreText text={courseData.courseDescription} maxLength={300} />

          {isCoursePurchased ? (
            <Link to={`/myCourse/${courseId}`} className='inline-block'>
              <div className='bg-black text-white py-3 px-4 font-medium rounded-lg flex gap-3 items-center'>
                <VideoIcon color="#ffffff" />
                View Content
              </div>
            </Link>
          ) : (
            <>
              <div className='text-xl font-semibold flex items-end gap-2'>
                Price: <IndianRupee size={20} />{courseData.coursePrice}/- <span className='text-sm'>(excl. GST)</span>
              </div>
              <div className='flex flex-wrap gap-4'>
                <button onClick={handleAddToCart} className='bg-black text-white py-3 px-4 font-medium rounded-lg flex gap-3 items-center'>
                  Add to Cart <ShoppingCart color="#ffffff" />
                </button>
                <a href="https://forms.gle/kf4pTfudR3zAWtmPA" target="_blank" rel="noopener noreferrer" className='bg-black text-white py-3 px-4 font-medium rounded-lg flex gap-3 items-center'>
                  Purchase <ShoppingBag color="#ffffff" />
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className={sectionHeading}>Features of this course</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center py-12'>
          {Features.map((feature, index) => (
            <div key={index} className='flex gap-4 items-center w-full max-w-md'>
              {feature.icon}
              <p className='text-lg font-medium'>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section>
        <h2 className={sectionHeading}>Learning of this course</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12'>
          {objectives.map((objective, index) => (
            <div key={index} className={cardWrapper}>
              <p className={subText}>{objective.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className='pb-12 flex flex-col gap-6 items-center'>
        <h2 className={sectionHeading}>Modules of this course</h2>
        {chapters.map((chapter) => (
          <StyledAccordion key={chapter._id} className='w-full'>
            <StyledAccordionSummary expandIcon={<ChevronDown />}>
              <div className='w-full px-6 text-lg font-medium'>{chapter.ModuleName}</div>
            </StyledAccordionSummary>
            <Divider />
            <StyledAccordionDetails>
              <h4 className='text-lg font-semibold py-2'>Module Objective</h4>
              <ul className='list-disc px-6 pb-4'>
                {chapter.ModuleDescription?.split('•')
                  .filter(point => point.trim())
                  .map((point, index) => (
                    <li key={index} className={subText}>{point.trim()}</li>
                  ))}
              </ul>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </section>

      {/* Reviews Section */}
      <section className='bg-gray-50 py-16'>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-3/5 flex flex-col items-center justify-center">
            <h2 className='text-3xl md:text-4xl font-semibold text-center'>Course Reviews</h2>
            <Reviews />
          </div>
          <div className="lg:w-2/5 flex items-center justify-center">
            <img
              src='https://IPA-Images.b-cdn.net/Assets/faculty.jpg'
              alt="Faculty"
              className="max-h-[600px] w-auto h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;

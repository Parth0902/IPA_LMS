import Rating from '@mui/material/Rating';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCart, NotebookPen, Newspaper, Video, Trophy, Infinity, BookMarked, ChevronDown, IndianRupee, VideoIcon } from 'lucide-react';
import Reviews from '../Components/course/Reviews';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';

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

const Course = () => {
  const { token, userId } = useAuth();
  const { addItem } = useCart();
  const { courseId } = useParams();
  const apiService = useApi();

  const { data: Data, isLoading, error } = useQuery({
    queryKey: ['courseData', courseId],
    queryFn: async () => {
      return await apiService({ method: 'GET', endpoint: `/getCourseData/${courseId}` });
    },
    enabled: !!courseId,
  });

  // const { data: userData } = useQuery({
  //   queryKey: ['userData', userId], 
  //   queryFn: async () => {
  //     return await apiService({ method: 'GET', endpoint: '/getCart', token });
  //   },
  //   enabled: !!userId,
  // });

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
  const totalVideos = courseData?.Features?.watchTime || 0;
  const totalChapters = courseData?.Features?.chapters || 0;
  const totalQuizzes = courseData?.Features?.quizes || 0;

  const Features = [ // have to make it dynamic create routes need to change course schema
    {
      icon: <Video size={36} />,
      text: `Total no. of ${totalVideos}+ videos`, // text: `Total no. of ${totalVideos}+ videos`,
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
      text: `${totalQuizzes} total assessments`,
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
      // heading: "Understand the Purpose of the FDFM Course",
      text: "Designed to provide comprehensive knowledge on prevention, assessment, and management of diabetic foot complications",
    },
    {
      // heading: "Recognize the Need for Specialized Training",
      text: "Focuses on pathophysiology, clinical evaluation, wound care, footwear, surgical interventions, and rehabilitation",
    },
    {
      // heading: "Outline the Course Structure",
      text: "Equips healthcare professionals with essential clinical skills and decision-making abilities to improve patient outcomes",
    },
    {
      // heading: "Appreciate the Multidisciplinary Approach",
      text: "Understand the pathophysiology and risk factors associated with diabetic foot ulcers. Develop skills in foot examination, screening, and risk stratification"
    },
    {
      // heading: "Identify Key Anatomical Structures",
      text: "Learn strategies for patient education, lifestyle modification, and multidisciplinary care",
    },
    {
      // heading: "Understand the Vascular and Nervous Supply",
      text: "Recognize when surgical intervention is necessary and how to coordinate advanced treatments",
    },
  ];

  // Top of your component file - define reusable utility classes
  const sectionHeading = 'font-Inter text-[40px] font-semibold text-center';
  const subText = 'text-[18px] text-gray-800 leading-relaxed';
  const cardWrapper = 'bg-white shadow-md rounded-2xl p-6 transition-transform hover:scale-[1.02]';

  return (
    <div className='mt-24'>
      {/* Hero Section */}
      <section className='flex flex-col lg:flex-row justify-around xl:mx-[120px] py-12 gap-10'>
        <div className='lg:w-6/12 pt-4'>
          <img src={courseData.courseThumbNail} alt={courseData.courseName} className="rounded-xl w-full" />
        </div>
        <div className='lg:w-5/12 space-y-4'>
          <h4 className='font-Inter text-[40px] font-semibold'>{courseData.courseName}</h4>
          <h2 className='font-popins text-[22px]'>{courseData.heading}</h2>
          <p className='font-SubHeading text-[18px] text-justify'>{courseData.courseDescription}</p>

          <div className='flex justify-between md:items-center flex-col md:flex-row '>

            {token ?
              <Link to={`/myCourse/${courseId}/lectures`} className='flex gap-3 items-center'>
                <div className='bg-black text-white py-3 px-4 font-medium rounded-lg flex gap-3 items-center'>
                  Go To Lectures
                  <VideoIcon color="#ffffff" /></div>
              </Link>
              :
              <div className='flex gap-2 text-[20px] items-end'>
                <p className=' font-semibold'>Price :</p>
                <div className='flex gap-1 items-center'>
                  <IndianRupee size={20} />
                  <span>{courseData.coursePrice}/-</span>
                  <span className='text-sm'>(excl. G.S.T)</span>
                </div>
              </div>}


            <div className='flex gap-3 items-center'>
              <p className='text-[20px] font-bold'>Ratings</p>
              <Rating value={courseData.rating || 4} readOnly precision={0.5} sx={{ fontSize: '2rem' }} />
            </div>
          </div>

          {!token &&
            <button
              className='bg-black text-white py-3 px-4 font-medium rounded-lg flex gap-3 items-center'
              onClick={handleAddToCart}
            >
              Add to Cart
              <ShoppingCart color="#ffffff" />
            </button>
          }
        </div>
      </section>

      {/* Features Section */}
      <section className='xl:px-[120px]'>
        <h2 className={sectionHeading}>Features of this course</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center py-12'>
          {Features.map((feature, index) => (
            <div key={index} className='flex gap-6 w-[90%] max-w-[400px] items-center'>
              {feature.icon}
              <p className='text-[20px] font-popins font-medium'>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section className='xl:px-[120px]'>
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
      <section className='xl:px-[120px] pb-12 flex flex-col gap-6 items-center'>
        <h2 className={sectionHeading}>Modules of this course</h2>
        {chapters.map((chapter) => (
          <StyledAccordion key={chapter._id} className='w-full'>
            <StyledAccordionSummary expandIcon={<ChevronDown />}>
              <div className='flex w-full justify-between px-6 items-center'>
                <p className='text-[20px] font-medium'>{chapter.ModuleName}</p>
              </div>
            </StyledAccordionSummary>
            <Divider />
            <StyledAccordionDetails>
              <div className='px-4'>
                <h4 className='text-[18px] font-medium py-2'>Module Objective</h4>
                <ul className='list-disc px-6 pb-4'>
                  {chapter.ModuleDescription?.split('•')
                    .filter(point => point.trim() !== '')
                    .map((point, index) => (
                      <li key={index} className={subText}>
                        {point.trim()}
                      </li>
                    ))}
                </ul>
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </section>

      {/* Reviews Section */}
      <section className='bg-gray-50 py-[60px]'>
        <h2 className='font-Inter text-[42px] font-semibold text-center'>Course Reviews</h2>
        <Reviews />
      </section>
    </div>
  );

};

export default Course;

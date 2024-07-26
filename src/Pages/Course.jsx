import React from 'react'
import Rating from '@mui/material/Rating';
import { Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { ShoppingCart, NotebookPen, Newspaper, Video, Trophy, Infinity, BookMarked, ChevronDown } from 'lucide-react';
import Reviews from '../Components/course/Reviews'

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
  const Features = [
    {
      icon: <Video size={36} />,
      text: 'Total watch Time of 72hrs'
    },
    {
      icon: <BookMarked size={36} />,
      text: '12 total chapters'
    },
    {
      icon: <Newspaper size={36} />,
      text: 'Chapter Wise Notes'
    },
    {
      icon: <NotebookPen size={36} />,
      text: 'Total Quizes'
    },
    {
      icon: <Trophy size={36} />,
      text: 'Certificate of Completion'
    },
    {
      icon: <Infinity size={36} />,
      text: 'Lifetime aceess to course material'
    },
  ]

  const chapters = [

    {
      name: 'Chapter 1',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 2',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 3',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 4',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 5',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 6',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 7',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 8',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 9',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
    {
      name: 'Chapter 10',
      time: '2hrs 30mins',
      contents: [
        {
          name: 'Introduction to course',
          time: '30mins'
        },
        {
          name: 'Understanding the basics',
          time: '1hr'
        },
        {
          name: 'Quiz 1',
          time: '30mins'
        }
      ]
    },
  ]

  return (
    <div className='mt-24'>
      <section className='flex justify-around xl:mx-[120px] py-12'>
        <div className='w-5/12 bg-slate-700 rounded-xl h-[500px]'>

        </div>
        <div className='w-5/12'>
          <h4 className='font-Inter text-[40px] font-semibold pt-5'>Course Name</h4>
          <h2 className='font-popins text-[22px] font-normal pt-3'>The first course on IPA website</h2>
          <p className='font-SubHeading text-[18px] pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate aliquid ipsa quidem delectus nesciunt iure est, aliquam veniam voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos eaque excepturi et pariatur? Nam esse perspiciatis possimus maiores sint tempore aspernatur enim voluptas magni. Mollitia veritatis aut aperiam rem.</p>
          <div className='flex flex-col gap-3'>
            <p className='font-popins text-[20px] pt-4 '>Ratings</p>
            <Rating name="read-only" value={4} readOnly precision={0.5} sx={{ fontSize: '2rem' }} />
          </div>
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
            <Accordion key={index}  className='w-[70%]'>
              <StyledAccordionSummary
                expandIcon={<ChevronDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className='flex w-full justify-between px-10 items-center'>
                  <p className='font-popins text-[20px] font-medium'>{chapter.name}</p>
                  <p>- {chapter.time}</p>
                </div>
              </StyledAccordionSummary>
              <Divider />
              <StyledAccordionDetails>
                <ul className='list-disc px-10'>
                  {
                    chapter.contents.map((content, index) => (
                      <li key={index} className='flex w-full justify-between items-center'>
                        <span className='font-popins text-[18px] flex gap-3'>
                          <span className='font-medium w-[10px]'> 
                            {index +1}
                          </span>
                           {content.name}
                        </span>
                        <span className='w-[100px] font-Inter font-normal text-slate-700'>- {content.time}</span>
                      </li>
                    ))
                  }
                </ul>

              </StyledAccordionDetails>
            </Accordion>
          ))
        }
      </section>

      <h2 className='font-Inter text-[42px] font-semibold pb-[60px] text-center'>Course Reviews</h2>
      <Reviews/>
      
      <section>
          <h2 className='font-Inter text-[42px] font-semibold pb-[60px] text-center'>Recommended courses</h2>
          
      </section>

    </div>
  )
}

export default Course

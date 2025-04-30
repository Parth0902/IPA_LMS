import React from 'react';
import PropTypes from 'prop-types';
import CourseCard from './CourseCard';

const Page = ({ courses, courseDestination }) => {

  return (
    <div className="overflow-y-auto flex h-[90vh] w-full px-5 text-gray-600 hide-scrollbar ">
      <div className="container py-10 mx-auto">
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              image={course.courseThumbNail}
              topic={course.courseTopic}
              title={course.heading}
              price={course.coursePrice}
              guideName={course.rating}
              courseId={course._id}
              courseDestination={courseDestination}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
Page.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      courseThumbNail: PropTypes.string,
      courseTopic: PropTypes.string,
      heading: PropTypes.string,
      coursePrice: PropTypes.number,
      rating: PropTypes.string,
    })
  ).isRequired,
  courseDestination:PropTypes.string.isRequired
};

export default Page;

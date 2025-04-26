import React from 'react';
import CourseCard from './CourseCard';

const Page = ({courses}) => {
  
  return (
    <div className="overflow-y-auto flex h-[90vh] w-full px-5 text-gray-600 hide-scrollbar ">
        <div className="container py-10 mx-auto">
          <div className="flex flex-wrap">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                image={course.image}
                topic={course.category}
                title={course.title}
                price={course.price}
                guideName={course.guideName}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default Page;

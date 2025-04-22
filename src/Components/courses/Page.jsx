import React from 'react';
import CourseCard from './CourseCard';

const Page = () => {
  const courses = [
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      id:1,
      image: 'https://dummyimage.com/420x260',
      category: 'CATEGORY',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    // You can add more course objects here
  ];
  return (
    <div className="overflow-y-auto flex min-h-[84vh] w-full px-5">
      <section className="text-gray-600 body-font w-full">
        <div className="container py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                image={course.image}
                category={course.category}
                title={course.title}
                price={course.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ image, title, topic, price, guideName,courseId, courseDestination}) => {
  return (
    <Link className="w-[380px] h-[260px] p-4 mb-16 " to={`/${courseDestination}/${courseId}`}>
      <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="h-48 overflow-hidden rounded-t-xl">
          <img alt={title} src={image} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{title}</h2> {/* Course Name */}
          <div className="flex justify-between">
              <p className="text-sm text-gray-500 mb-1 max-w-[70%] truncate">Topic: {topic}</p> {/* Topic */}
              <p className="text-sm text-gray-500 max-w-[25%]">Guide: {guideName}</p>
          </div>
          <p className="text-sm text-gray-700 mb-1">Price: {price}</p> {/* Guide Name */}
        </div>
      </div>
    </Link>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  guideName: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
  courseDestination: PropTypes.string.isRequired
};

export default CourseCard;

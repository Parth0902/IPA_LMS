import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ image, category, title, price }) => {
  return (
    <Link className="lg:w-1/4 md:w-1/2 p-4 w-full" to="/course">
      <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="h-48 overflow-hidden rounded-t-xl">
          <img alt={title} src={image} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xs font-medium text-gray-500 uppercase">{category}</h3>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-700 mt-1">{price}</p>
        </div>
      </div>
    </Link>
  );
};
CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};


export default CourseCard;

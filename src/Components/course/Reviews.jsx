import React from 'react';
import Rating from '@mui/material/Rating';

const Reviews = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-16 py-12 px-6 bg-gray-50">

      {/* Left Section */}
      <div className="w-full lg:w-[25%] space-y-8">
        <div>
          <p className="text-3xl font-bold font-popins pb-4 text-gray-800">Ratings & Reviews</p>
          <div className="flex items-center gap-4">
            <p className="text-xl font-medium">Average Rating</p>
            <Rating value={4} readOnly precision={0.5} sx={{ fontSize: '2.5rem' }} />
          </div>
        </div>

        {/* Ratings Breakdown */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rating value={star} readOnly precision={0.5} sx={{ fontSize: '1.5rem' }} />
              </div>
              <span className="font-popins text-sm font-medium text-gray-600">{(6 - star) * 10}%</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pt-6">
          <p className="text-center text-gray-600 font-medium">Share your thoughts with others</p>
          <button className="border-2 border-black text-black w-full py-3 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Write a Review
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[55%] space-y-6 h-[600px] overflow-y-auto">
        <div className="space-y-6">
          {[1, 2,3,4,5].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://dummyimage.com/302x302"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-popins text-lg font-semibold text-gray-800">John Doe</p>
                  <p className="font-popins text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
              <Rating value={4} readOnly precision={0.5} sx={{ fontSize: '1.8rem' }} />
              <p className="font-popins text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                molestie ipsum et, eleifend felis.
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Reviews;

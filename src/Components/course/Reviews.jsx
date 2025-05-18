import React from 'react';
import Rating from '@mui/material/Rating';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import { CircleUser } from 'lucide-react';

const Reviews = () => {
  const apiService = useApi();
  const { courseId } = useParams();

  const { data: reviewsData, isLoading, isError } = useQuery({
    queryKey: ['reviewsData', courseId],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: `/getReviews/${courseId}`,
      });
      console.log('response:', response.reviews);
      return response.reviews;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews</div>;
  }

  // Calculate the average rating
  const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;

  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-16 py-12 px-6 bg-gray-50">

      {/* Left Section */}
      <div className="w-full lg:w-[25%] space-y-8">
        <div>
          <p className="text-3xl font-bold font-popins pb-4 text-gray-800">Ratings & Reviews</p>
          <div className="flex items-center gap-4">
            <p className="text-xl font-medium">Average Rating</p>
            <Rating value={averageRating} readOnly precision={0.5} sx={{ fontSize: '2.5rem' }} />
          </div>
        </div>

        {/* Ratings Breakdown */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rating value={star} readOnly precision={0.5} sx={{ fontSize: '1.5rem' }} />
              </div>
              <span className="font-popins text-sm font-medium text-gray-600">
                {Math.floor((reviewsData.filter((review) => review.rating === star).length / reviewsData.length) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[55%] space-y-6 h-[600px] overflow-y-auto">
        <div className="space-y-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <CircleUser
                size={31}
                />
                <div>
                  <p className="font-popins text-2xl font-semibold text-gray-800">{review.userName}</p>
                  <p className="font-popins text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <Rating value={review.rating} readOnly precision={0.5} sx={{ fontSize: '1.8rem' }} />
              <p className="font-popins text-base text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Reviews;

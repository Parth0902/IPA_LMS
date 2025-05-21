import React from 'react';
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

  return (
    <div className="flex flex-col gap-16 bg-gray-50">
      <div className="w-full space-y-6 h-[600px] overflow-y-auto">
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
                </div>
              </div>
              <p className="font-popins text-base text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

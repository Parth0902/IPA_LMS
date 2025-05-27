import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import image from "../../Assets/faculty.jpg";

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
    return <div className="px-4 py-10">Loading...</div>;
  }

  if (isError) {
    return <div className="px-4 py-10 text-red-500">Error fetching reviews</div>;
  }

  return (
    <div className="flex flex-col gap-10 bg-gray-50 px-4 md:px-8 lg:px-16 py-10">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <div className="space-y-6 h-[600px] overflow-y-auto pr-2">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <CircleUser size={31} />
                <div>
                  <p className="font-popins text-xl font-semibold text-gray-800">{review.userName}</p>
                </div>
              </div>
              <p className="font-popins text-md text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

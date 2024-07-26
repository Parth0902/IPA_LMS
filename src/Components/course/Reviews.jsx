import React from 'react'
import Rating from '@mui/material/Rating';

const Reviews = () => {
  return (
     <div className='flex justify-center gap-[50px] pb-12'>
          <div className='w-[30%]'>
          
            <p className='text-[28px] font-medium font-popins pb-5 text-[]'>Ratings</p>
            <div className='flex gap-5 pb-7'>
                <p className='text-[20px] font-medium font-popins'>Average Rating</p>
                <Rating name="read-only" value={4} readOnly precision={0.5}  sx={{ fontSize: '2rem' }}/>
            </div>

            <div className='flex flex-col gap-3 pb-10'>
                <div className='flex gap-10 items-center'>
                     <Rating name="read-only" value={5} readOnly precision={0.5} sx={{ fontSize: '2rem' }}  />
                     <span className='font-popins text-[20px] font-medium'>40%</span>
                </div>
                <div className='flex gap-10 items-center'>
                     <Rating name="read-only" value={4} readOnly precision={0.5} sx={{ fontSize: '2rem' }}  />
                     <span className='font-popins text-[20px] font-medium'>30%</span>
                </div>
                <div className='flex gap-10 items-center'>
                     <Rating name="read-only" value={3} readOnly precision={0.5} sx={{ fontSize: '2rem' }}  />
                     <span className='font-popins text-[20px] font-medium'>20%</span>
                </div>
                <div className='flex gap-10 items-center'>
                     <Rating name="read-only" value={2} readOnly precision={0.5} sx={{ fontSize: '2rem' }}  />
                     <span className='font-popins text-[20px] font-medium'>10%</span>
                </div>
                <div className='flex gap-10 items-center'>
                     <Rating name="read-only" value={1} readOnly precision={0.5} sx={{ fontSize: '2rem' }}  />
                     <span className='font-popins text-[20px] font-medium'>40%</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5">
               <p className='text-[20px] font-medium font-popins'>Share your thoughts with others </p>
               <button className='border-[2px] border-[black] px-10 w-[90%] py-2 text-[18px] font-Inter font-medium'>Write a Review</button>
            </div>

        </div>
        
        <div className='w-[60%] flex justify-center'>
               <div className='flex gap-10 flex-col px-10'>
                    <div className='flex flex-col gap-3 border-b-2 pb-10'>
                         <div className='flex gap-5'>
                         <img src="https://dummyimage.com/302x302" alt='profile' className='w-[50px] h-[50px] rounded-full'/>
                         <div>
                              <p className='font-popins text-[20px] font-medium'>John Doe</p>
                              <p className='font-popins text-[18px] font-normal'>2 days ago</p>
                         </div>
                         </div>
                         <Rating name="read-only" value={4} readOnly precision={0.5} sx={{ fontSize: '1.5rem' }} />
                         <p className='font-popins text-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend felis. </p>
                    </div>
                    <div className='flex flex-col gap-3 border-b-2 pb-10'>
                         <div className='flex gap-3'>
                         <img src="https://dummyimage.com/302x302" alt='profile' className='w-[50px] h-[50px] rounded-full'/>
                         <div>
                              <p className='font-popins text-[20px] font-medium'>John Doe</p>
                              <p className='font-popins text-[18px] font-normal'>2 days ago</p>
                         </div>
                         </div>
                         <Rating name="read-only" value={4} readOnly precision={0.5} sx={{ fontSize: '1.5rem' }} />
                         <p className='font-popins text-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend felis. </p>
                    </div>
               </div>

        </div>
        
    </div>
  )
}

export default Reviews
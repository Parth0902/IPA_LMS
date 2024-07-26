import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Silder() {
  return (
    <div className='w-screen z-0 mt-24' style={{height:"50vh"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"

      >
        <SwiperSlide className='w-full h-full bg-orange-800'>Slide1</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-blue-800'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-full bg-green-700'>Slide 1</SwiperSlide>
       
     
      </Swiper>
    </div>
  );
}

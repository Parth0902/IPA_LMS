import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Silder() {
  return (
    <div className='w-screen z-0 mt-[5.1rem]' style={{ height: "70vh" }}>
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
        <SwiperSlide className='w-full h-full bg-black'>
          <img alt='slider1' src='src/Assets/slider/slider1.png' className='object-cover' />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black'>
          <img alt='slider2' src='src/Assets/slider/slider2.png' className='object-cover' />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black'>
          <img alt='slider3' src='src/Assets/slider/slider33.png' className='object-cover'/>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black flex justify-center'>
          <img alt='slider4' src='src/Assets/slider/slider4 (1).png' className='object-contain'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

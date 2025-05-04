import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='w-full z-0 mt-[5.1rem] h-[50vh] sm:h-[60vh] md:h-[70vh]'>
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
          <img
            alt='slider1'
            src='https://IPA-Images.b-cdn.net/Assets/slider/slider1.png'
            className='w-full h-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black'>
          <img
            alt='slider2'
            src='https://IPA-Images.b-cdn.net/Assets/slider/slider2.png'
            className='w-full h-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black'>
          <img
            alt='slider3'
            src='https://IPA-Images.b-cdn.net/Assets/slider/slider3.png'
            className='w-full h-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full bg-black flex justify-center items-center'>
          <img
            alt='slider4'
            src='https://IPA-Images.b-cdn.net/Assets/slider/slider4.png'
            className='max-w-full max-h-full object-contain'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

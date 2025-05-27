import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import data from '../../Assets/staff/data';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';

const OurTeam = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center pb-12">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 font-heading">
                    Know our FDFM faculties
                </h1>
            </div>

            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {data.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
                            <img
                                className="object-cover w-full h-64"
                                src={member.img}
                                alt={member.name}
                            />
                            <div className="text-center py-6">
                                <p className="text-xl text-gray-700 font-bold mb-2">{member.name}</p>
                                <p className="text-base text-gray-400">{member.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default OurTeam;

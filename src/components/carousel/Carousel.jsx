'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import './carousels.css';

const Carousel = ({ CarouselImages = [] }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="section relative flex justify-center items-center h-[460px] overflow-visible mx-auto w-full max-w-[1400px]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-full"
      >
        {CarouselImages.map((image, index) => (
          <SwiperSlide key={index} className="!w-[800px] !h-[460px] rounded-[40px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src={image?.image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;

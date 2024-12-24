'use client';

import React from 'react';
import Map from '../../../../public/images/placeInner/map.svg';
import ImageSlider from '../../../../public/images/placeInner/image.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Landing() {
  const images = [ImageSlider, ImageSlider, ImageSlider, ImageSlider];

  return (
    <>
      <section className="bg-[#f4f1eb] py-[30px] md:py-[60px] place-inner">
        <div className="containers">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="text-[32px] lg:text-[40px] font-[Melodrama-Medium] leading-[28px] md:leading-[35px] text-[--primary-cl]"
            >
           Payyambalam Beach
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="w-[90%] md:w-[75%] mx-auto">
                <p className="text-[14px] font-[Roboto-font-regular] leading-[21px] mt-[20px] text-[--primary-cl]">
                  The Payyambalam Beach is an impeccably maintained destination in Kannur. This secluded location
                  is known for providing one with the opportunity to simply relax or enjoy a family picnic in
                  absolute tranquillity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
              className="flex items-center justify-center gap-8 pt-8"
            >
              <div className="flex items-center gap-4">
                <Image src={Map} alt="Map Icon" className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-[14px] md:text-[16px] font-semibold text-[--primary-cl]">3.5 KM</p>
                  <p className="text-[12px] md:text-[14px] text-gray-600">From Property</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[12px] md:text-[14px] font-[Roboto-font-medium] border border-[#C5A56F] text-[#C5A56F] px-4 py-2 rounded cursor-pointer hover:bg-[#C5A56F] hover:text-white transition-colors duration-300 ease-in-out"
              >
                Google Map Link
              </motion.div>
            </motion.div>

            <div className="mt-[30px] relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{
                  el: '.progress-bar',
                  type: 'progressbar'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper rounded-[16px] w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                      className="relative h-[200px] md:h-[60vh] w-full"
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-center mt-[14px] md:mt-8">
                <div className="progress-bar-container w-[200px] h-[4px] bg-gray-200 overflow-hidden rounded">
                  <div className="progress-bar transition-transform duration-300 ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .progress-bar-container {
          position: relative;
        }
        
        .progress-bar {
          width: 100%;
          height: 100%;
          background-color: #D9D9D9;
          transform-origin: left;
        }
        
        .swiper-pagination-progressbar {
          background-color: #D9D9D9 !important;
        }
        
        .swiper-pagination-progressbar-fill {
          background-color: #0B2639 !important;
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
}

export default Landing;

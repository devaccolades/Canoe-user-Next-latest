'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const StaggeredCarousel = ({ data, router }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 490);
    const [visibleSlides, setVisibleSlides] = useState([]);
    const [isHovered, setHovered] = useState(null)
    const totalSlides = data.length;

    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                speed={1000}
                // navigation={true}
                breakpoints={{
                    320: {  // Mobile devices
                        spaceBetween: 5,
                        slidesPerView: 1,
                    },
                    480: {  // Small tablets and mobile landscape
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    768: {  // Tablets and small desktops
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1024: {  // Desktops
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                    1440: {  // Large desktops
                        spaceBetween: 30,
                        slidesPerView: 5,
                    }
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className='StaggeredCarousel'>
                        <div
                            className="relative w-full custom-height h-[300px] rounded-[11px] overflow-hidden cursor-pointer"
                            onClick={() => router.push(item?.link)}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                backgroundImage: `url(${item?.image?.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-black"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHovered === index ? 0 : 0.3 }}
                                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                            />
                            <motion.div
                                className="h-full w-full text-[--third-cl] flex justify-center p-[16px]"
                                animate={{
                                    alignItems: isHovered === index ? 'flex-end' : 'center',
                                }}
                                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                            >
                                {isHovered === index ? (
                                    <motion.button
                                        className="font-[Roboto-font-medium] text-[14px] p-[4px__16px] w-full rounded-[4px] leading-[26px] hidden md:block"
                                        style={{
                                            background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                                        }}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                                    >
                                        {item?.btnText || 'Explore Now'}
                                    </motion.button>
                                ) : (
                                    <motion.p
                                        className="font-[Roboto-font-medium] text-[22px] lg:text-[20px] text-center leading-[16px] md:leading-[30px] z-10"
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                                    >
                                        {item?.title}
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StaggeredCarousel;
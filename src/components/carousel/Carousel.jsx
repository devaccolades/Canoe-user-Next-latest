'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { config } from 'react-spring';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, useAnimation } from 'framer-motion';

import './carousels.css'
const DynamicCarousel = dynamic(() => import('react-spring-3d-carousel'), {
  ssr: false,
});

const SLIDE_INTERVAL = 4000;

const Carousel = ({ CarouselImages = [] }) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prevSlide) => (prevSlide + 1) % CarouselImages.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [CarouselImages.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      setGoToSlide((prevSlide) => (prevSlide - 1 + CarouselImages.length) % CarouselImages.length);
    } else if (info.offset.x < -100) {
      setGoToSlide((prevSlide) => (prevSlide + 1) % CarouselImages.length);
    }
    controls.start({ x: 0 });
  };

  const slides = useMemo(
    () =>
      CarouselImages.map((image, index) => ({
        key: index,
        content: (
          <motion.div
            className="cards relative w-[800px] h-[460px] -mx-[300px] rounded-[40px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            <Image
              src={image?.image}
              alt={`Luxury Room ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={80} 
              priority={index === goToSlide} 
              className="rounded-[20px]"
            />
          </motion.div>
        ),
        onClick: () => setGoToSlide(index),
      })),
    [CarouselImages, goToSlide, controls]
  );

  return (
    <section
      className="section h-[460px] relative DynamicCarousel"
    >
      {isMounted && (
        <DynamicCarousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={3}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      )}
    </section>
  );
};

export default Carousel;

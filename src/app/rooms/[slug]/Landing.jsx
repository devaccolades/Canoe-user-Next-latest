'use client'

import Carousel from "@/components/carousel/Carousel";
import React from "react";
import { motion } from "framer-motion"; 

function HeroSection({ CarouselImages }) {
  return (
    <section className="bg-[--primary-cl] room-inner-bg pb-[60px] text-center">
      <motion.h1
        className="text-[36px] md:text-[48px] lg:text-[64px] font-[Melodrama-Medium] leading-[40px] md:leading-[56px] w-[90%] mx-auto md:w-auto pt-[30px] py-[16px] md:py-[30px]"
        style={{
          background: "linear-gradient(180deg, #cb964e 0%, #b9813a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "2px",
        }}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }} 
      >
      Jr. Suite Double Rooms
      </motion.h1>
      <motion.p
        className="text-[12px] md:text-[14px] font-[Roboto-font-regular] leading-[18px] md:leading-[21px] text-[--third-cl] mb-[10px] w-[90%] md:w-[550px] mx-auto"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.5 }} 
      >
       Our Jr. Suites offer a perfect combination of elegance and serenity. Unwind in the spacious and soothing
ambience of our Jr. Suite rooms that are designed to make your stay both comfortable and enjoyable.
Balcony gives great panoramic view of Kannur city.
      </motion.p>
      <motion.div
        className="pt-[30px] md:pt-[60px] containers overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: 20 }} 
        transition={{ duration: 0.5 }} 
      >
        <Carousel CarouselImages={CarouselImages} />
      </motion.div>
    </section>
  );
}

export default HeroSection;

'use client'


import React from "react";
import { motion } from "framer-motion"; 

function HeroSection() {
  return (
    <section className="bg-[--primary-cl] py-[60px]">
      <div className="containers flex flex-col gap-[20px]">
        <motion.h1
          className="text-[48px] lg:text-[60px] font-[Melodrama-Medium] leading-[48px] md:leading-[69px] text-center"
          style={{
            background: "linear-gradient(180deg, #cb964e 0%, #b9813a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
          }}
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          Savor Exquisite Flavors <br /> in Every Bite
        </motion.h1>
        
        <motion.p
          className="md:w-[619px] mx-auto text-center font-[Roboto-font-regular] text-[14px] leading-[21px] text-white"
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
        >
          where exceptional cuisine meets elegant ambiance. Experience a
          culinary journey like no other, with dishes crafted from the finest
          ingredients, inspired by local and global flavors. Indulge in a dining
          experience that will awaken your senses.
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;

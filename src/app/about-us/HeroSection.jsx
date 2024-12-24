'use client'

import Carousel from "@/components/carousel/Carousel";
import React from "react";
import { motion } from "framer-motion";

function HeroSection({ CarouselImages }) {
    return (
        <section className='about-us bg-[--primary-cl] about-us-bg pb-[60px] text-center'>
            <motion.p
                className="text-[16px] md:text-[20px] lg:text-[24px] font-[cavet-regular] leading-[24px] mb-[10px] text-[--third-cl] pt-[20px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Us
            </motion.p>
            <motion.h1
                className="text-[36px] md:text-[48px] lg:text-[64px] font-[Melodrama-Medium] leading-[40px] md:leading-[56px] mb-[10px] md:mb-[16px] lg:mb-[30px] w-[90%] mx-auto md:w-auto "
                style={{
                    background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '2px'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                It Is The Perfect Escape
            </motion.h1>
            <motion.p
                className="paragraph text-[12px] md:text-[14px] font-[Roboto-font-regular] leading-[18px] md:leading-[21px] text-[--third-cl] mb-[10px] w-[1042px] mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                The Hotel CANOE is full Service Business Class Hotel located in heart of Kannur, just at a stone’s
                throw from the main gate near the Kannur Railway Station. The hotel is especially suited to the needs
                of the business traveler who expects best value for his hard-earned money. The very proximity of the hotel to the railway Station is an advantage when every second counts in the life of the businessman on commercial mission. To crown it all, direct independent internet access keeps you in touch with all who matter to you and your business.
            </motion.p>
            <motion.div
                className='pt-[30px] md:pt-[60px] containers overflow-hidden'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <Carousel CarouselImages={CarouselImages} />
            </motion.div>
        </section>
    )
}

export default HeroSection;

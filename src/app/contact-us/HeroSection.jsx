'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
// Image
import heroPcImage from '../../../public/images/contact/pc-bg-image.svg';
import heroMobileImage from '../../../public/images/contact/mobile-bg-image.svg';
// Icons
import locationIcon from '../../../public/icon/locationicon.svg';

function HeroSection() {
    const distance = [
        { distance: "400 Mtr", info: "From Railway Station" },
        { distance: "800 Mtr", info: "From Bus Stand" },
        { distance: "29 Km", info: "From Airport" },
    ];
    
    return (
        <section className='contact bg-[--primary-cl] w-full'>
            <motion.h1
                className="heading text-[48px] lg:text-[60px] font-[Melodrama-Medium] leading-[48px] md:leading-[69px] text-center pt-[40px] md:pt-[100px]"
                style={{
                    background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '2px'
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Easy To Reach
            </motion.h1>

            <motion.p
                className='text-[12px] lg:text-[14px] font-[Roboto-font-medium] leading-[18px] md:leading-[21px] text-white text-center w-[80%] md:w-[70%] lg:w-[750px] mx-auto pt-[20px] py-[30px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                Experience the urban charm of our Premier City View Suite,
                featuring panoramic views of the bustling city skyline,
                modern decor, and a private balcony perfect for relaxation.
            </motion.p>

            <motion.div
                className='custom-grid flex flex-row flex-wrap justify-center w-[90%] md:w-[80%] lg:w-[750px] mx-auto'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {distance.map((item, index) => (
                    <Distance item={item} key={index} />
                ))}
            </motion.div>

            <motion.div
                className='flex justify-center items-center containers'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
            >
                <Image src={heroPcImage} className='hidden md:block' alt='here-image' />
                <Image src={heroMobileImage} className='block md:hidden' alt='here-image' />
            </motion.div>
        </section>
    );
}

export default HeroSection;

const Distance = ({ item }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className='distance-card flex flex-row w-1/3 gap-[18px] md:gap-[24px] items-center justify-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <Image src={locationIcon} className='w-[24px] md:w-[32px] h-[24px] md:h-[32px]' alt='location-icon' />
            <div className='flex flex-col gap-[4px] text-container text-white'>
                <h5 className='font-[space-grotesk-semibold] text-[12px] md:text-[16px]'>{item?.distance}</h5>
                <p className='font-[Roboto-font-regular] text-[10px] md:text-[12px] leading-[18px]'>{item?.info}</p>
            </div>
        </motion.div>
    );
};

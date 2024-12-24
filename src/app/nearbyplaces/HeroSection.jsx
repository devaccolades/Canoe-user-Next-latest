'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion'; 

// Images
import Image1 from '../../../public/images/nearbyplaces/image1.jpeg';
import Image2 from '../../../public/images/nearbyplaces/image2.jpeg';
import Image3 from '../../../public/images/nearbyplaces/image3.jpeg';
import Image4 from '../../../public/images/nearbyplaces/image4.jpeg';
import Image5 from '../../../public/images/nearbyplaces/image5.jpeg';

const StaggeredCarousel = dynamic(() => import('@/components/carousel/StaggeredCarousel'),{ ssr: false, loading: () => <></> });

function HeroSection() {
    const router = useRouter();
    const data = [
        { image: Image1, title: "Beaches", link: "/places" },
        { image: Image2, title: "Temples", link: "/places" },
        { image: Image3, title: "Historical Places", link: "/places" },
        { image: Image4, title: "Hilltops", link: "/places" },
        { image: Image5, title: "Wild Life", link: "/places" },
    ];

    return (
        <section className='nearby-placess bg-[--primary-cl] relative nearbyplace-bg z-0 pb-[30px] md:pb-[60px]'>
            <motion.h1
                className="heading text-[48px] lg:text-[60px] font-[Melodrama-Medium] leading-[48px] md:leading-[69px] text-center pt-[10px] md:pt-[95px] mb-[8px] z-10 w-[90%] mx-auto md:w-full"
                style={{
                    background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '2px'
                }}
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} 
            >
                Nearby Attractions
            </motion.h1>

            <motion.p
                className="text-[12px] lg:text-[14px] font-[Roboto-font-regular] leading-[18px] md:leading-[21px] text-center text-[--third-cl] mb-[10px]  w-[80%] md:w-[70%] lg:w-[630px] mx-auto  md:pb-[40px]"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
            >
                with 34 well designed and spacious rooms for all kind of travellers coming to Kannur.
                The hotel is also having a facility of Multi-Cuisine Restaurant, fitness Centre, Swimming Pool.
            </motion.p>

            <div className='w-[60%] md:w-[80%] mx-auto mt-[20px] lg:mt-0'>
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.8, delay: 0.4 }} 
                >
                    <StaggeredCarousel data={data} router={router} />
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;

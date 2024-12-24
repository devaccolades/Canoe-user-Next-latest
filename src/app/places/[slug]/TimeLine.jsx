"use client"
import React from 'react'
import pointsIcon from '../../../../public/images/placeInner/points.svg'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

function TimeLine() {
    const placeItems = [
        { title: "Clean Sandy Shoreline", description: "The beach boasts a long stretch of pristine, golden sands ideal for relaxation, sunbathing, and beach sports." },
        { title: "Public Restrooms", description: "The beach has clean public restrooms, ensuring comfort for visitors, especially families and large groups." },
        { title: "Life Guards and Safety", description: "To ensure safety, the beach is patrolled by lifeguards, and there are safety flags and guidelines for swimmers." },
        { title: "Children’s Park", description: "Families can enjoy a children’s park located near the beach, equipped with swings, slides, and other play equipment, making it a perfect spot for kids." },
        { title: "Food Stalls and Cafeterias", description: "Several food stalls and small eateries are available near the beach, offering local snacks, beverages, and seafood." },
        { title: "Boating and Water Sports", description: "Visitors can enjoy boating and some water sports activities, including paddle boats and kayaking." },
        { title: "Walking Promenade", description: "A well-maintained promenade along the beach is ideal for morning or evening walks, with scenic views of the Arabian Sea and the horizon." },
        { title: "Parking Facilities", description: "There is ample parking space available near the beach, allowing visitors to conveniently park their vehicles." },
        { title: "Memorials and Monuments", description: "The beach is home to the beautiful sculpture Mother and Child by renowned sculptor Kanayi Kunhiraman, as well as a dedicated space for honoring the freedom fighters of Kerala." },
    ];

    const fadeVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3 }
        }),
    };

    return (
        <section className='bg-[#f4f1eb] pb-[50px] '>
            <div className='containers flex flex-col gap-[40px] md:gap-[80px]'>
                <h1 className='text-[24px] md:text-[32px] leading-[30px] md:leading-[32px] font-[Melodrama-Medium] text-center'>
                    Reasons Why You Should Visit Payyambalam Beach
                </h1>

                <div className='flex flex-col'>
                    {placeItems.map((item, index) => {
                        const ref = React.useRef(null);
                        const isInView = useInView(ref, { once: true });

                        return (
                            <motion.div
                                ref={ref}
                                key={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                custom={index}
                                variants={fadeVariants}
                                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} w-full`}
                            >
                                <div className='w-full' />
                                <div className='w-[100px] flex flex-col justify-start items-center'>
                                    <Image src={pointsIcon} width={19} height={19} alt='' />
                                    {index !== placeItems.length - 1 && <div className='line-draw-animation w-[1px] h-full bg-green-800' />}
                                </div>
                                <div className={`text-[--primary-cl] w-full flex flex-col gap-[8px] pb-[32px] ${index % 2 === 0 ? "items-start text-left" : "items-end text-right"}`}>
                                    <p className='text-[14px] md:text-[16px] font-[Roboto-font-medium] leading-[18px] md:leading-[24px]'>{item.title}</p>
                                    <p className='text-[12px] md:text-[14px] leading-[19px] md:leading-[21px] font-[Roboto-font-regular] lg:w-[380px]'>{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TimeLine;

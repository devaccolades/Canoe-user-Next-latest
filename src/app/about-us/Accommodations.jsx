'use client'


import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Icons
import facilities1 from '../../../public/icon/facilities1.svg';
import facilities2 from '../../../public/icon/facilities2.svg';
import facilities3 from '../../../public/icon/facilities3.svg';
import facilities4 from '../../../public/icon/facilities4.svg';
import facilities5 from '../../../public/icon/facilities5.svg';
import facilities6 from '../../../public/icon/facilities6.svg';
import facilities7 from '../../../public/icon/facilities7.svg';
import facilities8 from '../../../public/icon/facilities8.svg';
import facilities9 from '../../../public/icon/facilities9.svg';
import facilities10 from '../../../public/icon/facilities10.svg';
import facilities11 from '../../../public/icon/facilities11.svg';
import facilities12 from '../../../public/icon/facilities12.svg';
import policyIcon from '../../../public/icon/policy.svg';

function Accommodations() {
    const facilitiesData = [
        { icon: facilities1, title: "MULTI CUISINE RESTAURANT" },
        { icon: facilities2, title: "AYURVEDA" },
        { icon: facilities3, title: "SHOPPING AREA" },
        { icon: facilities4, title: "24 HOURS WORKING COFFEE SHOP" },
        { icon: facilities5, title: "FITNESS CENTRE" },
        { icon: facilities6, title: "TRAVEL DESK ASSISTANCE" },
        { icon: facilities7, title: "SWIMMING POOL" },
        { icon: facilities8, title: "ADEQUATE PARKING FACILITY" },
        { icon: facilities9, title: "MODERN SECURITY SYSTEMS" },
        { icon: facilities10, title: "CCTV" },
        { icon: facilities11, title: "24 X 7 POWER BACK UP" },
        { icon: facilities12, title: "FIRE & SAFETY MEASURES" },
    ];

    const roomPolicy = [
        { title: "Cancellation Policy", description: "Free cancellation up to 48 hours before check-in. A charge equivalent to one night’s stay will be applied for late cancellations or no-shows." },
        { title: "Pet Policy", description: "Pets are allowed with prior notification. A $50 fee applies per stay." },
        { title: "Smoking Policy", description: "This is a non-smoking room. A cleaning fee of Rs 200/-  will be charged for violations." }
    ];

    return (
        <section className='bg-[#F4F1EB] py-[30px] md:py-[60px]'>
            <div className='containers flex flex-col gap-[30px]'>
                <AnimatedSection delay={0.2}>
                    <div className='flex flex-col gap-[8px]'>
                        <h5 className='text-[20px] md:text-[24px] font-[Roboto-font-regular] text-[--primary-cl]'>Accommodations</h5>
                        <p className='text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] font-[Roboto-font-medium] md:w-10/12 text-[--primary-cl]'>
                            The Hotel features 32 modern, tastefully furnished rooms that include 28 Deluxe rooms &amp; 4 Junior Suite rooms. The rooms are complemented with new age furnishing and welcoming amenities that offer an ideal environment for the savvy traveler.
                        </p>
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <h5 className='text-[20px] md:text-[24px] font-[Roboto-font-regular] pt-[40px] text-[--primary-cl]'>Our Facilities</h5>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]'>
                            {facilitiesData.map((item, index) => (
                                <FacilitiesCard item={item} key={index} />
                            ))}
                        </div>
                    </div>
                    <hr className="w-full h-[1px] bg-transparent border-none mt-[30px] md:mt-[60px]" style={{
                        backgroundImage: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)'
                    }} />
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                    <div className='text-[--primary-cl] flex flex-col gap-[20px]'>
                        <h5 className='text-[20px] md:text-[24px] font-[Roboto-font-regular]'>Room Policies</h5>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px]'>
                            {roomPolicy.map((item, index) => (
                                <RoomPolicyCard item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

export default Accommodations;

// Component to trigger animations when visible
export const AnimatedSection = ({ children, delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

export const FacilitiesCard = ({ item }) => (
    <AnimatedSection delay={0.2}>
        <div className='flex flex-row gap-[10px] p-[10px] items-center'>
            <Image src={item?.icon} alt={item?.title} />
            <h5 className='text-[--primary-cl] font-[Roboto-font-Bold] text-[14px] leading-[21px]'>{item?.title}</h5>
        </div>
    </AnimatedSection>
);

export const RoomPolicyCard = ({ item }) => (
    <AnimatedSection delay={0.2}>
        <div className='flex flex-row gap-[10px] items-start'>
            <Image src={policyIcon} alt='offer-image-icon' />
            <div className='flex flex-col gap-[8px]'>
                <h6 className='font-[Roboto-font-Bold] text-[14px]'>{item?.title}</h6>
                <p className='font-[Roboto-font-regular] text-[14px] leading-[21px] w-full description'>{item?.description}</p>
            </div>
        </div>
    </AnimatedSection>
);

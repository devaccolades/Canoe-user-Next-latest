'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import offersIcon from '../../../public/icon/offers.svg'
import Image from 'next/image'
import './form.css'

function Offers() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) // Trigger animation only once when in view

    return (
        <motion.section
            ref={ref}
            className='offer containers py-[30px] md:py-[60px] text-[--primary-cl] flex flex-col gap-[20px]'
            initial={{ opacity: 0, y: 30 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to final state when in view
            transition={{ duration: 1, delay: 0.5 }} // Animation settings
        >
            <h5 className='text-[20px] md:text-[24px] font-[Roboto-font-regular]'>Special Offers</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px]'>
                {offer.map((item, index) => (
                    <OfferCard item={item} key={index} />
                ))}
            </div>
        </motion.section>
    )
}

export default Offers

export const OfferCard = ({ item }) => {
    return (
        <div className='flex flex-row gap-[10px] items-start'>
            <Image src={offersIcon} alt='offer-image-icon' />
            <div className='flex flex-col gap-[8px]'>
                <h6 className='font-[Roboto-font-Bold] text-[14px]'>{item?.title}</h6>
                <p className='font-[Roboto-font-regular] text-[14px] leading-[21px] w-full description'>{item?.description}</p>
            </div>
        </div>
    )
}

// Dummy offers data
const offer = [
    { title: "Urban Escape Package", description: "Includes complimentary breakfast for two, a bottle of wine, and tickets to a city tour for Rs 399/-  additional per night." },
    { title: "Stay 4, Pay 3", description: "Book 4 nights and only pay for 3. Offer valid for stays until October 31." },
    { title: "Stay 4, Pay 3", description: "Book 4 nights and only pay for 3. Offer valid for stays until October 31." },
]

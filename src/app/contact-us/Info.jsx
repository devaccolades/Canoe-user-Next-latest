'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

// Icons
import homeIcon from '../../../public/icon/home.svg'
import phoneIcon from '../../../public/icon/phone.svg'
import emailIcon from '../../../public/icon/email.svg'

function Info() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) 

    return (
        <motion.section
            ref={ref}
            className='address-contanier bg-white w-full containers contact-info'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1.5, delay: 0.6 }} 
        >
            <div className='flex flex-col gap-[20px] custom-gap md:grid md:grid-cols-[341px,1fr] pt-[30px] pb-[40px] md:pt-[60px] md:pb-[60px]'>
                <div className='flex flex-col gap-[8px] font-[Roboto-font-medium] justify-center'>
                    <h6 className='text-[15px] text-[--secondary-cl]'
                        style={{
                            background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Address
                    </h6>
                    <div className='addres flex flex-row md:flex-col gap-[8px]'>
                        <div className='flex flex-row gap-[8px] items-start'>
                            <Image src={homeIcon} alt='home-icon' />
                            <p className='text-[15px] leading-[24px] pb-[20px] font-[Epilogue-Regular] text-[--primary-cl] w-[200px]'>
                                Near City Centre, Fort
                                Road, Kannur - 670 001
                                Kerala, India
                            </p>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex flex-row gap-[8px] items-start'>
                                <Image src={phoneIcon} alt='phone-icon' />
                                <p className='text-[15px] leading-[24px] font-[Epilogue-Regular] text-[--primary-cl] w-[200px]'>
                                    (+91) 9526849997
                                </p>
                            </div>
                            <div className='flex flex-row gap-[8px] items-start'>
                                <Image src={emailIcon} alt='email-icon' />
                                <p className='text-[15px] leading-[24px] font-[Epilogue-Regular] text-[--primary-cl] w-[200px]'>
                                    reservationscanoe@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        className='h-[287px] w-full rounded-[16px] iframe'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20915.585624186195!2d75.37059182420091!3d11.87305455519012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4239e8534c081%3A0xb22757f6e562a546!2sThe%20Hotel%20Canoe!5e0!3m2!1sen!2sin!4v1729597624811!5m2!1sen!2sin"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <hr className="w-full h-[1px] bg-transparent border-none" style={{
                backgroundImage: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)'
            }} />
        </motion.section>
    )
}

export default Info

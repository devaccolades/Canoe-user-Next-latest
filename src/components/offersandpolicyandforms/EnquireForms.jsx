'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Image from 'next/image';

// Icon
import personIcon from '../../../public/icon/person.svg'
import errorIcon from '../../../public/icon/error.svg'
import './form.css'

function EnquireForms() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) // Trigger animation only once when in view

    return (
        <motion.section
            ref={ref}
            className='form containers pb-[60px] flex flex-col gap-[20px] md:gap-[30px]'
            initial={{ opacity: 0, y: 30 }} // Initial state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to final state when in view
            transition={{ duration: 1, delay: 0.5 }} // Animation settings
        >
            <h6 className='font-[Roboto-font-regular] text-[18px] md:text-[24px] text-[--primary-cl]'>Enquire Now</h6>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[20px] md:gap-y-[30px]'>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>Your Name</p>
                        <input type="text"
                            className='rounded-[12px] h-[42px] w-full bg-[#F6F6F6] placeholder:font-[Roboto-font-regular] placeholder:text-[14px] placeholder:text-[#666666] ps-[20px] focus:outline-none'
                            placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>Phone number</p>
                        <PhoneInput
                            country={'in'}
                            containerClass='border-none'
                        />
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>Email ID</p>
                        <input type="email"
                            className='rounded-[12px] h-[42px] w-full bg-[#F6F6F6] placeholder:font-[Roboto-font-regular] placeholder:text-[14px] placeholder:text-[#666666] ps-[20px] focus:outline-none'
                            placeholder='Enter email address' />
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>Guests</p>
                        <div className='flex flex-row ps-[20px] gap-[10px] bg-[#F6F6F6] rounded-[12px] h-[42px]'>
                            <Image src={personIcon} alt='person-icon' />
                            <input type="number"
                                className='rounded-[12px] w-full bg-[#F6F6F6] placeholder:font-[Roboto-font-regular] placeholder:text-[14px] placeholder:text-[#666666] focus:outline-none'
                                placeholder='Total number of peoples' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>From</p>
                        <div className='bg-[#F6F6F6] pe-[10px] rounded-[14px]'>
                            <input type="date"
                                className='rounded-[12px] text-[#666666] h-[42px] w-full bg-[#F6F6F6] placeholder:font-[Roboto-font-regular] placeholder:text-[14px] placeholder:text-[#666666] ps-[20px] focus:outline-none'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <p className='text-[#666666] font-[Roboto-font-regular] text-[14px] text-[--primary-cl]'>To</p>
                        <div className='bg-[#F6F6F6] pe-[10px] rounded-[14px]'>
                            <input type="date"
                                className='rounded-[12px] text-[#666666] h-[42px] w-full bg-[#F6F6F6] placeholder:font-[Roboto-font-regular] placeholder:text-[14px] placeholder:text-[#666666] ps-[20px] focus:outline-none'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap w-full pt-[40px] submit-container'>
                    <div className='flex flex-row gap-[8px] items-center'>
                        <Image src={errorIcon} alt='error-icon' />
                        <p className='font-[Roboto-font-Bold] text-[12px] text-[--primary-cl]'>Usually get response in 1hrs</p>
                    </div>
                    <button
  type='submit'
  className='font-[Roboto-font-medium] text-[14px] text-white p-[10px_20px] rounded-[4px] transition-colors duration-150 ease-out'
  style={{ background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)' }}
  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #e0aa4e 0%, #d4953a 100%)'}
  onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)'}
>
  Send Enquiry
</button>
                </div>
            </form>
        </motion.section>
    )
}

export default EnquireForms

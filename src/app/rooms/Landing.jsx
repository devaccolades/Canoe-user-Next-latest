'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Images
import image1 from '../../../public/images/rooms/image1.jpg'
import image2 from '../../../public/images/rooms/image2.jpg'
import image3 from '../../../public/images/rooms/image3.jpg'
import image4 from '../../../public/images/rooms/image4.jpg'
import image5 from '../../../public/images/rooms/image5.jpg'
import ratingImage from '../../../public/images/rooms/rate.svg'
import { useRouter } from 'next/navigation'

function Landing() {
  const router = useRouter()
  const roomsData = [
    {
      image: image1,
      rates: 'Rs. 5999+GST',
      title: 'Jr. Suite Double Rooms',
      rate: ratingImage,
      description:
        'Our Jr. Suites offer a perfect combination of elegance and serenity. Unwind in the spacious and soothing ambience of our Jr. Suite rooms that are designed to make your stay both comfortable and enjoyable. Balcony gives great panoramic view of Kannur city.'
    },
    {
      image: image2,
      rates: 'Rs.3999+GST',
      title: 'Deluxe Double Rooms',
      rate: ratingImage,
      description:
        'Our elegantly designed deluxe rooms offer all the luxury, comfort and convenience that a guest requires. The rooms are individually decorated and have either twin beds and king sized double beds. The soothing decor gives you a feeling of peace and relaxation and the hospitality gives you a sense of home away from home.'
    },
  ];

  return (
    <>
      <style jsx>{`
        .room-card-shadow:hover {
          box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
      `}</style>
    
      <section className='bg-[#F4F1EB]'>
        <div className="containers mx-auto">
          <div className='py-[50px]'>
            <div className='text-center'>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-[20px] md:text-[24px] font-[cavet-regular] leading-[25px] text-[--primary-cl]'
              >
                Featured Rooms
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-[38px] mt-2 md:text-[40px] font-[Melodrama-Medium] leading-[35px] text-[--primary-cl]'
              >
                Room Categories
              </motion.h2>
            </div>
            <div className='listing pt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] lg:gap-[40px]'>
              {roomsData.map((room, index) => (
                <RoomCard room={room} key={index} router={router} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;

const RoomCard = ({ room, router, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className='bg-white rounded-2xl room-card-shadow transition-shadow duration-300 flex flex-col h-full'
    >
      <div className='p-3 pb-5 flex flex-col h-full'>
        <div className='overflow-hidden rounded-lg'>
          <Image
            src={room.image}
            alt={room.title}
            className='w-full h-[250px] object-cover transition-transform duration-300 hover:scale-110'
          />
        </div>
        
        <div className='flex flex-col flex-grow mt-4 px-2'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='text-[16px] lg:text-[20px] font-[Roboto-font-medium] text-[--primary-cl]'>{room.title}</h3>
            <p className='text-[12px] md:text-[16px] font-[Roboto-font-medium] text-[#CB964E] whitespace-nowrap'>
              {room.rates}
            </p>
          </div>
          
          <div className='flex items-center mb-3'>
            <Image
              src={room.rate}
              alt="Rating"
              width={68}
              height={12}
            />
            <p className='ml-2 text-[#B0B2B8] text-[15px] font-[Roboto-font-regular]'>4.5 (210)</p>
          </div>

          <div className='flex-grow mb-4'>
            <p className='text-[14px] leading-[21px] text-[--primary-cl] font-[Roboto-font-regular]'>{room.description}</p>
          </div>

          <div className='flex gap-3 mt-auto'>
            <button
              className='flex-1 py-[10px] px-[16px] text-[14px] md:text-[16px] font-[Roboto-font-medium] text-[#CB964E] border border-transparent hover:bg-[#B9813A] hover:text-white transition-colors duration-300 rounded'
              style={{
                background: `
                  linear-gradient(#fff, #fff) padding-box,
                  linear-gradient(180deg, #CB964E 0%, #B9813A 100%) border-box
                `
              }}
              onClick={() => router.push('/rooms/test')}
            >
              Read More
            </button>

            <button
              className='flex-1 py-[10px] px-[16px] text-[14px] md:text-[16px] font-[Roboto-font-medium] text-white rounded transition-colors duration-300'
              style={{
                background: 'linear-gradient(180deg, #CB964E 0%, #B9813A 100%)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #E0AA4E 0%, #D4953A 100%)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #CB964E 0%, #B9813A 100%)'}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Icons
import icon from "../../../public/images/testimonial/icon.svg";
import star from "../../../public/images/testimonial/rate.svg";
import star1 from "../../../public/images/testimonial/rate1.svg";
import star2 from "../../../public/images/testimonial/rate2.svg";


// Images
import image from "../../../public/images/testimonial/photo.svg";

function Landing() {
  const data = [
    {
      icon: icon,
      description:
        "We arrived the hotel on time and the staff gave a warm welcome and allotted the room with out delay. The whole ambiance is very good. Rooms are neat and clean. Excellent breakfast. Staffs are cooperative. Near to kannur railway station. Recommend to everyone without any hesitation.",
      review: star,
  
      photo: image,
      name: "RAJU A",
      place: "Deluxe Room",
    },
    {
      icon: icon,
      description:
        "Good. Hats off to the deluxe class interior, arrangement and clenlyness. Nearer to the bus stand. And railway station. Clean. Tasty and delicious food. Impressed by the hearty prompt service. Good keep it up. Bright future ahead for you.",
      review: star1,
    
      photo: image,
      name: "SATHEESH",
      place: "Deluxe Room",
    },
    {
      icon: icon,
      description:
        "Located centrally. Hardly 100 mts from rely station. Food is not too spicy and of very good quality. They even offer to help if you have any food preferences. In my case it was an allergy. Assistance from front office was exemplary. Though centrally located, the ambience is one of quietness. Hygiene is of high standards. Stayed for three days with my wife on personal work.",
      review: star2,

      photo: image,
      name: "C P",
      place: "Deluxe Room",
    },
    {
      icon: icon,
      description:
        "This place has everything you need in a hotel stay. Great location, great food and great service. The rooms were very clean and had all necessary amenities. The staff super courteous and friendly. Location and huge parking were a plus too.",
      review: star,
  
      photo: image,
      name: "SRISHTI B",
      place: "Family Suite",
    },
    {
      icon: icon,
      description:
        "Experience at the hotel was fantastic very calm and less noisy place. Every desired shop and mall was close by and with taxi/autos is available right in front, as soon as you get down from the hotel, hailing a auto is a common hassle out there. Food was very tasty and enjoyed my stay there as solo traveller. Very safe and secure, and the hospitality team was very protective and kind.",
      review: star1,
    
      photo: image,
      name: "NOORAH M",
      place: "Deluxe Room",
    },
    {
      icon: icon,
      description:
        "The stay at hotel canoe was amazing. Location is conveniently in the heart of the city and very close to the beach. Rooms were spacious and classy. All the staff were pleasant and helpful.",
      review: star2,
 
      photo: image,
      name: "LITTY L",
      place: "Deluxe Room",
    },
  ];

  return (
    <>
      <section className="bg-[#f4f1eb] pt-[60px] pb-[60px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h1
              className="text-[40px] font-[Melodrama-regular] leading-[35px] text-[--primary-cl]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Testimonials
            </motion.h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            modules={[Pagination]}
            className="testimonial-swiper"
            style={{ paddingBottom: "50px" }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-full"
                >
                  <TestimonialCard item={item} key={index} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background-color: #d9d9d9;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #000000;
          transform: scale(1.2);
        }

        .swiper-slide {
          height: auto !important;
        }

        .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </>
  );
}

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-8 h-8 mb-4">
          <Image src={item.icon} alt="Quote icon" fill className="object-contain" />
        </div>
        <div className="flex-grow overflow-y-auto mb-6">
          <p className="leading-[24px] text-[14px] text-[--primary-cl] text-left">
            {item.description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center" style={{ gap: "5px" }}>
              <div className="relative" style={{ width: "68px", height: "12px" }}>
                <Image src={item.review} alt="Rating" fill className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-4">
              <Image src={item.photo} alt={item.name} fill className="rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-[16px] text-[--primary-cl] uppercase font-medium">{item.name}</h3>
              <p className="text-[10px] text-[--primary-cl]">{item.place}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
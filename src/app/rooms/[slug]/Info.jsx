
"use client"; 
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion"; 

import first from "../../../../public/images/room-inner/1.svg";
import second from "../../../../public/images/room-inner/2.svg";
import third from "../../../../public/images/room-inner/3.svg";
import star from "../../../../public/images/room-inner/star.svg";
import policys from "../../../../public/images/room-inner/policy.svg";

function Info() {
  const data = [
    {
      image: first,
      title: "Bed Size",
      description: "King-size Bed",
      delay: 0.2, 
    },
    {
      image: second,
      title: "Room Size",
      description: "424 Sq.ft.",
      delay: 0.1, 
    },
    {
      image: third,
      title: "Occupancy",
      description: "Up to 3 adults",
      delay: 0, 
    },
  ];

  const amenities = [
    { image: star, description: "49 Inches’ TV" },
    { image: star, description: "Free Wi-Fi" },
    {
      image: star,
      description: 'Tea/Coffee Maker',
    },
    {
      image: star,
      description: "Mini Refrigerator",
    },
    {
      image: star,
      description: "24*7 Running Hot& Cold Water",
    },
    { image: star, description: "Room Service" },
    { image: star, description: "Laundry Services" },
    { image: star, description: "1 Ltr bottled water" },
    {
      image: star,
      description: "Shaving Set & Dental Kit",
    },
    { image: star, description: 'Hair Dryer' },
    { image: star, description: "Iron Box & Board" },

    { image: star, description: "Dressing Table with Chair" },

    { image: star, description: "Bathroom Supplies" },

    { image: star, description: "Bathrobe" },

    { image: star, description: "Balcony" },

  ];

  const policy = [
    {
      image: policys,
      title: "Cancellation Policy",
      description:
        "Free cancellation up to 48 hours before check-in. A charge equivalent to one night’s stay will be applied for late cancellations or no-shows.",
    },
    {
      image: policys,
      title: "Pet Policy",
      description:
        "Pets are allowed with prior notification. A $50 fee applies per stay.",
    },
    {
      image: policys,
      title: "Smoking Policy",
      description:
        "This is a non-smoking room. A cleaning fee of Rs 200/- will be charged for violations.",
    },
  ];

  const refRoomFeatures = useRef(null);
  const refAmenities = useRef(null);
  const refPolicies = useRef(null);

  const isRoomFeaturesInView = useInView(refRoomFeatures, { once: false });
  const isAmenitiesInView = useInView(refAmenities, { once: false });
  const isPoliciesInView = useInView(refPolicies, { once: false });

  return (
    <section className="bg-[#f4f1eb] room-features">
      <div className="containers mx-auto py-[30px] md:py-[60px]">

        <motion.h2
          ref={refRoomFeatures}
          className="text-[20px] md:text-[24px] font-[Roboto-font-regular] text-[#1B1B1E]"
          initial={{ opacity: 0, y: -20 }}
          animate={isRoomFeaturesInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Room Features
        </motion.h2>

        <div className="grid grid-cols-3 md:flex md:flex-row md:flex-wrap justify-between gap-[10px] md:gap-[20px] lg:gap-8 items-center min-h-[120px]">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row h-full md:gap-[20px] lg:gap-[30px] items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isRoomFeaturesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: item.delay }} 
            >
              <div className="flex justify-center items-center flex-shrink-0 relative w-[60px] h-[60px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-contain card-image"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col text-center md:text-start">
                <h2 className="text-[#1B1B1E] text-[14px] md:text-[20px] lg:text-[24px] leading-[25px] font-[space-grotesk-semibold]">
                  {item.title}
                </h2>
                <p className="text-[#1B1B1E] text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] font-[Roboto-font-regular]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderImage: "linear-gradient(180deg, #CB964E 0%, #B9813A 100%) 1",
          }}
          className="w-full opacity-25 my-[30px] md:my-[60px]"
        ></div>

        
        <motion.div
          ref={refAmenities}
          initial={{ opacity: 0, y: -20 }}
          animate={isAmenitiesInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[20px] md:text-[24px] font-[Roboto-font-regular] text-[#1B1B1E] mb-6">
            Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start pr-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isAmenitiesInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 relative w-[24px] h-[24px] mt-0.5">
                  <Image
                    src={item.image}
                    alt="amenity icon"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>
                <p className="text-[#1B1B1E] font-[Roboto-font-regular] text-[16px] ml-[16px] leading-[28px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderImage: "linear-gradient(180deg, #CB964E 0%, #B9813A 100%) 1",
          }}
          className="w-full opacity-25 my-[30px] md:my-[60px]"
        ></div>

      

        <motion.div
          ref={refPolicies}
          initial={{ opacity: 0, y: -20 }}
          animate={isPoliciesInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[20px] md:text-[24px] font-[Roboto-font-regular] text-[#1B1B1E] leading-[25px] mb-6">
            Room Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px]">
            {policy.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-row gap-[10px] items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isPoliciesInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }} 
              >
                <Image src={item.image} alt="offer-image-icon" />
                <div className="flex flex-col gap-[8px]">
                  <h6 className="font-[Roboto-font-Bold] text-[14px]">
                    {item.title}
                  </h6>
                  <p className="font-[Roboto-font-regular] text-[14px] leading-[21px] w-full description">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Info;

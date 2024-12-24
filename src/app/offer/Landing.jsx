'use client'

import React from "react";
import { motion } from "framer-motion";
// Icon
import Offer from "../../../public/images/offer/offer.svg";
// images
import left from "../../../public/images/offer/1.svg";
import Image from "next/image";

function Landing() {
  const Offers = [
    { image: left, title: "Urban Escape Package", description: "Includes complimentary breakfast for two, a bottle of wine, and tickets to a city tour for Rs 399/- additional per night." },
    { image: left, title: "Urban Escape Package", description: "Includes complimentary breakfast for two, a bottle of wine, and tickets to a city tour for Rs 399/- additional per night." },
    { image: left, title: "Urban Escape Package", description: "Includes complimentary breakfast for two, a bottle of wine, and tickets to a city tour for Rs 399/- additional per night." },
    { image: left, title: "Urban Escape Package", description: "Includes complimentary breakfast for two, a bottle of wine, and tickets to a city tour for Rs 399/- additional per night." },
  ];

  return (
    <>
      <section className="bg-[#f4f1eb] py-[40px] lg:py-[60px]">
        <div className="containers">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 flex flex-col gap-[8px]"
          >
            <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-[cavet-Bold] leading-[25px] text-[--primary-cl]">Offers</h1>
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-[Melodrama-regular] leading-[35px] text-[--primary-cl]">Day Deals</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[40px]">
            {Offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg overflow-hidden"
              >
                {/* Image Container */}
                <div className="w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title + " Image"}
                    layout="responsive"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                </div>

                {/* Content Container */}
                <div className="mt-4 px-[10px]">
                  <div className="hidden lg:grid lg:grid-cols-10 lg:gap-4">
                    <div className="lg:col-span-7 flex items-start">
                      <div className="mr-3">
                        <Image
                          src={Offer}
                          width={40}
                          height={40}
                          alt="Offer Icon"
                          className="hidden lg:block"
                        />
                        <Image
                          src={Offer}
                          width={20}
                          height={20}
                          alt="Offer Icon Small"
                          className="lg:hidden"
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] font-[Roboto-font-Bold] leading-[21px] text-[--primary-cl]">{offer.title}</h1>
                        <p className="font-[Roboto-font-regular] text-[14px] w-[83%] text-[--primary-cl]">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-3 flex items-center">
                    <div 
  className="bg-gradient-to-r from-[#c4975a] to-[#a67c3d] text-white font-[Roboto-font-medium] text-[14px] p-[10px] rounded-md text-center w-full transition-colors duration-150 ease-out"
  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #e0aa4e, #d4953a)'}
  onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #c4975a, #a67c3d)'}
>
  Enquire Now
</div>

                    </div>
                  </div>

                  <div className="lg:hidden flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">
                        <Image
                          src={Offer}
                          width={20}
                          height={20}
                          alt="Offer Icon Small"
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] font-[Roboto-font-Bold] leading-[21px]">{offer.title}</h1>
                        <p className="font-[Roboto-font-regular] text-[14px]">
                          {offer.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="bg-gradient-to-r from-[#c4975a] to-[#a67c3d] text-white font-[Roboto-font-medium] text-[14px] p-[10px] rounded-md text-center w-full">
                        Enquire Now
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;

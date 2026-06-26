"use client";

import React from "react";
import Image from "next/image";
import heroImage from '../../../public/images/home/hero.webp';

const Info = () => {
  return (
    <div className="relative w-full h-full bg-gray-800">
      <Image
        src={heroImage}
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
};

export default Info;
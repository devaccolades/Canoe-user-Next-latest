'use client';

import React from 'react';
import Image from 'next/image';
import spaImage from '../../../public/images/spa/spa.jpg';
import { useRouter } from 'next/navigation';

function Landing() {
  const router = useRouter();

  return (
    <>
      <section className="bg-[#f4f1eb] flex flex-col justify-center h-[89vh]">
        <div className="containers flex flex-col items-center">
          
      

          <Image 
            src={spaImage} 
            alt="Spa" 
            className="w-full h-auto object-cover max-w-[500px] mb-4 rounded-[10px]"
          />
    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-[Melodrama-regular] leading-[35px] text-[--primary-cl] mb-4">
            Coming Soon...
          </h2>
          <button 
            onClick={() => router.push('/')}
            className="bg-[#B88E5B] hover:bg-[#a17a4a] text-white px-8 text-[14px] py-3 rounded-[4px] font-[Roboto-font-medium]"
          >
            Go Home
          </button>
        </div>
      </section>
    </>
  );
}

export default Landing;

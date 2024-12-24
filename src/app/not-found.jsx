'use client';

import React from 'react';
import Header from '@/layouts/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from '../../public/images/404/404.svg';

function NotFound() {
  const router = useRouter();

  return (
    <>
      <Header bgColor='#f4f1eb' textColor='--primary-cl' />
      <section className="bg-[#f4f1eb] flex flex-col justify-center h-[89vh]">
        <div className="containers flex flex-col items-center">
          <div className="max-w-xl mt-8">
            <Image 
              src={logo} 
              alt="404 Not Found"
              priority 
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-[14px] leading-[17px]  md:text-[20px] font-[Roboto-font-regular] text-gray-800 font-medium mt-4 text-center">
            Oop's! The Page You Are Looking For Can't Found
          </h1>
          <button 
            onClick={() => router.push('/')}
            className="bg-[#B88E5B] hover:bg-[#a17a4a] text-white px-8 text-[14px] py-3 rounded-[4px] mt-[32px] font-[Roboto-font-medium]"
          >
            Go Home
          </button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
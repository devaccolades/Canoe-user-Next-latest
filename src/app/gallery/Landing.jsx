"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as AntdImage } from 'antd';
import first from '../../../public/images/gallery/1.jpg';
import second from '../../../public/images/gallery/2.jpg';
import third from '../../../public/images/gallery/3.jpg';
import fourth from '../../../public/images/gallery/4.jpg';
import fifth from '../../../public/images/gallery/5.jpg';
import sixth from '../../../public/images/gallery/6.jpg';
import seventh from '../../../public/images/gallery/7.jpg';
import eight from '../../../public/images/gallery/8.jpg';
import ninth from '../../../public/images/gallery/9.jpg';
import tenth from '../../../public/images/gallery/10.jpg';

function Landing() {
  const blogData = [
    { image: first },
    { image: second },
    { image: third },
    { image: fourth },
    { image: fifth },
    { image: sixth },
    { image: seventh },
    { image: eight },
    { image: ninth },
    { image: tenth },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(12);

  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerPage(12);
      } else if (window.innerWidth >= 768) {
        setImagesPerPage(8);
      } else {
        setImagesPerPage(4);
      }
    };

    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  const totalPages = Math.ceil(blogData.length / imagesPerPage);
  const startIdx = (currentPage - 1) * imagesPerPage;
  const currentImages = blogData.slice(startIdx, startIdx + imagesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-[#f4f1eb] py-[40px] lg:py-[60px] flex flex-col justify-center">
        <div className="containers text-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-[Melodrama-regular] leading-[35px] text-[--primary-cl]">
            Gallery
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mt-8">
            <AntdImage.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              {currentImages.map((item, index) => (
                <div key={index} className="p-[5px] bg-white rounded-[8px] overflow-hidden">
                  <div className="relative w-full overflow-hidden rounded-[8px] cursor-pointer" style={{ height: "200px" }}>
                    <AntdImage
                      width="100%"
                      height="100%"
                      src={item.image.src}
                      alt={`Gallery item ${index + 1}`}
                      className="object-cover rounded-[8px] transition-transform duration-300 transform hover:scale-110"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </AntdImage.PreviewGroup>
          </div>

          <div className="flex justify-center mt-[40px] md:mt-[60px] space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? 'bg-[#b9813a] text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;

"use client";

import React from "react";
import Logo from "../../public/images/logo/Canoe Logo.svg";
import call from "../../public/images/footer/call.svg";
import Home from "../../public/images/footer/home.svg";
import message from "../../public/images/footer/message.svg";
import watsapp from "../../public/images/footer/watsapp.svg";
import insta from "../../public/images/footer/insta.svg";
import facebook from "../../public/images/footer/facebook.svg";
import copy from "../../public/images/footer/copyright.svg";
import accolades from "../../public/images/footer/accolades.svg";
import youtube from "../../public/images/footer/youtube.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import "./layout.css";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const isActivePath = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (path !== "/" && pathname.startsWith(path)) return true;
    return path === pathname;
  };

  return (
    <section className="footer w-full bg-[--primary-cl] text-white pt-[30px] md:pt-[60px] pb-[30px] md:pb-[40px]">
      <div className="containers flex flex-col gap-[40px] custom-footer-container">
        <div className="grid grid-cols-2 md:grid-cols-[40%,30%,30%] lg:grid-cols-[34%,22%,22%,22%] font-[Epilogue-Regular text-[15px] main-section leading-[24px]">
          <div className="flex flex-col gap-[18px] col-span-2 md:col-auto">
            <Image src={Logo} className="w-[156px] h-[36px]" alt="Canoe Logo" />
            <p className="md:w-[251px] text-[14px] md:text-[15px] leading-[21px] lg:leading-[24px]">
              Managed by Marg Hotels & Resorts, a full-service business class
              hotel with 34 well-designed and spacious rooms for all kinds of
              travelers coming to Kannur.
            </p>
            <div className="block lg:hidden">
            <div className='flex gap-[10px]'>
  {/* WhatsApp link with phone number */}
  <a href="https://wa.me/9526849997" target="_blank" rel="noopener noreferrer">
    <Image src={watsapp} width={'33px'} height={'33px'} alt="WhatsApp" />
  </a>
  
  {/* Facebook link */}
  <a href="https://www.facebook.com/share/14ArMqKntc/" target="_blank" rel="noopener noreferrer">
    <Image src={facebook} width={'33px'} height={'33px'} alt="Facebook" />
  </a>
  
  {/* Instagram link */}
  <a href="https://www.instagram.com/thehotelcanoe/profilecard/?igsh=eXczZDZ3em1rNzZw" target="_blank" rel="noopener noreferrer">
    <Image src={insta} width={'33px'} height={'33px'} alt="Instagram" />
  </a>
  
  {/* YouTube link */}
  <a href="https://youtube.com/@thehotelcanoe1801?si=N2jwOFfV0z1i5m-B" target="_blank" rel="noopener noreferrer">
    <Image src={youtube} width={'33px'} height={'33px'} alt="YouTube" />
  </a>
</div>

            </div>
          </div>
          <div className="flex flex-col gap-[12px] justify-start pt-[30px] md:py-0">
            <ul className="space-y-[8px]">
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </li>
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/about-us") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/about-us")}
                style={{ cursor: "pointer" }}
              >
                About Us
              </li>
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/rooms") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/rooms")}
                style={{ cursor: "pointer" }}
              >
                Rooms & Suites
              </li>
          
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/restaurant") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/restaurant")}
                style={{ cursor: "pointer" }}
              >
                Dining
              </li>
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/offer") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/offer")}
                style={{ cursor: "pointer" }}
              >
                Offers
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[12px] justify-start pt-[30px] md:py-0">
            <ul className="space-y-[8px]">
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/gallery") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/gallery")}
                style={{ cursor: "pointer" }}
              >
                Gallery
              </li>
              <li
                className={`hover:text-[#C3945E] transition-colors duration-300 ease-in-out ${
                  isActivePath("/contact-us") ? "text-[#C3945E]" : ""
                }`}
                onClick={() => router.push("/contact-us")}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </li>
              <li className="hover:text-[#C3945E] transition-colors duration-300 ease-in-out">
                Privacy Policy
              </li>
              <li className="hover:text-[#C3945E] transition-colors duration-300 ease-in-out">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:flex md:col-span-2 lg:col-auto md:row-start-2 lg:row-auto lg:flex-col gap-[10px] md:gap-[80px] lg:gap-[8px] mt-[24px] lg:mt-0">
            <div className="flex flex-col gap-[12px]">
              <p className="text-[#C3945E]">Address</p>
              <div className="flex items-start gap-2 ">
                <Image src={Home} height={"20px"} width={"20px"} alt="Home" />
                <p>
                  Near City Centre, Fort Road,
                  <br />
                  Kannur - 670 001,
                  <br />
                  Kerala, India
                </p>{" "}
              </div>
            </div>
            <div className="flex flex-col justify-start gap-[8px]">
              <p className="text-[#C3945E] invisible hidden md:block lg:hidden">
                Contact
              </p>
              <div className="flex items-start gap-2">
                <Image src={call} height={"20px"} width={"20px"} alt="Call" />
                <p>(+91) 9526849997</p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={message}
                  height={"20px"}
                  width={"20px"}
                  alt="Message"
                />
                <p>reservationscanoe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[10px] md:gap-0 lg:grid lg:grid-cols-3 items-center developed-by text-[12px] font-[Roboto-font-regular] leading-[14px]">
          <div className="hidden lg:block">
          <div className='flex gap-[10px]'>
  {/* WhatsApp link with phone number */}
  <a href="https://wa.me/9526849997" target="_blank" rel="noopener noreferrer">
    <Image src={watsapp} width={'33px'} height={'33px'} alt="WhatsApp" />
  </a>
  
  {/* Facebook link */}
  <a href="https://www.facebook.com/share/14ArMqKntc/" target="_blank" rel="noopener noreferrer">
    <Image src={facebook} width={'33px'} height={'33px'} alt="Facebook" />
  </a>
  
  {/* Instagram link */}
  <a href="https://www.instagram.com/thehotelcanoe/profilecard/?igsh=eXczZDZ3em1rNzZw" target="_blank" rel="noopener noreferrer">
    <Image src={insta} width={'33px'} height={'33px'} alt="Instagram" />
  </a>
  
  {/* YouTube link */}
  <a href="https://youtube.com/@thehotelcanoe1801?si=N2jwOFfV0z1i5m-B" target="_blank" rel="noopener noreferrer">
    <Image src={youtube} width={'33px'} height={'33px'} alt="YouTube" />
  </a>
</div>

          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="">Copyright</p>
            <Image src={copy} width={"10px"} height={"10px"} alt="Copyright" />
            <p className="">
              2024 <span className="gradient-text">Canoe Hotel</span> All Rights
              Reserved
            </p>
          </div>
          <div className="flex justify-end items-center gap-1">
            <p className="">
              Design And Developed By{" "}
              <a
                href="https://accoladesintegrated.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text hover:text-[#C3945E] transition-colors duration-300"
              >
                Accolades Integrated
              </a>
            </p>
            <Image
              src={accolades}
              alt="Accolades Integrated"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

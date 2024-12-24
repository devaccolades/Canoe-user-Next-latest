'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';



import mobileMenuIcon from '../../public/icon/mobileMenu.svg'
import closeIcon from '../../public/icon/close.svg'
import Logo from '../../public/images/logo/Canoe Logo.svg';

import './layout.css'
import { usePathname } from 'next/navigation';

const navigate = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about-us" },
  { title: "Rooms", link: "/rooms" },
  { title: "Spa", link: "/spa" },
]



const modalVariants = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
  exit: {
    y: '-100vh',
    transition: {
      type: 'tween',
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: '50%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
  exit: {
    opacity: 0,
    y: '50%',
    transition: {
      duration: 0.1,
      ease: "easeOut"
    }
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
function Header({ bgColor = "--primary-cl", textColor = "--third-cl", transparent=false }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isTransparent, setIsTransparent] = useState(transparent);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        setIsTransparent(window.scrollY === 0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <section className={`sticky top-0 w-full z-50 py-4 navbar ${isTransparent ? "bg-transparent" : `bg-[${bgColor}]` }  transition-all duration-500`}>
        <div className='mt-[10px] lg:mt-[19px] w-[90%] mx-auto flex justify-between items-center'>
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Image src={Logo} alt="Canoe Logo" className='w-[110px] md:w-[156px]' />
            </Link>
          </div>
          <div className='mobile-nav' onClick={() => setShowMobileNav(!showMobileNav)}>
            <Image src={mobileMenuIcon} className='w-[32px]' alt='mobile-nav-icon' />
          </div>
          <nav className='pc-nav-items'>
            <ul className='relative flex justify-center items-center gap-[40px]'>
              {navigate.map((item, index) => (
                <Link key={index} href={item?.link}>
                  <li key={index} className={`relative text-[14px] font-[Roboto-font-regular] text-[${textColor}] group cursor-pointer`}>
                    <span className='block'>
                      {item?.title}
                    </span>
                    <span className='absolute left-0 right-0 bottom-0 h-[2px] bg-[#B9813A] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100'></span>
                  </li>
                </Link>
              ))}
              <li className='inline-block'>
         
<Link href='/contact-us'>
  <motion.button 
    className='text-[14px] border-[1px] border-gradient-to-b from-[#CB964E] to-[#B9813A] text-[#B9813A] rounded-[4px] p-[10px] bg-transparent cursor-pointer transition-colors duration-150 ease-out hover:bg-[#B9813A] hover:border-[#B9813A] hover:text-white'
    style={{ border: '1px solid #B9813A' }}
  >
    Contact Us
  </motion.button>
</Link>

              

              </li>
            </ul>
          </nav>
        </div>
      </section>
      {showMobileNav && <motion.div
        className="fixed inset-0 flex justify-center z-50 items-center mob-nav-bg bg-[--primary-cl]"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div onClick={() => setShowMobileNav(!showMobileNav)} className="absolute top-8 right-4 text-white cursor-pointer">
          <Image src={closeIcon} alt='closing-icon' />
        </div>
        <motion.div
          className="relative"
          variants={navLinksVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ul className="flex flex-col gap-5 font-[Roboto-font-regular] text-[--primary-cl] text-[20px] items-center justify-center h-full text-center">
            {navigate.map((item, index) => (
              <Link href={item?.link}>
                <motion.li
                  className="cursor-pointer"
                  variants={linkItemVariants}
                  style={{
                    background: "linear-gradient(180deg, #cb964e 0%, #b9813a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "2px",
                  }}
                >
                  {item?.title}
                </motion.li>
              </Link>
            ))}
             <Link href="/contact-us">
                <motion.li
                  className="cursor-pointer"
                  variants={linkItemVariants}
                  style={{
                    background: "linear-gradient(180deg, #cb964e 0%, #b9813a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "2px",
                  }}
                >
                  Contact Us
                </motion.li>
              </Link>
          </ul>
        </motion.div>
      </motion.div>}
    </>
  );
}

export default Header;

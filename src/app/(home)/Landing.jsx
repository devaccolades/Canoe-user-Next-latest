'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import first from '../../../public/images/home/rooms.jpg';
import two from '../../../public/images/home/2.jpeg';
import three from '../../../public/images/home/offers.jpg';
import fourth from '../../../public/images/home/4.jpeg';
import fifth from '../../../public/images/home/5.jpeg';
import sixth from '../../../public/images/home/review.jpg';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-reveal';
import Info from './Info';

const StaggeredCarousel = dynamic(() => import('@/components/carousel/StaggeredCarousel'), { 
    ssr: false, 
    loading: () => <CarouselSkeleton />, 
});

function Landing() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    const data = [
        { image: first, title: "Rooms", link: "/rooms",btnText: "View More" },
        { image: two, title: "Restaurant", link: "/restaurant",btnText: "Explore" },
        { image: three, title: "Day Deals", link: "/offer",btnText: "Offers" },
        { image: fourth, title: "Nearby Places", link: "/nearbyplaces",btnText: "Explore" },
        { image: fifth, title: "How to Reach", link: "/contact-us",btnText: "Connect" },
        { image: sixth, title: "Testimonial", link: "/testimonial",btnText: "See More" },
    ];

    return (
        <main>
        <section className='-mt-[96px]'>
                <div className="w-full h-[500px] md:h-[600px] lg:h-screen relative overflow-hidden">
                    <Info />
                </div>
          

            <div className='bg-[--primary-cl] relative main-section z-0 md:pb-[60px] landing'>
                <div className='flex justify-center text-center flex-col items-center pt-[40px] md:pt-[95px]'>
                    <Fade bottom delay={100}>
                        <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[cavet-regular] leading-[24px] pb-[8px] md:pb-[12px] text-[--third-cl] z-10">
                            Why Choose Us
                        </p>
                    </Fade>
                    <Fade bottom delay={200}>
                        <h1
                            className="heading text-[48px] lg:text-[60px] font-[Melodrama-regular] leading-[48px] md:leading-[69px] mb-[8px] z-10"
                            style={{
                                background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '2px'
                            }}
                        >
                            Business Class Hotel
                        </h1>
                    </Fade>
                    <Fade bottom delay={300}>
                        <p className="text-[12px] lg:text-[14px] font-[Roboto-font-medium] leading-[18px] md:leading-[21px] text-[--third-cl] mb-[10px] w-[80%] md:w-[70%] lg:w-[630px] z-10">
                            with 34 well designed and spacious rooms for all kind of travellers coming to Kannur.
                            The hotel is also having a facility of Multi-Cuisine Restaurant, fitness Centre, Swimming Pool.
                        </p>
                    </Fade>
                    <Fade bottom delay={400}>
                        <p className="text-[12px] lg:text-[14px] font-[Roboto-font-regular] leading-[18px] md:leading-[21px] text-[--third-cl] mb-[24px] w-[80%] md:w-[70%] lg:w-[630px] z-10">
                            Just a stone's throw from Kannur Railway Station, our hotel is tailored to meet the needs
                            of business travelers seeking exceptional value.
                        </p>
                    </Fade>
                    <Fade bottom delay={500}>
                        <button 
                            onClick={() => router.push('/about-us')} 
                            className='p-[10px] text-[14px] rounded-[4px] text-[--third-cl] font-[Roboto-font-medium] z-10 transition-colors duration-150 ease-out'
                            style={{ background: 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #e0aa4e 0%, #d4953a 100%)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(180deg, #cb964e 0%, #b9813a 100%)'}
                        >
                            About the Hotel
                        </button>
                    </Fade>
                </div>
         
                <div className='containers -mt-[10px] relative z-[2] pt-[60px] pb-[60px] md:pt-[80px] md:pb-[0px]'> 
                    <StaggeredCarousel data={data} router={router} />
                </div>
           
                <div 
                    className={`landing-bg absolute w-full h-[90%] bottom-0 z-[1] ${!isLoading ? 'fade-in' : 'hidden'}`} 
                    style={{ backgroundImage: `url(${first})`, backgroundSize: 'cover' }} 
                />
            </div>
            </section>

            <style jsx>{`
                .fade-in {
                    animation: fadeInAnimation 2s forwards; 
                }
                .hidden {
                    opacity: 0;
                }
                @keyframes fadeInAnimation {
                    0% {
                        transform: translateY(20px); 
                        opacity: 0; 
                    }
                    100% {
                        transform: translateY(0); 
                        opacity: 1;
                    }
                }
            `}</style>
        </main>
    );
}

const LandingSkeleton = () => (
    <div className='bg-[--primary-cl] relative main-section md:pb-[60px]'>
        <div className='flex justify-center text-center flex-col items-center pt-[10px] md:pt-[95px]'>
            <div className="h-[24px] w-[150px] bg-[#404040] rounded mb-[12px] animate-pulse"></div>
            <div className="h-[60px] w-[80%] md:w-[500px] bg-[#404040] rounded mb-[8px] animate-pulse"></div>
            <div className="h-[60px] w-[80%] md:w-[70%] lg:w-[630px] bg-[#404040] rounded mb-[10px] animate-pulse"></div>
            <div className="h-[60px] w-[80%] md:w-[70%] lg:w-[630px] bg-[#404040] rounded mb-[24px] animate-pulse"></div>
            <div className="h-[40px] w-[150px] bg-[#404040] rounded animate-pulse"></div>
        </div>
        
        <div className='w-[96%] md:w-[80%] mx-auto -mt-[10px]'>
            <CarouselSkeleton />
        </div>
    </div>
);

const CarouselSkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#404040] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-[#333333] animate-pulse">
                    <div className="h-[20px] w-[60%] bg-[#404040] mx-auto mt-[10px] rounded"></div>
                </div>
            </div>
        ))}
    </div>
);

export default Landing;
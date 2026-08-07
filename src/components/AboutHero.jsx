import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 🚨 FIX: Internal routing ke liye Link import kiya

const HeroSection = () => {
    // Mount state for high-performance pure CSS animations
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            // 🚨 FIX: h-[100dvh] lagaya hai taake taskbar ke peechay content na jaye
            className="relative w-full h-[100dvh] min-h-[650px] bg-cover bg-[65%_center] md:bg-right bg-no-repeat flex items-center font-['Montserrat',sans-serif] overflow-hidden"
            style={{ backgroundImage: "url('/image14.webp')" }}
        >

            {/* 
              Luxury White/Cream Gradient Overlay 
              - Gradient ko image ke mutabiq adjust kiya hai taake text hamesha clear rahay
            */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[85%] lg:w-[65%] bg-gradient-to-r from-[#FDFBF7] from-40% via-[#FDFBF7]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Side Navigation Dots (Desktop Only) */}
            <div className={`absolute left-[3%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A1521]"></div>
                <div className="w-[1px] h-16 xl:h-20 bg-[#C8A97E]/50"></div>
            </div>

            {/* Hero Content Wrapper */}
            <div className="relative z-20 w-full pt-24 md:pt-28 lg:pt-16 px-6 md:px-16 lg:px-24 flex items-center h-full">
                <div className="max-w-[650px] flex flex-col items-start my-auto">

                    {/* Main Heading (About Us) */}
                    <div className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="font-['Cinzel',serif] text-[48px] leading-[1.05] md:text-[65px] lg:text-[75px] xl:text-[85px] text-[#4A1521] font-medium m-0 tracking-tight">
                            About Us
                        </h1>
                    </div>

                    {/* Sub Heading */}
                    <div className={`transform transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-['Cinzel',serif] text-[13px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#C8A97E] tracking-[0.25em] md:tracking-[0.3em] font-semibold uppercase mt-3 mb-2 md:mt-4 md:mb-3">
                            CraftING ELEGANCE.<br className="block md:hidden" /> CONTINUING A LEGACY.
                        </h2>
                    </div>

                    {/* Ornamental Divider */}
                    <div className={`flex items-center gap-3 w-[160px] md:w-[220px] mb-6 md:mb-8 mt-1 transform transition-all duration-1000 delay-300 ease-out ${isMounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                        <div className="flex gap-1 items-center justify-center text-[#C8A97E]">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        </div>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                    </div>

                    {/* Paragraph (Italicized Text) */}
                    <div className={`mb-8 md:mb-10 transform transition-all duration-700 ease-out ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                        <p className="font-serif italic text-[18px] md:text-[22px] lg:text-[26px] text-[#4A1521] m-0 leading-relaxed md:leading-normal max-w-[550px]">
                            For over 30 years, we have been dedicated to the art of fine tailoring delivering timeless designs, perfect fits and unmatched quality.
                        </p>
                    </div>

                    {/* Buttons Area */}
                    <div className={`flex flex-col sm:flex-row gap-5 md:gap-6 items-start sm:items-center transform transition-all duration-1000 delay-[700ms] ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* 🚨 FIX: Link Component lagaya hai proper routing ke liye */}
                        <Link
                            to="/appointment"
                            className="inline-flex items-center justify-center gap-3 bg-[#4A1521] text-white px-8 md:px-10 py-3.5 md:py-4 text-[12px] md:text-[13px] font-bold tracking-[2px] uppercase border border-[#4A1521] rounded-[2px] hover:bg-transparent hover:text-[#4A1521] transition-all duration-300 shadow-lg hover:shadow-none hover:-translate-y-1 w-full sm:w-auto"
                        >
                            BOOK APPOINTMENT
                            {/* Calendar Icon matching the screenshot */}
                            <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </Link>

                        <Link
                            to="/collections"
                            className="text-[#4A1521] text-[12px] md:text-[13px] font-bold tracking-[2px] uppercase relative pb-1 hover:text-[#C8A97E] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C8A97E] hover:after:bg-[#4A1521]"
                        >
                            EXPLORE COLLECTION
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom Scroll Indicator - Modified to look like a mouse matching the image */}
            <div className={`absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer transition-opacity duration-1000 delay-[1000ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[18px] h-[28px] border-[1.5px] border-[#4A1521] rounded-full relative flex justify-center p-1 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-[2px] h-[5px] bg-[#4A1521] rounded-full animate-bounce mt-1"></div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
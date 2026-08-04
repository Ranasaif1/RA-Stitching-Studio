import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceHero = () => {
    // Mount state for high-performance pure CSS animations
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Services List (Updated for Services Page)
    const services = [
        "Bespoke Bridal Couture",
        "Luxury Pret Collection",
        "Custom Formal Wear",
        "Boutique Bulk Production"
    ];

    return (
        <section 
            // bg-[65%_center] se image properly right side par shift hogi taake larki ka face center/right par clear dikhe
            className="relative w-full min-h-screen bg-cover bg-[65%_center] md:bg-right bg-no-repeat flex items-center font-['Montserrat',sans-serif] overflow-hidden"
            style={{ backgroundImage: "url('/image20.webp')" }} // Image change kar di hai
        >
            
            {/* 
              Luxury White/Cream Gradient Overlay 
              - Mobile par width sirf 60% rakhi hai taake right side (larki ka face) bilkul clear rahay
            */}
            <div className="absolute inset-y-0 left-0 w-[85%] md:w-[85%] lg:w-[70%] bg-gradient-to-r from-[#FDFBF7] from-30% via-[#FDFBF7]/50 to-transparent z-10 pointer-events-none"></div>

            {/* Side Navigation Dots */}
            <div className={`absolute left-[3%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A1521]"></div>
                <div className="w-[1px] h-20 bg-[#C8A97E]/50"></div>
            </div>

            {/* Hero Content Wrapper */}
            <div className="relative z-20 w-full pt-32 md:pt-44 pb-16 px-6 md:px-16 lg:px-24 flex items-center">
                <div className="max-w-[650px] flex flex-col items-start">
                    
                    {/* Main Heading */}
                    <div className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="font-['Cinzel',serif] text-[48px] leading-[1.05] md:text-[70px] lg:text-[85px] text-[#4A1521] font-medium m-0 tracking-tight">
                            OUR<br />SERVICES
                        </h1>
                    </div>
                    
                    {/* Sub Heading */}
                    <div className={`transform transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-['Cinzel',serif] text-[15px] md:text-[22px] lg:text-[25px] text-[#C8A97E] tracking-[0.25em] md:tracking-[0.3em] font-semibold uppercase mt-3 md:mt-4 mb-3">
                            CRAFTING ELEGANCE &mdash;
                        </h2>
                    </div>

                    {/* Tagline */}
                    <div className={`transform transition-all duration-1000 delay-300 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="font-serif italic text-[19px] md:text-[26px] lg:text-[28px] text-[#4A1521] m-0 mb-3">
                            From Bespoke Bridal to Boutique Production.
                        </p>
                    </div>
                    
                    {/* Ornamental Divider */}
                    <div className={`flex items-center gap-3 w-[180px] md:w-[220px] mb-8 mt-1 transform transition-all duration-1000 delay-500 ease-out ${isMounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                        <div className="flex gap-1 items-center justify-center text-[#C8A97E]">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        </div>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                    </div>

                    {/* Services List */}
                    <ul className="flex flex-col gap-3 mb-10 pl-1">
                        {services.map((service, index) => (
                            <li 
                                key={index} 
                                className={`flex items-center gap-3 transform transition-all duration-700 ease-out ${isMounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                style={{ transitionDelay: `${600 + (index * 150)}ms` }}
                            >
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4A1521]/10 text-[#C8A97E]">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                </span>
                                <span className="text-[#4A1521] text-[13px] md:text-[15px] font-semibold tracking-wide">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Buttons Area */}
                    <div className={`flex flex-wrap gap-4 md:gap-6 items-center transform transition-all duration-1000 delay-[1200ms] ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Link 
                            to="/book-appointment" 
                            className="inline-flex items-center gap-3 bg-[#4A1521] text-white px-8 md:px-10 py-4 md:py-5 text-[12px] md:text-[14px] font-bold tracking-[2px] uppercase border border-[#4A1521] rounded-[2px] hover:bg-transparent hover:text-[#4A1521] transition-all duration-300 shadow-lg hover:shadow-none hover:-translate-y-1"
                        >
                            BOOK APPOINTMENT 
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </Link>
                        
                        <a 
                            href="#collections" 
                            className="text-[#4A1521] text-[12px] md:text-[13px] font-bold tracking-[2px] uppercase relative pb-1 hover:text-[#C8A97E] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C8A97E] hover:after:bg-[#4A1521]"
                        >
                            VIEW COLLECTIONS
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer transition-opacity duration-1000 delay-[1500ms] ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[20px] h-[30px] border-2 border-[#4A1521] rounded-[10px] relative flex justify-center p-1 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="w-[2px] h-[6px] bg-[#4A1521] rounded-[2px] animate-bounce"></div>
                </div>
            </div>

        </section>
    );
};

export default ServiceHero;
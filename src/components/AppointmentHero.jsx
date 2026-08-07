import React, { useState, useEffect } from 'react';

const AppointmentHero = () => {
    // Mount state for high-performance pure CSS animations
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            // h-[100dvh] for perfect mobile viewport handling, minimum 650px height
            className="relative w-full h-[100dvh] min-h-[650px] bg-cover bg-[65%_center] md:bg-right bg-no-repeat flex items-center font-['Montserrat',sans-serif] overflow-hidden"
            style={{ backgroundImage: "url('/image17.webp')" }}
        >
            
            {/* 
              Gradient Overlay
              Mobile par white area thora kam (from-[30%]) rakha hai taake face aur dress dono clear rahein
            */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[85%] lg:w-[65%] bg-gradient-to-r from-[#FDFBF7] from-[30%] md:from-[40%] via-[#FDFBF7]/80 md:via-[#FDFBF7]/90 to-transparent z-10 pointer-events-none"></div>

            {/* Side Navigation Dots matching desktop image */}
            <div className={`absolute left-[3%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A1521]"></div>
                <div className="w-[1px] h-16 xl:h-20 bg-[#C8A97E]/50"></div>
            </div>

            {/* Hero Content Wrapper */}
            <div className="relative z-20 w-full pt-20 md:pt-28 lg:pt-16 px-6 md:px-16 lg:px-24 flex items-center h-full">
                <div className="max-w-[650px] flex flex-col items-start my-auto w-full">
                    
                    {/* Main Heading */}
                    <div className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="font-['Cinzel',serif] text-[40px] sm:text-[48px] md:text-[65px] lg:text-[75px] xl:text-[85px] leading-[1.05] text-[#4A1521] font-bold m-0 tracking-tight drop-shadow-sm uppercase">
                            BOOK AN <br className="hidden sm:block"/> APPOINTMENT
                        </h1>
                    </div>
                    
                    {/* Sub Heading */}
                    <div className={`transform transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-['Cinzel',serif] text-[11px] md:text-[14px] lg:text-[16px] text-[#C8A97E] tracking-[0.25em] md:tracking-[0.3em] font-bold uppercase mt-2 mb-3 md:mt-4 md:mb-4 leading-[1.6] drop-shadow-sm max-w-[500px]">
                            Your Perfect Outfit Begins With a Personal Consultation
                        </h2>
                    </div>

                    {/* Signature Ornamental Divider */}
                    <div className={`flex items-center gap-3 w-[160px] md:w-[220px] mb-5 md:mb-8 mt-1 transform transition-all duration-1000 delay-300 ease-out ${isMounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow shadow-sm"></div>
                        <div className="flex gap-1 items-center justify-center text-[#C8A97E] drop-shadow-sm">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        </div>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow shadow-sm"></div>
                    </div>

                    {/* Description Paragraph */}
                    <div className={`transform transition-all duration-1000 delay-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-[#555555] text-[12.5px] sm:text-[13.5px] md:text-[15px] leading-[1.7] md:leading-[1.8] font-medium m-0 mb-6 md:mb-8 max-w-[90%] md:max-w-[550px] text-left pr-2 md:pr-0 drop-shadow-sm">
                            Step into elegance. Schedule a dedicated session with our expert tailors and designers. We ensure every measurement is precise and every detail reflects your unique style and vision.
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom Mouse Scroll Indicator */}
            <div className={`absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer transition-opacity duration-1000 delay-[1200ms] hidden md:flex ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[18px] h-[28px] border-[1.5px] border-[#4A1521] rounded-full relative flex justify-center p-1 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="w-[2px] h-[5px] bg-[#4A1521] rounded-full animate-bounce mt-1"></div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentHero;
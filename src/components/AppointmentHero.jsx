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
            // bg-[65%_center] se image properly right side par shift hogi taake larki ka face center/right par clear dikhe
            className="relative w-full min-h-screen bg-cover bg-[65%_center] md:bg-right bg-no-repeat flex items-center font-['Montserrat',sans-serif] overflow-hidden"
            style={{ backgroundImage: "url('/image17.png')" }}
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
                    
                    {/* Main Heading (RANA ABDULLAH) */}
                    <div className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="font-['Cinzel',serif] text-[48px] leading-[1.05] md:text-[70px] lg:text-[85px] text-[#4A1521] font-medium m-0 tracking-tight">
                            BOOK AN <br className="hidden sm:block"/> APPOINTMENT
                        </h1>
                    </div>
                    
                    {/* Sub Heading (STITCHING STUDIO -) */}
                    <div className={`transform transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-['Cinzel',serif] text-[15px] md:text-[22px] lg:text-[25px] text-[#C8A97E] tracking-[0.25em] md:tracking-[0.3em] font-semibold uppercase mt-3 md:mt-4 mb-3">
                            Your Perfect Outfit Begins With a Personal Consultation
                        </h2>
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

export default AppointmentHero;
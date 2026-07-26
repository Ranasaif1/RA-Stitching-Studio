import React from 'react';

const HeroSection = () => {
    return (
        <section 
            className="relative w-full min-h-screen bg-cover bg-[center_right] bg-no-repeat flex items-center font-['Montserrat',sans-serif]"
            style={{ backgroundImage: "url('/image1.png')" }}
        >
            
            {/* Luxury White/Cream Gradient Overlay - Sirf left side par taake larki (model) bilkul saaf nazar aaye */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[60%] bg-gradient-to-r from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Side Navigation Dots */}
            <div className="absolute left-[3%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A1521]"></div>
                <div className="w-[1px] h-20 bg-[#C8A97E]/50"></div>
            </div>

            {/* Hero Content Wrapper - pt-44 taake text header (logo/nav) ke andar na ghuse */}
            <div className="relative z-20 w-full pt-44 pb-16 px-8 md:px-16 lg:px-24 flex items-center">
                <div className="max-w-[600px] space-y-6">
                    
                    {/* Main Heading */}
                    <h1 className="font-['Cinzel',serif] text-5xl md:text-6xl lg:text-[65px] leading-[1.1] text-[#4A1521] font-medium m-0">
                        RANA<br />ABDULLAH
                    </h1>
                    
                    {/* Sub Heading */}
                    <h2 className="text-xl md:text-2xl text-[#C8A97E] tracking-[4px] font-medium uppercase m-0">
                        STITCHING STUDIO
                    </h2>
                    
                    {/* Tagline */}
                    <p className="font-serif italic text-xl md:text-[22px] text-[#4A1521] m-0">
                        Where Every Stitch Tells a Story.
                    </p>
                    
                    {/* Ornamental Divider */}
                    <div className="flex items-center gap-4 w-full max-w-[400px] my-4">
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                        <i className="fa-solid fa-gem text-[#C8A97E] text-[12px]"></i>
                        <div className="h-[1px] bg-[#C8A97E] flex-grow"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[13px] tracking-[2px] text-[#4A1521] uppercase font-bold m-0">
                        LUXURY LADIES TAILORING & CUSTOM STITCHING
                    </p>
                    
                    {/* Buttons Area */}
                    <div className="flex flex-wrap gap-5 items-center pt-2">
                        <a 
                            href="#book" 
                            className="inline-flex items-center gap-2.5 bg-[#4A1521] text-white px-7 py-4 text-[12px] tracking-[1px] uppercase border border-[#4A1521] rounded-[2px] hover:bg-[#330e16] transition-colors"
                        >
                            BOOK APPOINTMENT 
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </a>
                        
                        <a 
                            href="#collections" 
                            className="text-[#4A1521] text-[12px] font-semibold tracking-[1.5px] uppercase relative pb-1 hover:text-[#C8A97E] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#C8A97E] hover:after:bg-[#4A1521]"
                        >
                            EXPLORE COLLECTION
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer">
                <div className="w-[20px] h-[30px] border-2 border-[#4A1521] rounded-[10px] relative flex justify-center p-1">
                    <div className="w-[2px] h-[6px] bg-[#4A1521] rounded-[2px] animate-bounce"></div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CollectionsHero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            // 🚨 FIX: "h-[85vh]" hata kar "min-h-screen" aur "py-28 lg:py-0" lagaya hai 
            // taake mobile par content ke hisab se height khud adjust ho.
            className="relative w-full min-h-screen py-28 lg:py-0 bg-cover bg-[75%_center] lg:bg-right bg-no-repeat flex items-center font-['Montserrat',sans-serif] overflow-hidden"
            style={{ backgroundImage: "url('/image28.png')" }}
        >
            
            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[85%] lg:w-[65%] bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent z-10 pointer-events-none"></div>

            {/* Side Navigation Dots */}
            <div className={`absolute left-[3%] top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A1521]"></div>
                <div className="w-[1px] h-20 bg-[#C8A97E]/50"></div>
            </div>

            {/* Hero Content Wrapper */}
            <div className="relative z-20 w-full px-6 md:px-16 lg:px-24 flex items-center">
                <div className="max-w-[600px] flex flex-col items-start mt-6 md:mt-12">
                    
                    {/* Main Heading */}
                    <div className={`transform transition-all duration-1000 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="font-['Cinzel',serif] text-[45px] md:text-[65px] lg:text-[75px] leading-tight text-[#4A1521] font-bold m-0 tracking-wide">
                            COLLECTIONS
                        </h1>
                    </div>
                    
                    {/* Sub Heading */}
                    <div className={`transform transition-all duration-1000 delay-150 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h2 className="font-['Cinzel',serif] text-[14px] md:text-[18px] lg:text-[20px] text-[#C8A97E] tracking-widest font-bold uppercase mt-2 mb-4">
                            Timeless Designs, Crafted For Every Occasion
                        </h2>
                    </div>

                    {/* Ornamental Divider */}
                    <div className={`flex items-center gap-3 w-[150px] md:w-[200px] mb-6 transform transition-all duration-1000 delay-300 ease-out ${isMounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                        <div className="h-[1px] bg-[#C8A97E]/60 flex-grow"></div>
                        <div className="flex gap-1 items-center justify-center text-[#C8A97E]">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        </div>
                        <div className="h-[1px] bg-[#C8A97E]/60 flex-grow"></div>
                    </div>

                    {/* Description */}
                    <div className={`transform transition-all duration-1000 delay-500 ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-[#555555] text-[14px] md:text-[15px] leading-[1.8] font-medium m-0 mb-8 max-w-[550px]">
                            Discover a curated collection of handcrafted garments where timeless elegance meets exceptional craftsmanship. From breathtaking bridal couture to sophisticated everyday wear, every piece is tailored with precision and passion.
                        </p>
                    </div>
                    
                    {/* Buttons Area */}
                    <div className={`flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto transform transition-all duration-1000 delay-[700ms] ease-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        
                        {/* Primary Button */}
                        <a 
                            href="#featured-collections" 
                            className="inline-flex justify-center items-center gap-3 bg-[#4A1521] text-white px-8 md:px-10 py-4 text-[12px] md:text-[13px] font-bold tracking-[2px] uppercase border border-[#4A1521] hover:bg-transparent hover:text-[#4A1521] transition-all duration-300 shadow-md hover:shadow-none"
                        >
                            EXPLORE COLLECTIONS 
                        </a>
                        
                        {/* Secondary Button */}
                        <Link 
                            to="/contact" 
                            className="inline-flex justify-center items-center gap-3 bg-transparent text-[#4A1521] px-8 md:px-10 py-4 text-[12px] md:text-[13px] font-bold tracking-[2px] uppercase border border-[#4A1521] hover:bg-[#4A1521] hover:text-white transition-all duration-300"
                        >
                            BOOK APPOINTMENT
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollectionsHero;
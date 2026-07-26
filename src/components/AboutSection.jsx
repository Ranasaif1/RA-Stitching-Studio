import React from 'react';

const AboutSection = () => {
    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] overflow-hidden">
            
            {/* Right Side Watermark Image (image3.png) - Overflow hidden aur translate se neeche wali stick crop kar di hai */}
            <div className="absolute -right-12 bottom-[-30px] top-20 hidden lg:flex items-center justify-end pointer-events-none pr-0 z-0 overflow-hidden">
                <img 
                    src="/image3.png" 
                    alt="Mannequin Watermark" 
                    className="h-[105%] w-auto object-contain opacity-100 translate-y-4"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                
                {/* Left Side: Main Image Container (image2.png) */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                    <div className="relative p-3 bg-white shadow-xl border border-[#C8A97E]/30 rounded-sm">
                        <img 
                            src="/image2.png" 
                            alt="Rana Abdullah Studio" 
                            className="w-full max-w-[500px] h-auto object-cover rounded-sm"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[50%] space-y-6 text-center lg:text-left relative z-20 pr-0 lg:pr-12">
                    
                    {/* Small Heading */}
                    <h3 className="text-xs md:text-sm text-[#C8A97E] tracking-[0.35em] uppercase font-bold">
                        ABOUT US
                    </h3>
                    
                    {/* Main Title - max-w-md laga kar text ki width limit kar di hai */}
                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-5xl text-[#4A1521] leading-tight font-medium max-w-md mx-auto lg:mx-0">
                        Crafting Elegance <br />
                        Stitch by Stitch
                    </h2>
                    
                    {/* Ornamental Gold Line */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 py-1">
                        <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
                    </div>
                    
                    {/* Description Paragraph - max-w-md taake text waqt se pehle wrap ho jaye */}
                    <p className="text-sm md:text-base text-[#555555] leading-relaxed font-['Montserrat',sans-serif] max-w-md mx-auto lg:mx-0">
                        At Rana Abdullah Stitching Studio, we turn your <br />
                         imagination into reality. Every outfit we create reflects perfection, grace and individuality. Because your style deserves nothing less.
                    </p>
                    
                    {/* Read Our Story Button */}
                    <div className="pt-4 flex justify-center lg:justify-start">
                        <a 
                            href="#story" 
                            className="bg-[#4A1521] text-white px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[#330e16] transition-all duration-300 shadow-md inline-block"
                        >
                            READ OUR STORY
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;
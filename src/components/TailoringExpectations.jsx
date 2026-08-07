import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TailoringExpectations = () => {
    // --- Animation Variants ---
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const textItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    const imageContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const imageItemVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            transition: { duration: 1, ease: "easeOut" } 
        }
    };

    return (
        <section className="relative py-20 md:py-28 lg:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#FDFBF7]">
            
            {/* Subtle Background Aesthetics */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A97E]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
                
                {/* ==========================================
                    LEFT COLUMN: TEXT CONTENT
                    ========================================== */}
                <motion.div 
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    // 🚨 FIX: Mobile par items-center aur text-center kiya hai, aur desktop par wapas left
                    className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 md:px-0"
                >
                    {/* Subtitle */}
                    <motion.h3 variants={textItemVariants} className="text-[11px] md:text-[12px] text-[#C8A97E] tracking-[0.4em] font-bold uppercase mb-4">
                        OUR CRAFTSMANSHIP
                    </motion.h3>

                    {/* Main Heading */}
                    <motion.h2 
                        variants={textItemVariants}
                        className="font-['Cinzel',serif] text-[#4A1521] text-[36px] sm:text-4xl lg:text-5xl xl:text-[54px] font-bold tracking-wide leading-[1.1] mb-6"
                    >
                        TAILORING BEYOND <br className="hidden md:block" /> 
                        <span className="italic font-medium text-[#C8A97E]">EXPECTATIONS</span>
                    </motion.h2>
                    
                    {/* Signature Diamond Divider */}
                    {/* 🚨 FIX: Mobile par justify-center aur desktop par justify-start kiya hai */}
                    <motion.div variants={textItemVariants} className="flex items-center justify-center md:justify-start gap-2 mb-8 w-full">
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                    </motion.div>
                    
                    {/* Paragraphs */}
                    <motion.p 
                        variants={textItemVariants}
                        // 🚨 FIX: Mobile par text-center aur desktop par text-justify kar diya
                        className="text-[#555555] text-[14.5px] md:text-[16px] leading-[1.8] mb-6 text-center md:text-justify font-['Montserrat',sans-serif]"
                    >
                        For over 30 years, Rana Abdullah Stitching Studio has been dedicated to creating garments that embody luxury, sophistication, and flawless craftsmanship. Every stitch reflects our family's passion for tailoring, while every design is carefully crafted to complement your personality and style.
                    </motion.p>
                    
                    <motion.p 
                        variants={textItemVariants}
                        // 🚨 FIX: Mobile par text-center aur desktop par text-justify kar diya
                        className="text-[#555555] text-[14.5px] md:text-[16px] leading-[1.8] text-center md:text-justify font-['Montserrat',sans-serif] mb-10"
                    >
                        Whether you're preparing for your wedding day, attending a special occasion, or launching your next boutique collection, our experienced artisans ensure every outfit is tailored to perfection using premium fabrics, meticulous detailing, and exceptional finishing.
                    </motion.p>

                    {/* Luxury CTA Button */}
                    {/* 🚨 FIX: Button ko center karne ke liye flex wrapper mein daala */}
                    <motion.div variants={textItemVariants} className="w-full flex justify-center md:justify-start">
                        <Link 
                            to="/collections"
                            className="group relative inline-flex items-center justify-center gap-3 bg-[#4A1521] text-white px-9 py-4 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase transition-all duration-500 rounded-[2px] overflow-hidden shadow-[0_10px_20px_rgba(74,21,33,0.15)] hover:shadow-none hover:-translate-y-1 w-[90%] sm:w-auto border border-[#4A1521]"
                        >
                            <div className="absolute inset-0 w-0 bg-[#C8A97E] transition-all duration-[600ms] ease-out group-hover:w-full z-0"></div>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#4A1521]">DISCOVER MORE</span>
                            
                            <svg className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-[#4A1521] transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* ==========================================
                    RIGHT COLUMN: ORIGINAL IMAGE FRAMES
                    ========================================== */}
                <motion.div 
                    variants={imageContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 gap-3 sm:gap-5 h-[380px] sm:h-[450px] lg:h-[600px] mt-10 lg:mt-0"
                >
                    {/* Left Tall Image - ORIGINAL CORNERS */}
                    <motion.div 
                        variants={imageItemVariants}
                        className="relative h-full rounded-tl-[2rem] sm:rounded-tl-[3rem] rounded-br-[2rem] sm:rounded-br-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/30 group"
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img 
                            src="/image22.webp" 
                            alt="Master Tailoring Craftsmanship" 
                            className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 filter contrast-[1.05]" 
                        />
                    </motion.div>

                    {/* Right Stacked Images */}
                    <div className="grid grid-rows-2 gap-3 sm:gap-5 h-full">
                        {/* Top Right Image - ORIGINAL CORNERS */}
                        <motion.div 
                            variants={imageItemVariants}
                            className="relative h-full rounded-tr-[2rem] sm:rounded-tr-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/30 group"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img 
                                src="/image23.webp" 
                                alt="Premium Fabric Detailing" 
                                className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 filter contrast-[1.05]" 
                            />
                        </motion.div>

                        {/* Bottom Right Image - ORIGINAL CORNERS */}
                        <motion.div 
                            variants={imageItemVariants}
                            className="relative h-full rounded-bl-[2rem] sm:rounded-bl-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/30 group"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <img 
                                src="/image24.webp" 
                                alt="Exceptional Finishing" 
                                className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 filter contrast-[1.05]" 
                            />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TailoringExpectations;
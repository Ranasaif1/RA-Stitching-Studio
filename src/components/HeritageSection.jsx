import React from 'react';
import { motion } from 'framer-motion';

const HeritageSection = () => {
    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    const lineVariants = {
        hidden: { width: 0 },
        show: { width: "3rem", transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 md:py-32 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto overflow-hidden bg-white">
            
            {/* Background Watermark (Subtle & Elegant) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0 opacity-[0.02]">
                <h2 className="font-['Cinzel',serif] text-[15rem] md:text-[25rem] font-bold text-[#4A1521] leading-none whitespace-nowrap">
                    HERITAGE
                </h2>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                
                {/* --- Left Side: Editorial Image Composition --- */}
                <div className="w-full lg:w-1/2 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 w-[90%] md:w-[80%] mx-auto lg:ml-auto lg:mr-0"
                    >
                        {/* Main Arch Image */}
                        <div className="relative p-3 bg-white shadow-[0_30px_60px_rgba(74,21,33,0.08)] rounded-t-full border border-[#C8A97E]/20">
                            <div className="rounded-t-full overflow-hidden relative group h-[450px] md:h-[600px]">
                                <div className="absolute inset-0 bg-[#4A1521]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                                <img 
                                    src="/image22.webp" 
                                    alt="Signature Collection" 
                                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                                />
                            </div>
                        </div>

                        {/* Floating Gold Seal / Badge */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            className="absolute -top-6 -right-6 md:-right-12 w-24 h-24 md:w-32 md:h-32 bg-[#FDFBF7] rounded-full shadow-xl border border-[#C8A97E]/30 flex items-center justify-center z-20"
                        >
                            <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] text-[#C8A97E]">
                                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                <text fontSize="11" fontWeight="bold" letterSpacing="2" className="uppercase font-['Montserrat']">
                                    <textPath href="#textPath" startOffset="0%">
                                        Premium Craftsmanship • Est. 1990 •
                                    </textPath>
                                </text>
                            </svg>
                            {/* Inner Diamond */}
                            <div className="absolute inset-0 m-auto w-2 h-2 rotate-45 bg-[#4A1521]"></div>
                        </motion.div>
                    </motion.div>

                    {/* Secondary Floating Image (Creates 3D Parallax Depth) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute bottom-10 left-0 w-[45%] md:w-[40%] z-20 hidden sm:block"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="p-2 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#C8A97E]/20"
                        >
                            <img 
                                src="/image23.webp" 
                                alt="Detail shot" 
                                className="w-full h-[200px] md:h-[280px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* --- Right Side: Staggered Typography --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    // FIX: Mobile par center align karne ke liye text-center aur items-center lg:items-start lagaya
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                >
                    {/* FIX: justify-center lg:justify-start lagaya taake line aur text center ho jaye */}
                    <motion.div variants={textVariants} className="flex items-center justify-center lg:justify-start gap-4 mb-5 w-full">
                        <motion.div variants={lineVariants} className="h-[2px] bg-[#C8A97E]"></motion.div>
                        <span className="text-[#C8A97E] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                            Our Heritage
                        </span>
                    </motion.div>

                    <motion.h2 variants={textVariants} className="font-['Cinzel',serif] text-[#4A1521] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
                        Discover Our <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A1521] to-[#C8A97E]">
                            Signature Collections
                        </span>
                    </motion.h2>

                    <motion.p variants={textVariants} className="text-[#555555] text-[15px] md:text-[16px] leading-[1.9] mb-6 font-light max-w-xl">
                        Every collection at Rana Abdullah Stitching Studio is thoughtfully designed to celebrate elegance, individuality, and refined craftsmanship. 
                    </motion.p>
                    
                    <motion.p variants={textVariants} className="text-[#555555] text-[15px] md:text-[16px] leading-[1.9] mb-10 font-light max-w-xl">
                        Whether you're preparing for your wedding, attending a formal celebration, or looking for sophisticated everyday attire, our collections combine premium fabrics, intricate detailing, and flawless tailoring to create timeless fashion.
                    </motion.p>

                    {/* Animated Divider & Action Button */}
                    <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                        <button className="group relative px-8 py-4 bg-[#4A1521] text-white text-xs font-bold tracking-[0.2em] uppercase overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-3">
                                Explore The Story
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-[#C8A97E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                        </button>

                        <div className="hidden sm:flex items-center gap-3 opacity-60">
                            <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
                            <div className="w-2 h-2 rotate-45 border border-[#C8A97E]"></div>
                            <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
                        </div>
                    </motion.div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default HeritageSection;
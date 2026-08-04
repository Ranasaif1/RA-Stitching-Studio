import React from 'react';
import { motion } from 'framer-motion';

const TailoringExpectations = () => {
    // --- Animation Variants ---
    
    // Controls the staggered entry of text elements
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    // Standard fade-up for text items
    const textItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    // Animates the gold divider line's width
    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { 
            width: "5rem", // w-20 equivalent
            opacity: 1, 
            transition: { duration: 1, ease: "easeInOut" } 
        }
    };

    // Controls the staggered entry of images
    const imageContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 }
        }
    };

    // Slight scale and fade for images
    const imageItemVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    return (
        <section className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 overflow-hidden bg-white">
            {/* Optional: Subtle background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C8A97E] opacity-[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* --- Left Column: Text & Content --- */}
                <motion.div 
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col justify-center"
                >
                    <motion.h2 
                        variants={textItemVariants}
                        className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight mb-5"
                    >
                        TAILORING BEYOND <br className="hidden md:block" /> EXPECTATIONS
                    </motion.h2>
                    
                    {/* Animated Gold Divider */}
                    <motion.div 
                        variants={lineVariants}
                        className="h-[2px] bg-[#C8A97E] mb-8"
                    />
                    
                    <motion.p 
                        variants={textItemVariants}
                        className="text-[#555555] text-[15px] md:text-[16px] leading-relaxed mb-6 text-left sm:text-justify font-light"
                    >
                        For over 30 years, Rana Abdullah Stitching Studio has been dedicated to creating garments that embody luxury, sophistication, and flawless craftsmanship. Every stitch reflects our family's passion for tailoring, while every design is carefully crafted to complement your personality and style.
                    </motion.p>
                    
                    <motion.p 
                        variants={textItemVariants}
                        className="text-[#555555] text-[15px] md:text-[16px] leading-relaxed text-left sm:text-justify font-light mb-10"
                    >
                        Whether you're preparing for your wedding day, attending a special occasion, or launching your next boutique collection, our experienced artisans ensure every outfit is tailored to perfection using premium fabrics, meticulous detailing, and exceptional finishing.
                    </motion.p>

                    {/* Optional Premium CTA Button */}
                    <motion.div variants={textItemVariants}>
                        <button className="group relative px-8 py-3 bg-[#4A1521] text-[#C8A97E] font-medium tracking-widest text-sm uppercase overflow-hidden transition-all duration-300 hover:bg-[#3a1019] hover:shadow-lg hover:shadow-[#4A1521]/20">
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 block">Discover More</span>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C8A97E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* --- Right Column: Image Grid --- */}
                <motion.div 
                    variants={imageContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 gap-3 sm:gap-5 h-[380px] sm:h-[450px] lg:h-[600px]"
                >
                    {/* Left Tall Image */}
                    <motion.div 
                        variants={imageItemVariants}
                        className="relative h-full rounded-tl-[2rem] sm:rounded-tl-[3rem] rounded-br-[2rem] sm:rounded-br-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/20 group"
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img 
                            src="/image22.webp" 
                            alt="Master Tailoring Craftsmanship" 
                            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" 
                        />
                    </motion.div>

                    {/* Right Stacked Images */}
                    <div className="grid grid-rows-2 gap-3 sm:gap-5 h-full">
                        {/* Top Right Image */}
                        <motion.div 
                            variants={imageItemVariants}
                            className="relative h-full rounded-tr-[2rem] sm:rounded-tr-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/20 group"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src="/image23.webp" 
                                alt="Premium Fabric Detailing" 
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" 
                            />
                        </motion.div>

                        {/* Bottom Right Image */}
                        <motion.div 
                            variants={imageItemVariants}
                            className="relative h-full rounded-bl-[2rem] sm:rounded-bl-[3rem] overflow-hidden shadow-xl border border-[#C8A97E]/20 group"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src="/image24.webp" 
                                alt="Exceptional Finishing" 
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" 
                            />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TailoringExpectations;
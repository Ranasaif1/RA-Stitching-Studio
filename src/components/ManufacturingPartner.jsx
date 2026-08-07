import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ManufacturingPartner = () => {
    // --- Animation Variants ---
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="relative py-20 md:py-28 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#FDFBF7]">
            
            {/* Background Aesthetics for Depth */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C8A97E]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div 
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group bg-white border border-[#C8A97E]/30 rounded-[2px] overflow-hidden shadow-[0_15px_40px_rgba(74,21,33,0.06)] hover:shadow-[0_25px_50px_rgba(74,21,33,0.12)] transition-all duration-700 flex flex-col lg:flex-row relative"
                >
                    {/* --- Left Side: Image --- */}
                    <div className="relative w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-auto overflow-hidden shrink-0">
                        
                        {/* Dark luxury overlay that fades on hover */}
                        <div className="absolute inset-0 bg-[#4A1521]/20 group-hover:bg-[#4A1521]/0 transition-colors duration-700 z-10 pointer-events-none"></div>
                        
                        {/* Inner Golden Frame on Hover */}
                        <div className="absolute inset-4 border border-white/0 group-hover:border-white/60 scale-95 group-hover:scale-100 transition-all duration-700 ease-out z-20 pointer-events-none rounded-[1px]"></div>

                        <img 
                            src="/image27.webp" 
                            alt="Manufacturing Partner" 
                            className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter contrast-[1.05]" 
                        />
                    </div>

                    {/* --- Right Side: Content --- */}
                    <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative bg-white">
                        
                        {/* Subtle Background Royal Pattern on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-[radial-gradient(#4A1521_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            
                            {/* Subtitle */}
                            <motion.h4 variants={itemVariants} className="text-[#C8A97E] text-[11px] tracking-[0.4em] font-bold uppercase mb-4 drop-shadow-sm">
                                B2B COLLABORATION
                            </motion.h4>
                            
                            {/* Main Heading */}
                            <motion.h3 
                                variants={itemVariants}
                                className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-bold mb-6 tracking-wide leading-[1.15]"
                            >
                                YOUR TRUSTED <br className="hidden lg:block" /> 
                                <span className="italic font-medium text-[#C8A97E]">MANUFACTURING</span> PARTNER
                            </motion.h3>
                            
                            {/* Signature Diamond Divider */}
                            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 opacity-90">
                                <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                                <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                                <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                                <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                                <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                            </motion.div>
                            
                            {/* Paragraph */}
                            <motion.p 
                                variants={itemVariants}
                                className="text-[#555555] text-[14.5px] md:text-[15.5px] leading-[1.8] mb-10 text-justify font-['Montserrat',sans-serif]"
                            >
                                In addition to custom tailoring, Rana Abdullah Stitching Studio proudly supports boutiques, designers, and fashion labels through premium bulk production services. Our experienced team delivers consistent quality, accurate sizing, professional finishing, and dependable production schedules, helping fashion businesses bring their collections to life with confidence.
                            </motion.p>
                            
                            {/* Luxury CTA Button */}
                            {/* 🚨 FIX: Button text breaking issue resolved with whitespace-nowrap and optimized mobile padding */}
                            <motion.div variants={itemVariants} className="w-full">
                                <Link 
                                    to="/contact" 
                                    className="group/btn relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#4A1521] text-white px-2 sm:px-9 py-3.5 sm:py-4 text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase transition-all duration-500 rounded-[2px] overflow-hidden shadow-[0_10px_20px_rgba(74,21,33,0.15)] hover:shadow-none hover:-translate-y-1 w-full sm:w-max border border-[#4A1521]"
                                >
                                    {/* Sweeping Gold Background */}
                                    <div className="absolute inset-0 w-0 bg-[#C8A97E] transition-all duration-[600ms] ease-out group-hover/btn:w-full z-0"></div>
                                    
                                    <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#4A1521] whitespace-nowrap">
                                        CONTACT TO COLLABORATE
                                    </span>
                                    
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-all duration-300 group-hover/btn:text-[#4A1521] transform group-hover/btn:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </motion.div>
                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ManufacturingPartner;
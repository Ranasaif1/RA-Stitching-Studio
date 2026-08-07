import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCouture = () => {
    const features = [
        {
            title: "PERSONALIZED CONSULTATION",
            desc: "Meet directly with our experienced designers to discuss your vision, preferences, and styling requirements.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "CUSTOM DESIGN PLANNING",
            desc: "Collaborate with our team to create a design tailored exclusively to your personality, event, and fashion preferences.",
            icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        },
        {
            title: "PREMIUM FABRIC SELECTION",
            desc: "Choose from a curated range of luxurious fabrics, embroidery patterns, colors, and embellishments.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
            title: "PERFECT FIT GUARANTEE",
            desc: "Every outfit is carefully measured, tailored, and fitted to ensure exceptional comfort and elegance.",
            icon: "M14.121 14.121L19 19m-7-7l-7-7m7 7l-2.121 2.121m4.242-4.242L16.879 9.879m-4.242 4.242l2.121 2.121"
        }
    ];

    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        // 🚨 FIX: "hidden md:block" add kiya hai taake mobile par yeh section show na ho
        <section className="hidden md:block py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden font-['Montserrat',sans-serif]">
            
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#C8A97E 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            
            <div className="px-5 sm:px-8 lg:px-16 relative z-10">
                
                {/* ==========================================
                    LUXURY HEADER SECTION
                    ========================================== */}
                <div className="max-w-[850px] mx-auto text-center mb-16 md:mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#C8A97E] text-[11px] md:text-[12px] font-bold tracking-[0.4em] uppercase block mb-3"
                    >
                        THE PROCESS
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-['Cinzel',serif] text-[#4A1521] text-[28px] sm:text-3xl md:text-5xl font-bold mb-6 tracking-wide uppercase leading-tight"
                    >
                        EXPERIENCE PERSONALIZED COUTURE
                    </motion.h2>
                    
                    {/* Standardized Diamond Golden Divider */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center justify-center gap-2 mb-8 opacity-80"
                    >
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-[#555555] text-[13.5px] md:text-[15px] leading-[1.8] font-light max-w-[700px] mx-auto text-center"
                    >
                        Every client receives individual attention from our experienced designers. During your appointment, we carefully understand your style, discuss your requirements, recommend suitable fabrics, take precise measurements, and guide you through every step of creating a garment that perfectly reflects your personality and occasion.
                    </motion.p>
                </div>

                {/* ==========================================
                    FEATURES GRID
                    ========================================== */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10"
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group bg-white border border-[#C8A97E]/20 p-8 sm:p-6 lg:p-8 rounded-[2px] shadow-[0_10px_30px_rgba(74,21,33,0.03)] hover:shadow-[0_15px_40px_rgba(74,21,33,0.08)] hover:border-[#C8A97E]/50 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Subtle hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/0 to-[#FDFBF7]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Icon Circle */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#C8A97E]/30 bg-[#FDFBF7] flex items-center justify-center mb-6 text-[#C8A97E] group-hover:bg-[#4A1521] group-hover:border-[#4A1521] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md transform group-hover:-translate-y-1">
                                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon} />
                                    </svg>
                                </div>
                                
                                {/* Title */}
                                <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[14px] md:text-[15px] font-bold mb-3 tracking-widest uppercase leading-snug">
                                    {feature.title}
                                </h4>
                                
                                {/* Description */}
                                <p className="text-[#555555] text-[12.5px] md:text-[13.5px] leading-[1.7] font-light px-2">
                                    {feature.desc}
                                </p>
                            </div>
                            
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
};

export default ExperienceCouture;
import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Dark Theme Hover Effects)
// ==========================================
const DarkCornerBox = ({ children, className }) => (
    <div className={`relative border border-[#C8A97E]/20 p-8 md:p-10 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:bg-[#C8A97E]/5 hover:border-[#C8A97E]/50 group cursor-default rounded-sm ${className}`}>
        
        {/* Animated Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        
        {/* Subtle Background pattern on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10">{children}</div>
    </div>
);

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const WhyChooseUs = () => {
    const whyChooseUs = [
        { 
            title: "30+ YEARS OF EXPERIENCE", 
            desc: "Decades of trusted tailoring and customer satisfaction.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> 
        },
        { 
            title: "FAMILY LEGACY", 
            desc: "A tradition started by Mr. Rana Ilyas, proudly continued by the next generation.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> 
        },
        { 
            title: "PREMIUM CRAFTSMANSHIP", 
            desc: "Skilled artisans using refined techniques and meticulous attention to detail.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> 
        },
        { 
            title: "PERFECT FIT", 
            desc: "Individually tailored outfits for exceptional comfort, confidence, and elegance.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> 
        },
        { 
            title: "BOUTIQUE PRODUCTION", 
            desc: "Trusted by boutiques, designers, and fashion brands across Pakistan.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> 
        },
        { 
            title: "CUSTOMER SATISFACTION", 
            desc: "Our commitment to quality has earned the trust of hundreds of happy clients.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> 
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
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-20 md:py-28 bg-[#3A0F18] text-white relative overflow-hidden">
            
            {/* Elegant background texture & glows */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#C8A97E_1px,transparent_1px),linear-gradient(90deg,#C8A97E_1px,transparent_1px)] [background-size:40px_40px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A97E]/10 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8">
                
                {/* ==========================================
                    LUXURY SECTION HEADER (Light Theme Variant)
                    ========================================== */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center mb-14 md:mb-20 px-4"
                >
                    <div className="flex items-center gap-4 w-full max-w-[380px] mb-4">
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/40"></div>
                        <h4 className="text-[#C8A97E] text-[11px] md:text-[12px] tracking-[0.4em] font-bold uppercase whitespace-nowrap">THE STUDIO DIFFERENCE</h4>
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/40"></div>
                    </div>
                    
                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide mb-6 uppercase drop-shadow-md">
                        Why Choose Us
                    </h2>
                    
                    {/* Standardized Diamond Golden Divider */}
                    <div className="flex items-center justify-center gap-2 opacity-80">
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                    </div>
                </motion.div>
                
                {/* ==========================================
                    FEATURES GRID
                    ========================================== */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {whyChooseUs.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <DarkCornerBox className="h-full flex flex-col items-center text-center gap-5">
                                
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full border border-[#C8A97E]/30 bg-black/20 flex items-center justify-center flex-shrink-0 text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] group-hover:text-[#4A1521] transition-all duration-500 shadow-sm group-hover:shadow-[0_0_25px_rgba(200,169,126,0.3)]">
                                    <svg className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {feature.icon}
                                    </svg>
                                </div>
                                
                                {/* Text Area */}
                                <div className="w-full flex flex-col items-center">
                                    <h3 className="font-['Cinzel',serif] text-white group-hover:text-[#C8A97E] font-bold text-[16px] md:text-[18px] tracking-widest uppercase mb-3 transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    <div className="w-8 h-[1px] bg-[#C8A97E]/30 mb-3 group-hover:w-16 group-hover:bg-[#C8A97E] transition-all duration-500"></div>
                                    <p className="text-[13.5px] leading-[1.7] text-[#FDFBF7]/70 group-hover:text-white transition-colors duration-500 px-2 font-light">
                                        {feature.desc}
                                    </p>
                                </div>

                            </DarkCornerBox>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
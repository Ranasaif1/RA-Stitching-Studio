import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const WhyChooseUs = () => {
    // Added specific, meaningful SVG paths for each feature
    const whyChooseUs = [
        { 
            title: "30+ YEARS OF EXPERIENCE", 
            desc: "Decades of trusted tailoring and customer satisfaction.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> // Clock/Time
        },
        { 
            title: "FAMILY LEGACY", 
            desc: "A tradition started by Mr. Rana Ilyas, proudly continued by the next generation.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> // Shield
        },
        { 
            title: "PREMIUM CRAFTSMANSHIP", 
            desc: "Skilled artisans using refined techniques and meticulous attention to detail.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> // Sparkles/Magic
        },
        { 
            title: "PERFECT FIT", 
            desc: "Individually tailored outfits for exceptional comfort, confidence, and elegance.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> // Measurement/Figure
        },
        { 
            title: "BOUTIQUE PRODUCTION", 
            desc: "Trusted by boutiques, designers, and fashion brands across Pakistan.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> // Shopping Bag
        },
        { 
            title: "CUSTOMER SATISFACTION", 
            desc: "Our commitment to quality has earned the trust of hundreds of happy clients.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> // Heart
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
        <section className="py-20 md:py-28 bg-[#4A1521] text-white relative overflow-hidden">
            {/* Elegant background texture overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            {/* Subtle glow effect behind the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A97E] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
                <SectionHeader title="WHY CHOOSE RANA ABDULLAH?" light={true} />
                
                <div className="max-w-[1400px] mx-auto px-6 mt-12 md:mt-16">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 text-center"
                    >
                        {whyChooseUs.map((feature, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center group p-6 rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-[#C8A97E]/20"
                            >
                                {/* Animated Icon Container */}
                                <div className="w-16 h-16 mb-6 rounded-full border border-[#C8A97E]/30 bg-[#4A1521] shadow-[0_0_15px_rgba(200,169,126,0.1)] flex items-center justify-center text-[#C8A97E] group-hover:-translate-y-2 group-hover:bg-[#C8A97E] group-hover:text-[#4A1521] group-hover:shadow-[0_0_25px_rgba(200,169,126,0.3)] transition-all duration-500">
                                    <svg 
                                        className="w-7 h-7" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        {feature.icon}
                                    </svg>
                                </div>
                                
                                {/* Text Content */}
                                <h4 className="font-['Cinzel',serif] text-[#C8A97E] text-[15px] font-bold mb-3 tracking-widest uppercase">
                                    {feature.title}
                                </h4>
                                
                                <p className="text-[#FDFBF7]/70 text-[14px] leading-relaxed max-w-[280px]">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
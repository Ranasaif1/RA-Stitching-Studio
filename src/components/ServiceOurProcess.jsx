import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const OurProcess = () => {
    const processSteps = [
        { 
            title: "Consultation", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> 
        },
        { 
            title: "Measurements", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l-7-7m7 7l-2.121 2.121m4.242-4.242L16.879 9.879m-4.242 4.242l2.121 2.121" /> // Stylized measuring tool
        },
        { 
            title: "Fabric Selection", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> 
        },
        { 
            title: "Design Finalization", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> 
        },
        { 
            title: "Expert Tailoring", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-4.879-4.879l-4.242-4.242m4.242 4.242a3 3 0 10-4.242 4.242 3 3 0 004.242-4.242zM7.05 7.05L2.172 2.172m4.879 4.879l4.242 4.242m-4.242-4.242a3 3 0 114.242-4.242 3 3 0 01-4.242 4.242z" /> // Scissors
        },
        { 
            title: "Hand Finishing", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> // Sparkles/Details
        },
        { 
            title: "Quality Inspection", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> // Magnifying glass
        },
        { 
            title: "Final Delivery", 
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> // Shopping bag
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
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-20 md:py-28 px-5 sm:px-8 max-w-[1400px] mx-auto bg-[#FDFBF7]/30">
            <SectionHeader title="OUR PROCESS" />
            
            <div className="relative mt-16 md:mt-20">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-6 relative z-10"
                >
                    {processSteps.map((step, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group relative"
                        >
                            {/* Connector Line (Hidden on last item of rows for neatness) */}
                            {((index + 1) % 4 !== 0 && index !== processSteps.length - 1) && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-[#C8A97E]/30 z-0"></div>
                            )}
                            {(index + 1) % 2 !== 0 && (
                                <div className="block md:hidden absolute top-10 left-[70%] w-[60%] h-[2px] border-t-2 border-dashed border-[#C8A97E]/30 z-0"></div>
                            )}

                            {/* Icon Container */}
                            <div className="w-20 h-20 bg-white border border-[#C8A97E]/40 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#4A1521] group-hover:border-[#4A1521] group-hover:shadow-[0_10px_20px_rgba(74,21,33,0.15)] group-hover:-translate-y-2 transition-all duration-500 relative z-10 cursor-default">
                                
                                {/* Step Number Badge */}
                                <div className="absolute -bottom-2 w-7 h-7 bg-[#C8A97E] rounded-full text-white text-[11px] font-bold flex items-center justify-center border-2 border-white group-hover:border-[#4A1521] transition-colors duration-500 shadow-sm">
                                    {index + 1}
                                </div>
                                
                                {/* SVG Icon */}
                                <svg 
                                    className="w-8 h-8 text-[#C8A97E] group-hover:text-white transition-colors duration-500" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    {step.icon}
                                </svg>
                            </div>
                            
                            {/* Step Title */}
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[14px] md:text-[15px] font-bold tracking-wider mt-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                                {step.title}
                            </h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Footer Text */}
            <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center text-[#555555] text-[14px] md:text-[15px] leading-relaxed mt-20 max-w-3xl mx-auto italic border-t border-[#C8A97E]/20 pt-8"
            >
                Every outfit follows a carefully managed production process designed to ensure exceptional quality, precision, and timely delivery. From the first consultation to the final inspection, every detail is handled with professionalism and care.
            </motion.p>
        </section>
    );
};

export default OurProcess;
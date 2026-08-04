import React from 'react';
import { motion } from 'framer-motion';

const SeasonalCollections = () => {
    const seasonalData = [
        { title: "Wedding Couture", img: "/image13.webp" },
        { title: "Festive Collection", img: "/image10.webp" },
        { title: "Eid Collection", img: "/image11.webp" },
        { title: "Luxury Formals", img: "/image12.webp" },
        { title: "Signature Pret", img: "/image14.webp" },
        { title: "Everyday Elegance", img: "/image15.webp" }
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
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
        }
    };

    return (
        <section className="py-20 md:py-28 bg-[#FDFBF7] px-5 sm:px-8 lg:px-16 relative overflow-hidden">
            
            {/* Elegant Header */}
            <div className="text-center mb-16 relative z-10">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#C8A97E] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4"
                >
                    Curated For You
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl font-bold tracking-wide"
                >
                    Seasonal Collections
                </motion.h2>
                
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center justify-center gap-4 mt-6 text-[#C8A97E]"
                >
                    <div className="w-16 md:w-24 h-[1px] bg-[#C8A97E]/40"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-16 md:w-24 h-[1px] bg-[#C8A97E]/40"></div>
                </motion.div>
            </div>

            {/* Grid Container */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative z-10"
            >
                {seasonalData.map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        {/* Image Container with Aspect Ratio */}
                        <div className="w-full aspect-[3/4] relative overflow-hidden mb-5 border border-[#C8A97E]/20 shadow-sm group-hover:shadow-xl transition-all duration-700 bg-white">
                            
                            {/* Subtle dark overlay that fades out on hover */}
                            <div className="absolute inset-0 bg-[#4A1521]/5 group-hover:bg-transparent z-10 transition-colors duration-700 pointer-events-none"></div>
                            
                            {/* Inner Luxury Frame (Appears on hover) */}
                            <div className="absolute inset-3 border border-white/0 group-hover:border-white/40 z-20 transition-colors duration-700 pointer-events-none"></div>

                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = item.img.replace('.png', '.jpg');
                                }}
                            />
                        </div>
                        
                        {/* Typography and Animated Line */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[12px] md:text-[14px] font-bold tracking-widest uppercase group-hover:text-[#C8A97E] transition-colors duration-500">
                                {item.title}
                            </h4>
                            
                            {/* Animated gold underline on hover */}
                            <div className="w-0 h-[1px] bg-[#C8A97E] mt-2 group-hover:w-8 transition-all duration-500 ease-out"></div>
                        </div>
                        
                    </motion.div>
                ))}
            </motion.div>
            
        </section>
    );
};

export default SeasonalCollections;
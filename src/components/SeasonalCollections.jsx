import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SeasonalCollections = () => {
    const seasonalData = [
        { id: "wedding-couture", title: "Wedding Couture", img: "/image13.webp" },
        { id: "festive-collection", title: "Festive Collection", img: "/image10.webp" },
        { id: "eid-collection", title: "Eid Collection", img: "/image11.webp" },
        { id: "luxury-formals", title: "Luxury Formals", img: "/image12.webp" },
        { id: "signature-pret", title: "Signature Pret", img: "/image14.webp" },
        { id: "everyday-elegance", title: "Everyday Elegance", img: "/image15.webp" }
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
        <section className="py-20 md:py-28 bg-[#FDFBF7] px-5 sm:px-8 lg:px-16 relative overflow-hidden font-['Montserrat',sans-serif]">
            
            {/* Subtle Background Aesthetics */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A97E]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

            {/* ==========================================
                LUXURY SECTION HEADER
                ========================================== */}
            <div className="text-center flex flex-col items-center mb-16 relative z-10">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#C8A97E] text-[11px] md:text-[12px] font-bold tracking-[0.4em] uppercase mb-3 block"
                >
                    Curated For You
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-5xl font-bold tracking-wide uppercase mb-6"
                >
                    Seasonal Collections
                </motion.h2>
                
                {/* Standardized Diamond Golden Divider */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center justify-center gap-2 opacity-80"
                >
                    <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                    <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                    <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                    <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
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
                    >
                        {/* 🚨 FIX: Card ko Link mein convert kiya hai taake inner collection page par jaye */}
                        <Link 
                            to={`/collection/${item.id}`}
                            className="flex flex-col items-center group cursor-pointer block"
                        >
                            {/* Image Container with Aspect Ratio */}
                            <div className="w-full aspect-[3/4] relative overflow-hidden mb-4 rounded-[2px] border border-[#C8A97E]/30 shadow-sm group-hover:shadow-[0_15px_30px_rgba(74,21,33,0.12)] transition-all duration-700 bg-black">
                                
                                {/* Subtle dark overlay that fades out on hover */}
                                <div className="absolute inset-0 bg-[#4A1521]/10 group-hover:bg-transparent z-10 transition-colors duration-700 pointer-events-none"></div>
                                
                                {/* Inner Luxury Frame (Appears on hover) */}
                                <div className="absolute inset-2 border border-white/0 group-hover:border-white/50 z-25 transition-colors duration-700 pointer-events-none rounded-[1px]"></div>

                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-[1500ms] ease-out group-hover:scale-110 group-hover:opacity-90 filter contrast-[1.05]" 
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
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            
        </section>
    );
};

export default SeasonalCollections;
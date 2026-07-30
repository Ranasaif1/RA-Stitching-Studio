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
        <section className="py-10 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto mb-20 md:mb-28">
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-white border border-[#C8A97E]/20 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(74,21,33,0.08)] transition-all duration-700 flex flex-col lg:flex-row relative"
            >
                {/* --- Left Side: Image --- */}
                <div className="relative w-full lg:w-[45%] h-[280px] sm:h-[400px] lg:h-auto overflow-hidden shrink-0">
                    {/* Dark luxury overlay that fades on hover */}
                    <div className="absolute inset-0 bg-[#4A1521]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                    <img 
                        src="/image27.png" 
                        alt="Manufacturing Partner" 
                        className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105" 
                    />
                </div>

                {/* --- Right Side: Content --- */}
                <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-[url('/light-texture.png')] bg-cover bg-center">
                    
                    {/* Decorative Top Line */}
                    <motion.div variants={itemVariants} className="w-16 h-[2px] bg-[#C8A97E] mb-6 md:mb-8"></motion.div>
                    
                    <motion.h3 
                        variants={itemVariants}
                        className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-wide leading-tight"
                    >
                        YOUR TRUSTED <br className="hidden lg:block" /> MANUFACTURING PARTNER
                    </motion.h3>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-[#555555] text-[14px] md:text-[15px] leading-relaxed mb-10 text-left sm:text-justify font-light"
                    >
                        In addition to custom tailoring, Rana Abdullah Stitching Studio proudly supports boutiques, designers, and fashion labels through premium bulk production services. Our experienced team delivers consistent quality, accurate sizing, professional finishing, and dependable production schedules, helping fashion businesses bring their collections to life with confidence.
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center w-full sm:w-max bg-[#4A1521] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-sm border-2 border-[#4A1521] hover:bg-transparent hover:text-[#4A1521] transition-all duration-300 relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                CONTACT TO COLLABORATE
                                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            {/* Gold sweeping background effect on hover */}
                            <div className="absolute inset-0 bg-[#C8A97E] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out z-0 border-[#C8A97E]"></div>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ManufacturingPartner;
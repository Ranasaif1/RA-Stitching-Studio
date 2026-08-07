import React from 'react';
import { motion } from 'framer-motion';

const AppointmentProcess = () => {
    const steps = [
        { title: "Discuss Your Vision", desc: "Share your ideas, inspirations, preferred style, event details, and expectations.", img: "/image21.webp" },
        { title: "Fabric Selection", desc: "Explore our premium fabric collection, embroidery samples, and design options.", img: "/image22.webp" },
        { title: "Measurements", desc: "Our experts will take accurate body measurements to ensure a flawless result.", img: "/image23.webp" },
        { title: "Craftsmanship Begins", desc: "Our artisans begin carefully crafting your garment using premium materials.", img: "/image24.webp" },
        { title: "Final Trial & Delivery", desc: "Attend your fitting session, review every detail, and receive your finished garment.", img: "/image28.webp" }
    ];

    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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
        <section className="py-20 md:py-28 bg-[#FDFBF7] relative overflow-hidden font-['Montserrat',sans-serif]">
            
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#C8A97E 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
                
                {/* ==========================================
                    LUXURY HEADER SECTION
                    ========================================== */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        className="text-[#C8A97E] text-[11px] md:text-[12px] font-bold tracking-[0.4em] uppercase block mb-3"
                    >
                        The Journey
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.1 }} 
                        className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-5xl font-bold tracking-wide uppercase mb-6"
                    >
                        What To Expect
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

                {/* ==========================================
                    TIMELINE SECTION (Responsive)
                    ========================================== */}
                <div className="relative w-full">
                    
                    {/* Connecting Line for Desktop (Horizontal) */}
                    <div className="hidden lg:block absolute top-[64px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent z-0"></div>

                    {/* Connecting Line for Mobile (Vertical) */}
                    <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[40px] sm:left-[48px] w-[1px] bg-gradient-to-b from-transparent via-[#C8A97E]/50 to-transparent z-0"></div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex flex-col lg:flex-row justify-between w-full relative z-10"
                    >
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group w-full lg:w-1/5 gap-6 lg:gap-0 mb-10 lg:mb-0 last:mb-0"
                            >
                                {/* Circle Image Container */}
                                <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full p-1.5 lg:p-2 bg-[#FDFBF7] shadow-[0_10px_30px_rgba(74,21,33,0.06)] border border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-500 z-10 lg:mx-auto">
                                    
                                    {/* Number Badge */}
                                    <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-7 h-7 lg:w-9 lg:h-9 bg-[#4A1521] rounded-full text-[#C8A97E] font-bold font-['Cinzel',serif] text-[12px] lg:text-[14px] flex items-center justify-center border-2 border-[#FDFBF7] z-20 shadow-md transition-transform duration-500 group-hover:scale-110">
                                        {index + 1}
                                    </div>
                                    
                                    {/* Image */}
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                        <img 
                                            src={step.img} 
                                            alt={step.title} 
                                            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out filter contrast-[1.05]" 
                                            onError={(e) => { e.target.src = '/image22.webp'; }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Text Content */}
                                <div className="flex flex-col flex-grow pt-2 lg:pt-8 lg:px-4">
                                    <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[15px] lg:text-[16px] font-bold tracking-widest uppercase mb-2 lg:mb-3">
                                        {step.title}
                                    </h4>
                                    <p className="text-[#555555] text-[12.5px] sm:text-[13.5px] leading-[1.7] font-light lg:max-w-[220px] mx-auto">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AppointmentProcess;
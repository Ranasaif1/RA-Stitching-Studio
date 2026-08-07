import React from 'react';
import { motion } from 'framer-motion';

const AppointmentFAQs = () => {
    const faqs = [
        { q: "Do I need an appointment before visiting?", a: "Appointments are recommended to ensure dedicated consultation time with our designers. However, walk-in clients are always welcome during business hours, subject to availability." },
        { q: "Can I send my measurements online?", a: "Yes. If you are unable to visit our studio, you may share your measurements online. Our team will guide you through the measurement process to ensure the best possible fit." },
        { q: "Do you stitch bridal dresses?", a: "Absolutely. We specialize in luxury bridal couture, custom bridal wear, and handcrafted wedding outfits designed according to your preferences." },
        { q: "What is the delivery time for custom orders?", a: "Delivery timelines vary depending on the complexity of the design. Most custom garments are completed within 2–6 weeks, while bridal couture may require additional time." },
        { q: "Do you accept boutique bulk orders?", a: "Yes. We proudly provide professional bulk stitching services for boutiques, designers, and fashion brands while maintaining consistent quality and timely production." },
        { q: "Do you offer consultations for custom designs?", a: "Yes. Our designers provide one-on-one consultations to help you create a unique design based on your style, occasion, fabric selection, and personal preferences." }
    ];

    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
            
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(#C8A97E 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
                
                {/* ==========================================
                    LUXURY HEADER SECTION
                    ========================================== */}
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#C8A97E] text-[11px] md:text-[12px] font-bold tracking-[0.4em] uppercase block mb-3"
                    >
                        Common Queries
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-['Cinzel',serif] text-[#4A1521] text-[26px] sm:text-3xl md:text-[40px] font-bold tracking-wide uppercase mb-6"
                    >
                        Frequently Asked Questions
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
                    EDITORIAL FAQ GRID
                    ========================================== */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-white border border-[#C8A97E]/20 p-8 lg:p-10 rounded-[2px] shadow-[0_10px_30px_rgba(74,21,33,0.03)] hover:shadow-[0_15px_40px_rgba(74,21,33,0.08)] hover:border-[#C8A97E]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Accent Line (Top) */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#C8A97E] transition-colors duration-500 z-20"></div>

                            {/* Faint Background Watermark for Editorial Look */}
                            <div className="absolute -bottom-8 right-2 font-['Cinzel',serif] text-[140px] font-bold text-[#C8A97E]/[0.03] group-hover:text-[#C8A97E]/[0.06] transition-colors duration-700 pointer-events-none select-none z-0 leading-none">
                                Q
                            </div>

                            <div className="relative z-10 flex gap-4 md:gap-5 items-start">
                                {/* Elegant 'Q.' Typography Icon */}
                                <div className="text-[#C8A97E] font-['Cinzel',serif] text-3xl md:text-4xl font-bold leading-none mt-1 shrink-0">
                                    Q.
                                </div>
                                
                                <div className="flex flex-col">
                                    {/* Question */}
                                    <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[15px] md:text-[16px] font-bold mb-3 tracking-widest leading-snug uppercase group-hover:text-[#C8A97E] transition-colors duration-300">
                                        {faq.q}
                                    </h4>
                                    
                                    {/* Answer */}
                                    <p className="text-[#555555] text-[13px] md:text-[14px] font-light leading-[1.8]">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        </section>
    );
};

export default AppointmentFAQs;
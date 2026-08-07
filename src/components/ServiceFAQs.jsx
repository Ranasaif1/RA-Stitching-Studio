import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceFAQs = () => {
    const [openFaq, setOpenFaq] = useState(null);
    
    const faqData = [
        { 
            question: "Do I need an appointment before visiting?", 
            answer: "While walk-in clients are always welcome, we highly recommend booking an appointment in advance. This ensures our team can dedicate their full attention to your consultation and measurements." 
        },
        { 
            question: "Can I send my measurements online?", 
            answer: "Yes. If you're unable to visit our studio, you can easily share your measurements online through WhatsApp or email. Our team will guide you through the exact process." 
        },
        { 
            question: "Do you stitch bridal dresses?", 
            answer: "Absolutely. We specialize in bespoke bridal couture, luxury formal wear, casual wear, pret collections, and custom-designed outfits crafted to perfection." 
        },
        { 
            question: "What is the delivery time for custom orders?", 
            answer: "Delivery timelines vary depending on the design, embroidery, and order complexity. However, most custom outfits are meticulously completed within 7–21 working days." 
        }
    ];

    return (
        <section className="relative py-20 md:py-28 bg-[#FDFBF7] overflow-hidden font-['Montserrat',sans-serif]">
            
            {/* Subtle Background Aesthetics */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C8A97E]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>

            <div className="relative z-10 px-5 sm:px-8 max-w-[900px] mx-auto">
                
                {/* ==========================================
                    LUXURY SECTION HEADER
                    ========================================== */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-4 w-full max-w-[280px] mb-4">
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
                        <h4 className="text-[#C8A97E] text-[11px] tracking-[0.4em] font-bold uppercase whitespace-nowrap">SUPPORT</h4>
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
                    </div>
                    
                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl text-[#4A1521] font-bold tracking-wide mb-6 uppercase">
                        Got Questions?
                    </h2>
                    
                    {/* Standardized Diamond Divider */}
                    <div className="flex items-center justify-center gap-2 opacity-80">
                        <div className="w-10 md:w-14 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-10 md:w-14 h-[1px] bg-[#C8A97E]"></div>
                    </div>
                </motion.div>

                {/* ==========================================
                    FAQ ACCORDION LIST
                    ========================================== */}
                <motion.div layout className="space-y-4">
                    <AnimatePresence>
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className={`relative bg-white group rounded-[2px] transition-all duration-500 cursor-pointer overflow-hidden ${
                                    openFaq === index 
                                    ? 'border border-[#C8A97E] shadow-[0_15px_40px_rgba(74,21,33,0.08)]' 
                                    : 'border border-[#C8A97E]/20 shadow-sm hover:border-[#C8A97E]/60 hover:shadow-md'
                                }`}
                            >
                                {/* Left Active Accent Bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500 ${openFaq === index ? 'bg-[#C8A97E]' : 'bg-transparent group-hover:bg-[#C8A97E]/30'}`}></div>

                                {/* Question Area */}
                                <div className="flex items-center justify-between p-5 md:p-6 pl-6 md:pl-8">
                                    <h4 className={`font-semibold text-[13.5px] md:text-[15px] leading-snug tracking-wide transition-colors duration-300 pr-4 ${openFaq === index ? 'text-[#C8A97E]' : 'text-[#4A1521] group-hover:text-[#C8A97E]'}`}>
                                        {faq.question}
                                    </h4>
                                    
                                    {/* Interactive Icon */}
                                    <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                        openFaq === index 
                                        ? 'border-[#C8A97E] bg-[#C8A97E] text-white rotate-180' 
                                        : 'border-[#C8A97E]/30 text-[#C8A97E] group-hover:bg-[#FDFBF7]'
                                    }`}>
                                        {openFaq === index ? (
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" /></svg>
                                        ) : (
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                                        )}
                                    </div>
                                </div>

                                {/* Answer Area (Expandable) */}
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }} 
                                            animate={{ height: "auto", opacity: 1 }} 
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-1">
                                                {/* Delicate Golden Gradient Line */}
                                                <div className="w-full h-[1px] bg-gradient-to-r from-[#C8A97E]/40 to-transparent mb-5"></div>
                                                
                                                <p className="text-[#555555] text-[13.5px] md:text-[14.5px] leading-[1.8] font-light">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default ServiceFAQs;
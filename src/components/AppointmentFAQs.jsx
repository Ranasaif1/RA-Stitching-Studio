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

    return (
        <section className="py-20 bg-[#FDFBF7] px-6 lg:px-16 border-t border-[#C8A97E]/20">
            <div className="text-center mb-16">
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl font-bold tracking-wide">
                    FREQUENTLY ASKED QUESTIONS
                </motion.h2>
                <div className="flex items-center justify-center gap-4 mt-6 text-[#C8A97E]">
                    <div className="w-16 h-[1px] bg-[#C8A97E]/40"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-16 h-[1px] bg-[#C8A97E]/40"></div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-lg shadow-sm border border-[#C8A97E]/10 hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="text-[#C8A97E] mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[15px] font-bold mb-3 tracking-wide">{faq.q}</h4>
                        <p className="text-[#555555] text-[13px] font-light leading-relaxed">{faq.a}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AppointmentFAQs;
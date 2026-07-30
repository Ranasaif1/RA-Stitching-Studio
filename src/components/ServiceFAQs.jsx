import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const ServiceFAQs = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const faqData = [
        { question: "Do I need an appointment before visiting?", answer: "While walk-in clients are always welcome, we highly recommend booking an appointment in advance." },
        { question: "Can I send my measurements online?", answer: "Yes. If you're unable to visit our studio, you can share your measurements online through WhatsApp or email." },
        { question: "Do you stitch bridal dresses?", answer: "Absolutely. We specialize in bespoke bridal couture, luxury formal wear, casual wear, pret collections, and custom-designed outfits." },
        { question: "What is the delivery time for custom orders?", answer: "Delivery timelines vary depending on the design, embroidery, and order complexity. Most custom outfits are completed within 7–21 working days." }
    ];

    return (
        <section className="py-16 bg-[#FDFBF7] px-4 max-w-[1000px] mx-auto mb-10">
            <SectionHeader title="FREQUENTLY ASKED QUESTIONS" />
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`bg-white border rounded-xl p-5 md:p-6 cursor-pointer transition-all duration-300 group ${openFaq === index ? 'border-[#C8A97E] shadow-md' : 'border-[#C8A97E]/30 hover:border-[#C8A97E]'}`}
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                        <div className="flex items-center justify-between gap-4">
                            <h4 className={`font-bold text-[13.5px] md:text-[15px] transition-colors duration-300 ${openFaq === index ? 'text-[#C8A97E]' : 'text-[#4A1521]'}`}>{faq.question}</h4>
                            <motion.div animate={{ rotate: openFaq === index ? 45 : 0 }} className="text-[#C8A97E]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {openFaq === index && (
                                <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: "auto", opacity: 1, marginTop: 16 }} exit={{ height: 0, opacity: 0, marginTop: 0 }} className="overflow-hidden">
                                    <div className="w-8 h-[1px] bg-[#C8A97E]/50 mb-4"></div>
                                    <p className="text-[#555555] text-[13px] md:text-[14.5px] leading-[1.8]">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServiceFAQs;
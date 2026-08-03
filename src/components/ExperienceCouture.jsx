import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCouture = () => {
    const features = [
        {
            title: "PERSONALIZED CONSULTATION",
            desc: "Meet directly with our experienced designers to discuss your vision, preferences, and styling requirements.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "CUSTOM DESIGN PLANNING",
            desc: "Collaborate with our team to create a design tailored exclusively to your personality, event, and fashion preferences.",
            icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        },
        {
            title: "PREMIUM FABRIC SELECTION",
            desc: "Choose from a curated range of luxurious fabrics, embroidery patterns, colors, and embellishments.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
            title: "PERFECT FIT GUARANTEE",
            desc: "Every outfit is carefully measured, tailored, and fitted to ensure exceptional comfort and elegance.",
            icon: "M14.121 14.121L19 19m-7-7l-7-7m7 7l-2.121 2.121m4.242-4.242L16.879 9.879m-4.242 4.242l2.121 2.121"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white px-6 lg:px-16">
            <div className="max-w-[1000px] mx-auto text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl font-bold mb-6 tracking-wide"
                >
                    EXPERIENCE PERSONALIZED COUTURE
                </motion.h2>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-3 mb-6"
                >
                    <div className="w-16 h-[1px] bg-[#C8A97E]/50"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-16 h-[1px] bg-[#C8A97E]/50"></div>
                </motion.div>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[#555555] text-[14px] md:text-[15px] leading-relaxed font-light"
                >
                    Every client receives individual attention from our experienced designers. During your appointment, we carefully understand your style, discuss your requirements, recommend suitable fabrics, take precise measurements, and guide you through every step of creating a garment that perfectly reflects your personality and occasion.
                </motion.p>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 rounded-full border border-[#C8A97E]/40 flex items-center justify-center mb-6 text-[#C8A97E] group-hover:bg-[#4A1521] group-hover:border-[#4A1521] group-hover:text-white transition-all duration-500 shadow-sm">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon} />
                            </svg>
                        </div>
                        <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[15px] font-bold mb-3 tracking-wider">
                            {feature.title}
                        </h4>
                        <p className="text-[#555555] text-[13px] leading-relaxed font-light">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceCouture;
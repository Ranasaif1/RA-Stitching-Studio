import React from 'react';
import { motion } from 'framer-motion';

const AppointmentProcess = () => {
    const steps = [
        { title: "Discuss Your Vision", desc: "Share your ideas, inspirations, preferred style, event details, and expectations.", img: "/image_c2e1f3.jpg" }, // Add appropriate timeline images
        { title: "Fabric & Design Selection", desc: "Explore our premium fabric collection, embroidery samples, and design options.", img: "/image22.png" },
        { title: "Measurements & Fitting", desc: "Our experts will take accurate body measurements to ensure a flawless result.", img: "/image23.png" },
        { title: "Craftsmanship Begins", desc: "Our artisans begin carefully crafting your garment using premium materials.", img: "/image24.png" },
        { title: "Final Trial & Delivery", desc: "Attend your fitting session, review every detail, and receive your finished garment.", img: "/image28.png" }
    ];

    return (
        <section className="py-20 bg-white px-5 sm:px-8 lg:px-16 overflow-hidden">
            <div className="text-center mb-16 relative z-10">
                <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#C8A97E] text-xs md:text-sm font-bold tracking-[0.3em] uppercase block mb-4">
                    The Journey
                </motion.span>
                <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-['Cinzel',serif] text-[#4A1521] text-3xl md:text-4xl font-bold tracking-wide">
                    What To Expect During Your Appointment
                </motion.h2>
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#C8A97E]/40 z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative w-32 h-32 rounded-full p-2 bg-white shadow-lg border border-[#C8A97E]/30 mb-6">
                                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#4A1521] rounded-full text-[#C8A97E] font-bold flex items-center justify-center border-2 border-white z-20">
                                    {index + 1}
                                </div>
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[14px] font-bold tracking-wide mb-3 uppercase h-10 flex items-center">{step.title}</h4>
                            <p className="text-[#555555] text-[13px] leading-relaxed font-light">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppointmentProcess;
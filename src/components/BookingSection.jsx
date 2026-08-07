import React from 'react';
import { motion } from 'framer-motion';

const BookingSection = () => {
    return (
        <section id="booking-form" className="py-20 md:py-28 bg-[#FDFBF7] px-5 sm:px-8 lg:px-16 font-['Montserrat',sans-serif]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                
                {/* ==========================================
                    LEFT SIDE: BOOKING FORM
                    ========================================== */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2px] shadow-[0_10px_40px_rgba(74,21,33,0.05)] border border-[#C8A97E]/20 relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-3xl font-bold tracking-wide uppercase">Schedule Your Appointment</h3>
                        <div className="h-[1px] bg-[#C8A97E]/40 flex-grow"></div>
                    </div>
                    
                    <form className="space-y-8">
                        {/* Personal Info */}
                        <div>
                            <h4 className="text-[#C8A97E] text-[11px] font-bold tracking-widest uppercase mb-4">Personal Information</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Full Name *</label>
                                    <input type="text" placeholder="Enter your full name" className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all" />
                                </div>
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Email Address *</label>
                                    <input type="email" placeholder="Enter your email address" className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Phone Number *</label>
                                    <input type="tel" placeholder="Enter your phone number" className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all" />
                                </div>
                            </div>
                        </div>

                        {/* Appointment Details */}
                        <div>
                            <h4 className="text-[#C8A97E] text-[11px] font-bold tracking-widest uppercase mb-4 mt-8">Appointment Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Appointment Type *</label>
                                    <select className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] text-[#555555] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all cursor-pointer">
                                        <option>Select appointment type</option>
                                        <option>Bridal Consultation</option>
                                        <option>Custom Stitching</option>
                                        <option>Luxury Pret</option>
                                        <option>Formal Wear</option>
                                        <option>Measurement Session</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Service Interest *</label>
                                    <select className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] text-[#555555] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all cursor-pointer">
                                        <option>Select service</option>
                                        <option>Custom Design</option>
                                        <option>Alteration Consultation</option>
                                        <option>Boutique Bulk Order</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Preferred Date *</label>
                                    <input type="date" className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] text-[#555555] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all cursor-pointer" />
                                </div>
                                <div>
                                    <label className="block text-[#555555] text-[13px] font-medium mb-2">Preferred Time *</label>
                                    <input type="time" className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3.5 text-[14px] text-[#555555] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <h4 className="text-[#C8A97E] text-[11px] font-bold tracking-widest uppercase mb-4 mt-8">Additional Information</h4>
                            <p className="text-[#555555] text-[12px] mb-2 font-light">Tell us about your design ideas, preferred colors, event details, inspirations, or any specific requirements.</p>
                            <textarea rows="4" placeholder="Write your message here..." className="w-full bg-[#FDFBF7] border border-[#C8A97E]/30 px-4 py-3 text-[14px] rounded-sm focus:outline-none focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521] transition-all"></textarea>
                        </div>

                        <button type="button" className="w-full bg-[#4A1521] text-white py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#C8A97E] transition-colors duration-500 flex items-center justify-center gap-3 rounded-[2px] shadow-md hover:shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Confirm Appointment
                        </button>
                    </form>
                </motion.div>

                {/* ==========================================
                    RIGHT SIDE: INFO PANELS (About & Info)
                    ========================================== */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    {/* 1. ABOUT STUDIO BOX */}
                    <div className="bg-white p-8 rounded-[2px] shadow-[0_10px_30px_rgba(74,21,33,0.04)] border border-[#C8A97E]/20 relative overflow-hidden group">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C8A97E]/10 to-transparent group-hover:from-[#C8A97E]/20 transition-colors duration-500 pointer-events-none"></div>
                        
                        <h3 className="font-['Cinzel',serif] text-[#4A1521] text-xl font-bold tracking-wide uppercase mb-4 flex items-center gap-3">
                            <svg className="w-5 h-5 text-[#C8A97E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            Our Studio
                        </h3>
                        <p className="text-[#555555] text-[13px] leading-[1.85] font-light text-justify">
                            Located in the heart of <span className="font-medium text-[#4A1521]">Clifton, Karachi</span>, Rana Abdullah Stitching Studio is a premier destination for bespoke luxury fashion. We blend traditional craftsmanship with contemporary elegance, ensuring every stitch tells a story of perfection. Whether it is a grand bridal ensemble or a sophisticated everyday look, our master tailors bring your ultimate sartorial vision to life.
                        </p>
                    </div>

                    {/* 2. APPOINTMENT INFO BOX */}
                    <div className="bg-white p-8 rounded-[2px] shadow-[0_10px_30px_rgba(74,21,33,0.04)] border border-[#C8A97E]/20">
                        <h3 className="font-['Cinzel',serif] text-[#4A1521] text-xl font-bold tracking-wide uppercase mb-6 pb-4 border-b border-[#C8A97E]/20">Details</h3>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-[#C8A97E] mt-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                <div>
                                    <h5 className="text-[#4A1521] text-[12px] font-bold uppercase tracking-widest mb-1">Duration</h5>
                                    <p className="text-[#C8A97E] text-[11px] font-bold mb-1 uppercase tracking-wider">60–90 Minutes</p>
                                    <p className="text-[#555555] text-[13px] font-light leading-relaxed">Sufficient time to explore fabrics and take precise measurements.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#C8A97E] mt-1"><svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                                <div>
                                    <h5 className="text-[#4A1521] text-[12px] font-bold uppercase tracking-widest mb-1">Studio Location</h5>
                                    <p className="text-[#555555] text-[12.5px] font-light leading-relaxed">
                                        Shop No. 253, First Floor, Aashiana Shopping Mall, Block 9, Clifton, Karachi – 75500, Pakistan
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#C8A97E] mt-1"><svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
                                <div>
                                    <h5 className="text-[#4A1521] text-[12px] font-bold uppercase tracking-widest mb-1">Availability</h5>
                                    <p className="text-[#555555] text-[13px] font-light leading-relaxed">Mon - Sat: 11:00 AM - 10:00 PM<br/>Sunday closed.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-5 border-t border-[#C8A97E]/20">
                                <div className="text-[#C8A97E] mt-1"><svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                                <div>
                                    <h5 className="text-[#4A1521] text-[12px] font-bold uppercase tracking-widest mb-1">Contact Us</h5>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <a href="tel:+923099853117" className="text-[#555555] hover:text-[#C8A97E] text-[13px] transition-colors">+92 309 9853117</a>
                                        <a href="tel:+923012652131" className="text-[#555555] hover:text-[#C8A97E] text-[13px] transition-colors">+92 301 2652131</a>
                                        <a href="mailto:info@ranaabdullahstudio.com" className="text-[#555555] hover:text-[#C8A97E] text-[12.5px] transition-colors mt-1">info@ranaabdullahstudio.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. WALK-INS WELCOME (Dark Card) */}
                    <div className="bg-[#4A1521] p-8 rounded-[2px] shadow-lg text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        <h3 className="relative z-10 font-['Cinzel',serif] text-[#C8A97E] text-lg font-bold tracking-widest uppercase mb-3">Walk-ins Welcome</h3>
                        <p className="relative z-10 text-white/80 text-[12.5px] font-light leading-relaxed mb-6">
                            While appointments are recommended for a personalized experience, walk-in visitors are always welcome during business hours.
                        </p>
                        <a 
                            href="https://maps.google.com/?q=Aashiana+Shopping+Mall+Clifton+Karachi" 
                            target="_blank" 
                            rel="noreferrer"
                            className="relative z-10 w-full inline-block bg-transparent border border-[#C8A97E] text-[#C8A97E] py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-[#4A1521] transition-all duration-300 cursor-pointer"
                        >
                            Get Directions
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BookingSection;
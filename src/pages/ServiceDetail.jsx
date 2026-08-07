import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import InstagramFeed from '../components/InstagramFeed';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData[serviceId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    // ==========================================
    // 404 / NOT FOUND STATE
    // ==========================================
    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-center px-5 font-['Montserrat',sans-serif] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <h1 className="font-['Cinzel',serif] text-4xl md:text-5xl text-[#4A1521] mb-4 font-bold uppercase relative z-10">Service Not Found</h1>
                <p className="text-[#555555] mb-8 relative z-10 font-light">The service details you are looking for are currently unavailable.</p>
                <button 
                    onClick={() => navigate('/services')} 
                    className="relative z-10 bg-[#4A1521] text-[#C8A97E] px-10 py-4 text-[11px] md:text-[12px] tracking-[0.25em] uppercase font-bold hover:bg-[#3A1018] transition-colors duration-300"
                >
                    Discover All Services
                </button>
            </div>
        );
    }

    // --- Shared Animation Variants ---
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="w-full bg-[#FDFBF7] font-['Montserrat',sans-serif] text-gray-800 overflow-hidden relative">
            
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

            {/* ==========================================
                1. CINEMATIC HERO SECTION (LIGHT & CLEAR)
                ========================================== */}
            <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-32 pb-12 lg:pt-0 lg:pb-0">
                
                <motion.div 
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.heroImg})` }}
                ></motion.div>
                
                {/* 🚨 FIX: Bohat zayada white fade hata diya. Sirf 15% opacity rakhi hai taake image natural lagay */}
                <div className="absolute inset-0 bg-[#FDFBF7]/15 z-0"></div>
                
                {/* Navbar area ke liye halka sa top fade */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FDFBF7]/80 to-transparent z-0 pointer-events-none"></div>

                {/* 🚨 FIX: Sirf neechay wale hissay se smooth white gradient diya hai taake Maroon text parha ja sakay */}
                <div className="absolute bottom-0 left-0 w-full h-[75%] lg:h-[65%] bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/85 to-transparent z-0 pointer-events-none"></div>

                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
                    className="relative z-10 text-center px-5 flex flex-col items-center mt-20 lg:mt-32 w-full"
                >
                    <motion.span variants={fadeUp} className="text-[#C8A97E] text-[10px] md:text-[12px] font-bold tracking-[0.4em] uppercase block mb-3 md:mb-4">
                        Rana Abdullah Stitching Studio
                    </motion.span>
                    
                    {/* Text se drop shadow hata di taake light theme par ganda na lagay */}
                    <motion.h1 variants={fadeUp} className="font-['Cinzel',serif] text-[38px] sm:text-[50px] md:text-[75px] leading-[1.1] font-bold text-[#4A1521] mb-3 md:mb-4 tracking-wide uppercase">
                        {service.title}
                    </motion.h1>

                    <motion.h2 variants={fadeUp} className="text-[13px] md:text-[18px] font-bold text-[#C8A97E] mb-5 md:mb-6 italic tracking-wider px-2">
                        {service.subtitle}
                    </motion.h2>

                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6 opacity-90">
                        <div className="w-8 md:w-20 h-[1px] bg-[#C8A97E]/70"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-8 md:w-20 h-[1px] bg-[#C8A97E]/70"></div>
                    </motion.div>

                    <motion.p variants={fadeUp} className="text-[#555555] text-[13.5px] md:text-[16px] leading-[1.8] md:leading-[2] font-medium max-w-[850px] text-center mb-10 line-clamp-5 sm:line-clamp-none px-2">
                        {service.heroDesc}
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center w-full sm:w-auto mt-2">
                        {/* Primary Button */}
                        <Link to="/appointment" className="group relative inline-flex items-center justify-center gap-3 bg-[#4A1521] text-[#C8A97E] px-8 md:px-12 py-3.5 md:py-4 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-[2px] overflow-hidden shadow-[0_10px_30px_rgba(74,21,33,0.15)] w-full sm:w-auto hover:-translate-y-1">
                            <div className="absolute inset-0 w-0 bg-[#C8A97E] transition-all duration-[600ms] ease-out group-hover:w-full z-0"></div>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#4A1521]">BOOK APPOINTMENT</span>
                        </Link>
                        {/* Secondary Button */}
                        <Link to="/collections" className="group relative inline-flex items-center justify-center gap-3 bg-transparent border border-[#4A1521] text-[#4A1521] px-8 md:px-12 py-3.5 md:py-4 text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-[2px] w-full sm:w-auto backdrop-blur-sm hover:bg-[#4A1521] hover:text-[#FDFBF7] hover:-translate-y-1">
                            VIEW COLLECTION
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* ==========================================
                2. ABOUT/INTRO SECTION
                ========================================== */}
            <section className="max-w-[1400px] mx-auto py-16 md:py-28 px-5 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-[#C8A97E] text-[11px] font-bold tracking-[0.4em] uppercase block mb-3 text-center lg:text-left">About The Service</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-['Cinzel',serif] text-[#4A1521] font-bold mb-5 md:mb-6 uppercase tracking-wide leading-tight text-center lg:text-left">
                        {service.aboutTitle}
                    </h3>
                    <div className="w-16 h-[2px] bg-[#C8A97E] mb-6 mx-auto lg:mx-0"></div>
                    <p className="mb-4 md:mb-5 text-[#555555] leading-[1.8] text-[13.5px] md:text-[15px] font-light text-center lg:text-left">
                        {service.aboutDesc1}
                    </p>
                    <p className="text-[#555555] leading-[1.8] text-[13.5px] md:text-[15px] font-light text-center lg:text-left">
                        {service.aboutDesc2}
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 relative group"
                >
                    <div className="hidden lg:block absolute inset-4 border border-[#C8A97E]/30 translate-x-4 translate-y-4 rounded-[2px] z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                    <img 
                        src={service.aboutImg} 
                        alt={service.aboutTitle} 
                        className="relative z-10 w-full h-auto rounded-[2px] shadow-xl object-cover" 
                        onError={(e) => { e.target.src = '/image22.webp'; }} 
                    />
                </motion.div>
            </section>

            {/* ==========================================
                3. WHY CHOOSE US
                ========================================== */}
            <section className="bg-white py-16 md:py-28 border-y border-[#C8A97E]/20 relative z-10">
                <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 text-center flex flex-col items-center">
                    <span className="text-[#C8A97E] text-[11px] font-bold tracking-[0.4em] uppercase block mb-3">The Advantage</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Cinzel',serif] text-[#4A1521] font-bold mb-12 md:mb-16 uppercase tracking-wide">
                        {service.whyChooseTitle}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {service.whyChooseUs.map((item, index) => (
                            <motion.div 
                                key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="flex flex-col items-center p-8 bg-[#FDFBF7] border border-[#C8A97E]/10 rounded-[2px] hover:shadow-[0_15px_40px_rgba(74,21,33,0.06)] hover:border-[#C8A97E]/30 transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white border border-[#C8A97E]/40 text-[#C8A97E] group-hover:bg-[#4A1521] group-hover:text-white transition-colors duration-500 shadow-sm">
                                    <span className="text-2xl">✦</span>
                                </div>
                                <h4 className="font-['Cinzel',serif] font-bold mb-3 uppercase text-[14px] md:text-[16px] text-[#4A1521] tracking-widest">
                                    {item.title}
                                </h4>
                                <p className="text-[#555555] text-[13px] md:text-[14px] font-light leading-[1.7] px-2">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================
                4. WHAT'S INCLUDED & PROCESS
                ========================================== */}
            <section className="max-w-[1400px] mx-auto py-16 md:py-28 px-5 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">
                
                {/* What's Included */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 sm:p-8 md:p-12 border border-[#C8A97E]/20 shadow-[0_10px_30px_rgba(74,21,33,0.03)] rounded-[2px]">
                    <h3 className="text-xl sm:text-2xl md:text-[28px] font-['Cinzel',serif] text-[#4A1521] font-bold mb-6 md:mb-8 text-center uppercase tracking-widest border-b border-[#C8A97E]/20 pb-4">
                        What's Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-5 gap-x-4">
                        {service.whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-start text-[13px] md:text-[13.5px] text-[#555555] font-light leading-relaxed">
                                <span className="text-[#C8A97E] mr-3 mt-1 shrink-0"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span> 
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Process Timeline */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 sm:p-8 md:p-12 border border-[#C8A97E]/20 shadow-[0_10px_30px_rgba(74,21,33,0.03)] rounded-[2px]">
                    <h3 className="text-xl sm:text-2xl md:text-[28px] font-['Cinzel',serif] text-[#4A1521] font-bold mb-6 md:mb-8 text-center uppercase tracking-widest border-b border-[#C8A97E]/20 pb-4">
                        {service.processTitle}
                    </h3>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#C8A97E]/50 before:to-transparent">
                        {service.process.map((step, index) => (
                            <div key={index} className="relative flex items-start gap-4 md:gap-6">
                                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[#4A1521] border-2 border-white shadow-md text-[#C8A97E] font-['Cinzel',serif] flex items-center justify-center font-bold text-[14px] md:text-[16px]">
                                    {step.step}
                                </div>
                                <div className="pt-1 md:pt-2">
                                    <h4 className="font-bold text-[13px] md:text-[15px] text-[#4A1521] uppercase tracking-wider mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-[12.5px] md:text-[13px] text-[#555555] font-light leading-[1.7]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ==========================================
                5. EDITORIAL GALLERY
                ========================================== */}
            {service.gallery && service.gallery.length > 0 && (
                <section className="py-16 md:py-28 relative z-10">
                    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
                        <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
                            <span className="text-[#C8A97E] text-[11px] font-bold tracking-[0.4em] uppercase block mb-3">Portfolio</span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Cinzel',serif] text-[#4A1521] font-bold mb-4 uppercase tracking-wide">
                                {service.title} Gallery
                            </h3>
                            <div className="w-16 h-[1px] bg-[#C8A97E] mb-6"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                            {service.gallery.map((img, idx) => (
                                <motion.div 
                                    key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-black group shadow-sm"
                                >
                                    <img 
                                        src={img} alt={`${service.title} sample ${idx+1}`} 
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transform transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                                        onError={(e) => { e.target.src = '/image22.webp'; }}
                                    />
                                    <div className="absolute inset-3 border border-white/0 group-hover:border-white/40 z-20 transition-all duration-700 pointer-events-none rounded-[1px] scale-95 group-hover:scale-100 hidden md:block"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ==========================================
                6. EDITORIAL FAQS
                ========================================== */}
            <section className="bg-[#FDFBF7] py-16 md:py-28 border-t border-[#C8A97E]/20 relative z-10">
                <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
                    <span className="text-[#C8A97E] text-[11px] font-bold tracking-[0.4em] uppercase block mb-3">Queries</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Cinzel',serif] text-[#4A1521] font-bold mb-12 md:mb-16 uppercase tracking-wide">
                        Frequently Asked Questions
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-5 lg:gap-8 text-left">
                        {service.faqs.map((faq, index) => (
                            <motion.div 
                                key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className="group relative bg-white border border-[#C8A97E]/20 p-6 md:p-8 rounded-[2px] shadow-[0_10px_30px_rgba(74,21,33,0.03)] hover:shadow-[0_15px_40px_rgba(74,21,33,0.08)] transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#C8A97E] transition-colors duration-500 z-20"></div>
                                <div className="hidden md:block absolute -bottom-8 right-2 font-['Cinzel',serif] text-[120px] font-bold text-[#C8A97E]/[0.03] group-hover:text-[#C8A97E]/[0.06] transition-colors duration-700 pointer-events-none select-none z-0">
                                    Q
                                </div>
                                <div className="relative z-10 flex gap-3 md:gap-4 items-start">
                                    <div className="text-[#C8A97E] font-['Cinzel',serif] text-2xl md:text-3xl font-bold leading-none mt-1 shrink-0">Q.</div>
                                    <div className="flex flex-col">
                                        <h4 className="font-['Cinzel',serif] font-bold text-[13px] md:text-[15px] text-[#4A1521] uppercase tracking-wider mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                                            {faq.q}
                                        </h4>
                                        <p className="text-[12.5px] md:text-[13px] text-[#555555] font-light leading-[1.7]">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================
                7. CALL TO ACTION (LUXURY STYLE WITH IMAGE)
                ========================================== */}
            <section className="relative w-full py-24 md:py-32 flex items-center justify-center font-['Montserrat',sans-serif] overflow-hidden bg-[#2D0D14] z-10">
                <motion.div 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.08 }}
                    transition={{ duration: 15, ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-[60%_center] md:bg-center bg-fixed z-0"
                    style={{ backgroundImage: "url('/image20.webp')" }}
                ></motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D0D14] via-[#4A1521]/85 to-[#2D0D14] z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-0"></div>
                <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-5 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-['Cinzel',serif] text-white font-bold mb-5 md:mb-6 uppercase tracking-wide drop-shadow-2xl">
                        {service.ctaTitle}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
                        <div className="w-8 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-8 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                    </div>

                    <p className="text-[#FDFBF7]/90 text-[13px] md:text-[15.5px] leading-[1.8] mb-8 md:mb-10 font-light px-2 md:px-4 drop-shadow-md">
                        {service.ctaDesc}
                    </p>
                    <Link 
                        to="/appointment" 
                        className="group relative inline-flex items-center justify-center gap-3 bg-[#C8A97E] text-[#4A1521] px-8 md:px-10 py-3.5 md:py-4 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase transition-all duration-500 rounded-[2px] overflow-hidden shadow-[0_10px_30px_rgba(200,169,126,0.25)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.5)] hover:-translate-y-1 w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 w-0 bg-white transition-all duration-[600ms] ease-out group-hover:w-full z-0"></div>
                        <span className="relative z-10 transition-colors duration-300">Book Your Appointment</span>
                        <svg className="w-4 h-4 relative z-10 transition-colors duration-300 transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </Link>
                </motion.div>
            </section>

            {/* ==========================================
                8. INSTAGRAM FEED 
                ========================================== */}
            <InstagramFeed />

        </div>
    );
};

export default ServiceDetail;
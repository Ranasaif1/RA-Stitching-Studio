import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import InstagramFeed from '../components/InstagramFeed';

const Contact = () => {
    // Page load hote hi screen ko top par le jayega
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // FAQ Accordion ke liye State (Kaunsa sawal open hai track karega)
    const [openFaq, setOpenFaq] = useState(null);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Reusable Section Header Component
    const SectionHeader = ({ title }) => (
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14">
            <h2 className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-3xl font-bold tracking-wider mb-4 uppercase">
                {title}
            </h2>
            <div className="flex items-center justify-center gap-2 opacity-80">
                <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
                <div className="w-2 h-2 rotate-45 border border-[#C8A97E] flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#C8A97E]"></div>
                </div>
                <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
            </div>
        </div>
    );

    // FAQ Data Array
    const faqData = [
        {
            question: "Do I need an appointment before visiting?",
            answer: "While walk-in clients are always welcome, we highly recommend booking an appointment in advance. This allows our designers to dedicate their full attention to your consultation, measurements, and design preferences, ensuring a personalized and seamless experience."
        },
        {
            question: "Can I send my measurements online?",
            answer: "Yes. If you're unable to visit our studio, you can share your measurements online through WhatsApp or email. Our team will guide you through the measurement process to help achieve the most accurate fit possible."
        },
        {
            question: "Do you stitch bridal dresses?",
            answer: "Absolutely. We specialize in bespoke bridal couture, luxury formal wear, casual wear, pret collections, and custom-designed outfits. Every bridal ensemble is handcrafted with premium fabrics, intricate detailing, and exceptional craftsmanship."
        },
        {
            question: "What is the delivery time for custom orders?",
            answer: "Delivery timelines vary depending on the design, embroidery, and order complexity. Most custom outfits are completed within 7–21 working days, while bridal couture and heavily embellished garments may require additional time. The estimated delivery date will always be confirmed during your consultation."
        },
        {
            question: "Do you accept boutique bulk orders?",
            answer: "Yes. We proudly collaborate with boutiques, fashion brands, designers, and retailers by providing professional bulk stitching and production services. Our team ensures consistent quality, timely delivery, and meticulous craftsmanship for every order."
        },
        {
            question: "Do you offer consultations for custom designs?",
            answer: "Yes. We offer personalized consultations where our experienced designers discuss your ideas, fabric selection, embroidery details, styling preferences, and measurements. Our goal is to create a garment that reflects your vision while maintaining the highest standards of luxury tailoring."
        }
    ];

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-['Montserrat',sans-serif]">

            {/* ==========================================
                1. HERO SECTION (Full Page with Glass Box & Image 21)
                ========================================== */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/image21.png"
                        alt="Contact Background"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto text-center mt-12 md:mt-20 bg-white/40 backdrop-blur-md border border-white/50 p-10 md:p-16 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                >
                    <h1 className="font-['Cinzel',serif] text-5xl md:text-7xl lg:text-[80px] text-[#4A1521] font-bold mb-4 md:mb-6 leading-[1.1]">
                        CONTACT US
                    </h1>

                    <p className="text-[#4A1521] text-sm md:text-base font-semibold max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
                        We'd love to hear from you. Whether you're planning your dream bridal outfit, a custom couture design, or a boutique production order, our team is here to guide you every step of the way.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Link to="/book-appointment" className="w-full sm:w-auto bg-[#4A1521] text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#4A1521] hover:bg-transparent hover:text-[#4A1521] transition-all duration-300 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            BOOK APPOINTMENT
                        </Link>
                        <a href="https://wa.me/923099853117" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent text-[#4A1521] px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#4A1521] hover:bg-[#4A1521] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.337a9.982 9.982 0 004.825 1.25H12.012c5.506 0 9.989-4.479 9.989-9.985S17.518 2 12.012 2zm5.722 14.34c-.242.684-1.385 1.29-1.937 1.343-.523.051-1.18.258-3.953-.889-3.344-1.383-5.513-4.81-5.681-5.034-.168-.225-1.355-1.802-1.355-3.435 0-1.632.846-2.434 1.144-2.738.298-.304.646-.381.86-.381.215 0 .43.003.616.012.196.009.46-.077.72.552.268.648.878 2.146.953 2.298.076.151.127.327.025.53-.102.201-.153.327-.305.504-.153.176-.322.381-.458.504-.152.14-.316.294-.136.607.18.312.802 1.328 1.722 2.148 1.19.1.066 1.765 1.579 1.968 1.815.202.241.196.425.127.63-.068.204-.32.613-.655.855-.336.241-.673.303-.92.24-.247-.061-1.464-.54-1.464-.54s-.308-.242-.684-.242z" /></svg>
                            WHATSAPP US
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ==========================================
          2. CONTACT FORM & INFO SECTION (Premium & Responsive)
          ========================================== */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-20 max-w-[1400px] mx-auto relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
                >

                    {/* Left Column - Contact Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 h-full bg-white border border-[#C8A97E]/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:border-[#C8A97E]/60 transition-colors duration-500">
                        {/* Background Accents for Luxury Feel */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#C8A97E]/10 rounded-full blur-3xl group-hover:bg-[#C8A97E]/20 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4A1521]/5 rounded-full blur-2xl"></div>

                        <h3 className="font-['Cinzel',serif] text-[#4A1521] text-xl md:text-2xl font-bold tracking-[0.15em] text-center mb-4">
                            GET IN TOUCH
                        </h3>

                        <div className="flex items-center justify-center gap-2 mb-10 opacity-80">
                            <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                            <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
                        </div>

                        <div className="space-y-7 md:space-y-8 relative z-10">
                            {/* Studio */}
                            <div className="flex items-start gap-4 md:gap-5 group/item">
                                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-[#FDFBF7] border border-[#C8A97E]/50 group-hover/item:bg-[#4A1521] group-hover/item:border-[#4A1521] rounded-full flex items-center justify-center shadow-sm transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#4A1521] group-hover/item:text-[#C8A97E] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[#4A1521] font-bold text-[12px] md:text-sm tracking-widest mb-1.5">VISIT OUR STUDIO</h4>
                                    <p className="text-[#555555] text-[13px] md:text-sm leading-relaxed">Shop No. 253, First Floor<br />Ashiana Shopping Mall<br />Block 9, Clifton<br />Karachi, Pakistan</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 md:gap-5 group/item">
                                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-[#FDFBF7] border border-[#C8A97E]/50 group-hover/item:bg-[#4A1521] group-hover/item:border-[#4A1521] rounded-full flex items-center justify-center shadow-sm transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#4A1521] group-hover/item:text-[#C8A97E] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[#4A1521] font-bold text-[12px] md:text-sm tracking-widest mb-1.5">PHONE & WHATSAPP</h4>
                                    <p className="text-[#555555] text-[13px] md:text-sm font-medium">+92 309 9853117</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 md:gap-5 group/item">
                                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-[#FDFBF7] border border-[#C8A97E]/50 group-hover/item:bg-[#4A1521] group-hover/item:border-[#4A1521] rounded-full flex items-center justify-center shadow-sm transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#4A1521] group-hover/item:text-[#C8A97E] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[#4A1521] font-bold text-[12px] md:text-sm tracking-widest mb-1.5">EMAIL ADDRESS</h4>
                                    <p className="text-[#555555] text-[13px] md:text-sm font-medium">info@ranaabdullahstudio.com</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4 md:gap-5 group/item">
                                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 bg-[#FDFBF7] border border-[#C8A97E]/50 group-hover/item:bg-[#4A1521] group-hover/item:border-[#4A1521] rounded-full flex items-center justify-center shadow-sm transition-colors duration-300">
                                    <svg className="w-5 h-5 text-[#4A1521] group-hover/item:text-[#C8A97E] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-[#4A1521] font-bold text-[12px] md:text-sm tracking-widest mb-1.5">BUSINESS HOURS</h4>
                                    <div className="text-[#555555] text-[13px] md:text-sm leading-relaxed w-full max-w-[220px]">
                                        <p className="flex justify-between"><span>Mon – Sat</span><span>11:00 AM – 10 PM</span></p>
                                        <p className="flex justify-between mt-1"><span>Sunday</span><span>Closed</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-7 h-full bg-white border border-[#C8A97E]/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-12 hover:border-[#C8A97E]/60 transition-colors duration-500 flex flex-col justify-center">
                        <h3 className="font-['Cinzel',serif] text-[#4A1521] text-xl md:text-2xl font-bold tracking-[0.15em] text-center mb-4">
                            SEND US A MESSAGE
                        </h3>

                        <div className="flex items-center justify-center gap-2 mb-8 opacity-80">
                            <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                            <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
                        </div>

                        <form className="space-y-4 md:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-[#FDFBF7] placeholder-[#A0A0A0] text-[#4A1521] px-5 py-3.5 md:py-4 text-[13px] outline-none rounded-md border border-[#C8A97E]/40 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521]/20 transition-all shadow-sm group-hover:border-[#C8A97E]"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-[#FDFBF7] placeholder-[#A0A0A0] text-[#4A1521] px-5 py-3.5 md:py-4 text-[13px] outline-none rounded-md border border-[#C8A97E]/40 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521]/20 transition-all shadow-sm group-hover:border-[#C8A97E]"
                                    />
                                </div>
                            </div>
                            <div className="relative group">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#FDFBF7] placeholder-[#A0A0A0] text-[#4A1521] px-5 py-3.5 md:py-4 text-[13px] outline-none rounded-md border border-[#C8A97E]/40 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521]/20 transition-all shadow-sm group-hover:border-[#C8A97E]"
                                />
                            </div>
                            <div className="relative group">
                                <select className="w-full bg-[#FDFBF7] text-[#555555] px-5 py-3.5 md:py-4 text-[13px] outline-none rounded-md border border-[#C8A97E]/40 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521]/20 transition-all shadow-sm appearance-none cursor-pointer group-hover:border-[#C8A97E]">
                                    <option value="" disabled selected>Select Subject</option>
                                    <option value="Bridal Wear">Bridal Wear Query</option>
                                    <option value="Custom Order">Custom Stitching Order</option>
                                    <option value="Boutique Bulk">Boutique / Bulk Production</option>
                                    <option value="Other">Other Query</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#C8A97E]">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                            <div className="relative group">
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full bg-[#FDFBF7] placeholder-[#A0A0A0] text-[#4A1521] px-5 py-3.5 md:py-4 text-[13px] outline-none rounded-md border border-[#C8A97E]/40 focus:border-[#4A1521] focus:ring-1 focus:ring-[#4A1521]/20 transition-all shadow-sm resize-none group-hover:border-[#C8A97E]"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#4A1521] text-white px-8 py-4 text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase rounded-md border border-[#4A1521] hover:bg-[#C8A97E] hover:border-[#C8A97E] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg"
                            >
                                SEND MESSAGE
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </button>
                        </form>
                    </motion.div>

                </motion.div>
            </section>

            {/* ==========================================
          3. WHY CLIENTS CHOOSE US (Fixed Mobile Text & Sticky Scroll)
          ========================================== */}
            <section className="py-16 md:py-24 max-w-[1400px] mx-auto overflow-hidden">

                {/* Section Header */}
                <div className="px-6 md:px-10">
                    <SectionHeader title="WHY CLIENTS CHOOSE US" />
                </div>

                {/* Mobile: Horizontal Swipe Carousel | Desktop: Grid */}
                <div className="w-full relative mt-8 md:mt-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        // Container padding and gap setup for smooth sticky carousel
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-10 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >

                        {/* Card 1 */}
                        {/* FIX: min-w ki jagah w-[85vw] aur break-words use kiya hai taake text cut na ho */}
                        <motion.div variants={itemVariants} className="w-[85vw] sm:w-[320px] md:w-full flex-none snap-center bg-white border border-[#C8A97E]/30 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.15)] hover:border-[#C8A97E]/80 hover:-translate-y-2 transition-all duration-500 group whitespace-normal">
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 rounded-full bg-[#FDFBF7] border border-[#C8A97E]/50 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M12 6c-2 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm0 6c-3.3 0-6 2.7-6 6v4h12v-4c0-3.3-2.7-6-6-6zm0-10C8.7 2 6 4.7 6 8v3l-4 4v7h20v-7l-4-4V8c0-3.3-2.7-6-6-6z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-[14px] md:text-[16px] font-bold mb-3 tracking-widest uppercase">
                                30+ YEARS OF<br />CRAFTSMANSHIP
                            </h4>
                            <div className="w-8 h-[1px] bg-[#C8A97E]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed break-words">Decades of experience in creating timeless outfits with passion and precision.</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={itemVariants} className="w-[85vw] sm:w-[320px] md:w-full flex-none snap-center bg-white border border-[#C8A97E]/30 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.15)] hover:border-[#C8A97E]/80 hover:-translate-y-2 transition-all duration-500 group whitespace-normal">
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 rounded-full bg-[#FDFBF7] border border-[#C8A97E]/50 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                            </div>
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-[14px] md:text-[16px] font-bold mb-3 tracking-widest uppercase">
                                LUXURY<br />TAILORING
                            </h4>
                            <div className="w-8 h-[1px] bg-[#C8A97E]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed break-words">Every piece is tailored with perfection, ensuring elegance in every stitch.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={itemVariants} className="w-[85vw] sm:w-[320px] md:w-full flex-none snap-center bg-white border border-[#C8A97E]/30 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.15)] hover:border-[#C8A97E]/80 hover:-translate-y-2 transition-all duration-500 group whitespace-normal">
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 rounded-full bg-[#FDFBF7] border border-[#C8A97E]/50 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-[14px] md:text-[16px] font-bold mb-3 tracking-widest uppercase">
                                BRIDAL<br />SPECIALISTS
                            </h4>
                            <div className="w-8 h-[1px] bg-[#C8A97E]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed break-words">Custom bridal couture that reflects your unique style and unforgettable moments.</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div variants={itemVariants} className="w-[85vw] sm:w-[320px] md:w-full flex-none snap-center bg-white border border-[#C8A97E]/30 rounded-2xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.15)] hover:border-[#C8A97E]/80 hover:-translate-y-2 transition-all duration-500 group whitespace-normal">
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6 rounded-full bg-[#FDFBF7] border border-[#C8A97E]/50 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            </div>
                            <h4 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-[14px] md:text-[16px] font-bold mb-3 tracking-widest uppercase">
                                CLIENT<br />SATISFACTION
                            </h4>
                            <div className="w-8 h-[1px] bg-[#C8A97E]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed break-words">Our clients trust us for quality, reliability, and exceptional customer service.</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
            {/* ==========================================
                4. VISIT OUR BOUTIQUE (Google Map)
                ========================================== */}
            <section className="py-16 px-4 md:px-10 max-w-[1400px] mx-auto">
                <SectionHeader title="VISIT OUR BOUTIQUE" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full rounded-2xl overflow-hidden border-4 border-[#C8A97E]/30 shadow-2xl relative bg-white/50"
                >
                    {/* Map wrapper to handle responsive aspect ratio */}
                    <div className="relative w-full h-[350px] md:h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.612439572286!2d67.03192691433719!3d24.8274733487014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33db639bdd2a3%3A0x2c952aef3b6bcedd!2sAashiana%20Shopping%20Mall!5e1!3m2!1sen!2s!4v1785403609166!5m2!1sen!2s"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rana Abdullah Stitching Studio Location"
                        ></iframe>
                    </div>
                </motion.div>
            </section>

            {/* ==========================================
                5. FREQUENTLY ASKED QUESTIONS (Animated Accordion)
                ========================================== */}
            <section className="py-16 md:py-24 px-4 md:px-10 max-w-[1200px] mx-auto">
                <SectionHeader title="FREQUENTLY ASKED QUESTIONS" />

                {/* items-start lagaya hai taake ek card khulne par doosra zabardasti lamba na ho */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // Active state par border golden aur shadow dark ho jayega
                            className={`bg-white border rounded-xl p-5 md:p-6 cursor-pointer transition-all duration-300 group ${openFaq === index
                                ? 'border-[#C8A97E] shadow-[0_8px_30px_rgba(200,169,126,0.15)]'
                                : 'border-[#C8A97E]/30 hover:border-[#C8A97E] hover:shadow-md'
                                }`}
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            {/* Question & Icon */}
                            <div className="flex items-center justify-between gap-4">
                                <h4 className={`font-bold text-[13px] md:text-[15px] transition-colors duration-300 ${openFaq === index ? 'text-[#C8A97E]' : 'text-[#4A1521]'
                                    }`}>
                                    {faq.question}
                                </h4>

                                {/* Plus Icon jo open hone par 45 degree rotate ho kar 'X' ban jayega */}
                                <motion.div
                                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: "backOut" }}
                                    className={`flex-shrink-0 transition-colors duration-300 ${openFaq === index ? 'text-[#4A1521]' : 'text-[#C8A97E]'
                                        }`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                </motion.div>
                            </div>

                            {/* Animated Answer Area */}
                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="w-8 h-[1px] bg-[#C8A97E]/50 mb-4"></div>
                                        <p className="text-[#555555] text-[13px] md:text-[14.5px] leading-[1.8] text-justify md:text-left">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ==========================================
                6. BOTTOM BANNER (Fixed Parallax Background with image20)
                ========================================== */}
            <section 
                className="relative w-full py-20 md:py-28 px-4 overflow-hidden flex flex-col items-center justify-center bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url('/image20.png')` }}
            >
                {/* Dark Maroon Overlay matching the reference */}
                <div className="absolute inset-0 bg-[#3A0F18]/60 z-0"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-widest mb-4 md:mb-6 uppercase">
                        LET'S CREATE YOUR PERFECT OUTFIT
                    </h2>

                    <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
                        <div className="w-16 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-2 h-2 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-1 h-1 bg-[#C8A97E]"></div></div>
                        <div className="w-16 h-[1px] bg-[#C8A97E]"></div>
                    </div>

                    <p className="text-[#FDFBF7]/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
                        Every masterpiece begins with a conversation. Whether you're envisioning a timeless bridal gown, an elegant formal ensemble, or a custom boutique collection, our experienced team is ready to bring your ideas to life.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <Link to="/book-appointment" className="w-full sm:w-auto bg-[#C8A97E] text-white px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#C8A97E] hover:bg-transparent hover:text-[#C8A97E] transition-all duration-300 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            BOOK APPOINTMENT
                        </Link>
                        <span className="hidden sm:block text-white/50 font-['Cinzel',serif] italic text-sm">OR</span>
                        <a href="https://wa.me/923099853117" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent text-white px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#C8A97E] hover:bg-[#C8A97E] transition-all duration-300 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 text-[#C8A97E] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.337a9.982 9.982 0 004.825 1.25H12.012c5.506 0 9.989-4.479 9.989-9.985S17.518 2 12.012 2zm5.722 14.34c-.242.684-1.385 1.29-1.937 1.343-.523.051-1.18.258-3.953-.889-3.344-1.383-5.513-4.81-5.681-5.034-.168-.225-1.355-1.802-1.355-3.435 0-1.632.846-2.434 1.144-2.738.298-.304.646-.381.86-.381.215 0 .43.003.616.012.196.009.46-.077.72.552.268.648.878 2.146.953 2.298.076.151.127.327.025.53-.102.201-.153.327-.305.504-.153.176-.322.381-.458.504-.152.14-.316.294-.136.607.18.312.802 1.328 1.722 2.148 1.19.1.066 1.765 1.579 1.968 1.815.202.241.196.425.127.63-.068.204-.32.613-.655.855-.336.241-.673.303-.92.24-.247-.061-1.464-.54-1.464-.54s-.308-.242-.684-.242z" /></svg>
                            WHATSAPP +92 309 9853117
                        </a>
                    </div>
                </div>
            </section>
            <InstagramFeed/>

        </div>
    );
};

export default Contact;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Hover Effects ke sath)
// ==========================================
const CornerBox = ({ children, className }) => (
    <div className={`relative border border-[#C8A97E]/30 p-6 md:p-10 bg-white/80 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(74,21,33,0.25)] hover:bg-[#4A1521] group cursor-default rounded-sm ${className}`}>
        {/* Animated Corner Accents */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C8A97E]/60 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C8A97E]/60 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C8A97E]/60 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C8A97E]/60 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
        
        <div className="relative z-10">{children}</div>
    </div>
);

// ==========================================
// 2. CARD CONTENT (Reuse karne ke liye)
// ==========================================
const CardContent = ({ feature }) => (
    <CornerBox className="h-full flex flex-col items-center text-center justify-center gap-4">
        {/* Icon Circle */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C8A97E]/60 flex items-center justify-center flex-shrink-0 text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] group-hover:text-[#4A1521] transition-all duration-500 shadow-sm">
            <svg className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
        </div>
        
        {/* Text Area */}
        <div className="w-full flex flex-col items-center">
            <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-white font-bold text-[16px] md:text-[19px] tracking-wide mb-2 transition-colors duration-500">
                {feature.title}
            </h3>
            <div className="w-8 h-[1px] bg-[#C8A97E]/50 mb-2.5 group-hover:w-14 group-hover:bg-[#C8A97E] transition-all duration-500"></div>
            <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#666666] group-hover:text-[#FDFBF7]/90 transition-colors duration-500 px-1">
                {feature.desc}
            </p>
        </div>
    </CornerBox>
);

// ==========================================
// 3. REUSABLE SECTION HEADER
// ==========================================
const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-6">
        <div className="flex items-center gap-3 w-full max-w-[280px] md:max-w-[320px]">
            <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
            <h4 className="text-[#C8A97E] text-[11px] md:text-[12px] tracking-[0.35em] font-bold uppercase whitespace-nowrap">WHY CHOOSE US</h4>
            <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
        </div>
        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#4A1521] font-bold mt-3 md:mt-4 tracking-wide">
            The Signature Difference
        </h2>
    </div>
);

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const WhyChooseUs = () => {
    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

    const features = [
        { title: "30+ YEARS", desc: "Trusted Tailoring Excellence over three decades.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
        { title: "FAMILY LEGACY", desc: "Founded by Rana Ilyas, continued by the next generation.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
        { title: "BOUTIQUE ORDERS", desc: "Bulk production for premium fashion brands.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
        { title: "PERFECT FIT", desc: "Precision stitching and luxury finishing guaranteed.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16h12 M7 16V9a2 2 0 012-2h5l3 2v7 M14 10v3 M16 16v.01" /> },
        { title: "HAPPY CLIENTS", desc: "Trusted by thousands of satisfied customers.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
        { title: "QUALITY PROMISE", desc: "Every stitch is inspected for premium delivery.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
    ];

    // Mobile Sticky Scroll Logic
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

    return (
        <section className="relative w-full bg-[#FDFBF7]">
            
            {/* Background Aesthetics */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#C8A97E]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            {/* =========================================================
                DESKTOP VIEW (Visible on Tablet & Desktop)
                ========================================================= */}
            <div className="hidden md:block py-20 px-10 lg:px-16 xl:px-24 max-w-[1400px] mx-auto relative z-10">
                <div className="mb-16">
                    <SectionHeader />
                </div>

                <motion.div 
                    variants={staggerContainer} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true, amount: 0.1 }} 
                    className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={fadeUp}>
                            <CardContent feature={feature} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* =========================================================
                MOBILE VIEW (Sticky Horizontal Scroll - ZERO GAP FIX)
                ========================================================= */}
            <div ref={targetRef} className="block md:hidden relative h-[280vh] z-10">
                {/* 
                  🚨 FIX: Header aur Cards dono ko h-screen ke andar rakha hai
                  taake vertical gap khatam ho jaye aur layout compact rahay!
                */}
                <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#FDFBF7] py-6">
                    
                    {/* Header inside Sticky Screen */}
                    <div className="mb-6">
                        <SectionHeader />
                    </div>

                    {/* Horizontal Scrolling Cards Track */}
                    <div className="w-full relative">
                        <motion.div 
                            style={{ x: xTransform }} 
                            className="flex gap-4 px-[8vw] w-max will-change-transform"
                        >
                            {features.map((feature, idx) => (
                                <div key={idx} className="w-[82vw] sm:w-[65vw] flex-shrink-0">
                                    <CardContent feature={feature} />
                                </div>
                            ))}
                            {/* End Spacer */}
                            <div className="w-[8vw] flex-shrink-0"></div>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default WhyChooseUs;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const OurProcess = () => {
    // 8-Step Detailed Process Data with matching SVGs and Descriptions
    const processSteps = [
        { 
            step: "01",
            title: "Consultation", 
            desc: "We understand your style, occasion, and unique requirements.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> 
        },
        { 
            step: "02",
            title: "Measurements", 
            desc: "Precise full-body measurements for an absolutely perfect fit.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l-7-7m7 7l-2.121 2.121m4.242-4.242L16.879 9.879m-4.242 4.242l2.121 2.121" /> 
        },
        { 
            step: "03",
            title: "Fabric Selection", 
            desc: "Choose from our curated collection of premium luxury fabrics.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /> 
        },
        { 
            step: "04",
            title: "Design Finalization", 
            desc: "Perfecting silhouettes, cuts, and embroidery details.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> 
        },
        { 
            step: "05",
            title: "Expert Tailoring", 
            desc: "Master craftsmanship bringing your exclusive design to life.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-4.879-4.879l-4.242-4.242m4.242 4.242a3 3 0 10-4.242 4.242 3 3 0 004.242-4.242zM7.05 7.05L2.172 2.172m4.879 4.879l4.242 4.242m-4.242-4.242a3 3 0 114.242-4.242 3 3 0 01-4.242 4.242z" /> 
        },
        { 
            step: "06",
            title: "Hand Finishing", 
            desc: "Delicate hand-embellishments and luxurious final touches.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> 
        },
        { 
            step: "07",
            title: "Quality Inspection", 
            desc: "Every single stitch is checked for absolute perfection.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
        },
        { 
            step: "08",
            title: "Final Delivery", 
            desc: "Beautifully packaged and delivered on time, ready to wear.",
            icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> 
        }
    ];

    // ==========================================
    // MOBILE ANIMATION LOGIC (Sticky Horizontal Scroll)
    // ==========================================
    const mobileTargetRef = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: mobileTargetRef,
        offset: ["start start", "end end"] 
    });
    
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150, 
        damping: 25,    
        mass: 0.5       
    });

    const mobileXTransform = useTransform(
        smoothProgress, 
        [0, 1], 
        ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
    );

    // ==========================================
    // SHARED COMPONENTS
    // ==========================================
    const SectionHeader = () => (
        <div className="text-center flex flex-col items-center px-4 w-full">
            <h3 className="text-[11px] md:text-[12px] text-[#C8A97E] tracking-[0.4em] uppercase font-bold mb-3">
                OUR PROCESS
            </h3>
            <h2 className="font-['Cinzel',serif] text-3xl md:text-5xl text-[#4A1521] mb-5 font-bold tracking-wide">
                Excellence Unveiled
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10 md:mb-16">
                <div className="w-10 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
                <div className="flex gap-1.5">
                    <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
                </div>
                <div className="w-10 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
            </div>
        </div>
    );

    const ProcessStepCard = ({ step, index }) => (
        <div className="flex flex-col items-center text-center group cursor-pointer relative h-full">
            {/* Number Badge */}
            <div className="absolute top-0 right-1/2 translate-x-[35px] -translate-y-2 w-7 h-7 bg-[#C8A97E] rounded-full text-white text-[11px] font-bold flex items-center justify-center border-2 border-white group-hover:border-[#4A1521] group-hover:bg-[#4A1521] transition-colors duration-500 shadow-sm z-20">
                {step.step}
            </div>
            
            {/* Icon Container */}
            <div className="w-[85px] h-[85px] bg-white border border-[#C8A97E]/40 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#4A1521] group-hover:border-[#4A1521] group-hover:shadow-[0_10px_20px_rgba(74,21,33,0.15)] group-hover:-translate-y-2 transition-all duration-500 relative z-10">
                <svg 
                    className="w-9 h-9 text-[#C8A97E] group-hover:text-white transition-colors duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    {step.icon}
                </svg>
            </div>
            
            {/* Text Content */}
            <h4 className="font-['Cinzel',serif] text-[#4A1521] text-[15px] md:text-[16px] font-bold tracking-wider mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                {step.title}
            </h4>
            <p className="text-[12px] md:text-[13px] text-[#777777] leading-[1.6] max-w-[200px] text-center mx-auto transition-colors duration-300 group-hover:text-[#4A1521]">
                {step.desc}
            </p>
        </div>
    );

    // ==========================================
    // ANIMATION VARIANTS (Desktop)
    // ==========================================
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#FDFBF7]/50 font-['Montserrat',sans-serif]">
            
            {/* =========================================================
                DESKTOP VIEW (Visible on lg and above)
                ========================================================= */}
            <section className="hidden lg:block py-28 px-8 lg:px-16 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionHeader />
                </motion.div>

                <div className="max-w-[1300px] mx-auto relative mt-10">
                    {/* Horizontal Dashed Lines for Desktop Grid (Rows 1 & 2) */}
                    <div className="absolute top-[42px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#C8A97E]/30 z-0"></div>
                    <div className="absolute top-[282px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#C8A97E]/30 z-0"></div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-4 gap-y-20 gap-x-6 relative z-10"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ProcessStepCard step={step} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Text */}
                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-[#555555] text-[14px] leading-relaxed mt-24 max-w-3xl mx-auto italic border-t border-[#C8A97E]/20 pt-8"
                >
                    Every outfit follows a carefully managed production process designed to ensure exceptional quality, precision, and timely delivery. From the first consultation to the final inspection, every detail is handled with professionalism and care.
                </motion.p>
            </section>

            {/* =========================================================
                MOBILE VIEW (Sticky Horizontal Scroll - Visible below lg)
                ========================================================= */}
            <section ref={mobileTargetRef} className="block lg:hidden relative h-[500vh]">
                <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16 bg-[#FDFBF7]">
                    
                    <SectionHeader />

                    <div className="relative w-full mt-8">
                        <motion.div 
                            style={{ x: mobileXTransform, width: "max-content" }}
                            className="flex flex-nowrap items-start px-[10vw] will-change-transform relative z-10"
                        >
                            {/* Horizontal Dashed Line for Mobile Scroll */}
                            <div className="absolute top-[42px] left-[15vw] right-[15vw] h-[1px] border-t-2 border-dashed border-[#C8A97E]/40 z-0"></div>

                            {processSteps.map((step, index) => (
                                <div key={index} className="w-[65vw] sm:w-[45vw] flex-shrink-0 relative z-10">
                                    <ProcessStepCard step={step} index={index} />
                                </div>
                            ))}
                            
                            <div className="w-[10vw] flex-shrink-0"></div>
                        </motion.div>
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default OurProcess;
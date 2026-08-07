import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    // ==========================================
    // 1. DESKTOP ANIMATION LOGIC (Intersection Observer)
    // ==========================================
    const [isVisibleDesktop, setIsVisibleDesktop] = useState(false);
    const desktopRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleDesktop(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (desktopRef.current) {
            observer.observe(desktopRef.current);
        }

        return () => {
            if (desktopRef.current) observer.unobserve(desktopRef.current);
        };
    }, []);

    // ==========================================
    // 2. MOBILE ANIMATION LOGIC (Framer Motion)
    // ==========================================
    const mobileTargetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: mobileTargetRef,
    });
    // Mobile par kitna aagay slide karna hai
    const mobileXTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <>
            {/* =========================================================
                DESKTOP VIEW (Hidden on Mobile, Visible on lg and above)
                ========================================================= */}
            <section
                ref={desktopRef}
                className="hidden lg:block relative w-full py-28 px-12 lg:px-24 bg-[#FDFBF7] overflow-hidden"
            >
                {/* Background Texture & Glows for Luxury Depth */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A1521' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#C8A97E]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#4A1521]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

                {/* Right Side Watermark Image */}
                <div className={`absolute -right-40 bottom-[-30px] top-10 flex items-center justify-end pointer-events-none pr-0 z-0 overflow-hidden transition-all duration-[1500ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-[0.8]' : 'translate-x-32 opacity-0'}`}>
                    <img src="/image3.webp" alt="Mannequin Watermark" className="h-[105%] w-auto object-contain translate-y-4 drop-shadow-2xl" />
                </div>

                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-16 relative z-10">

                    {/* Left Side: Image (Slides from LEFT) */}
                    <div className={`w-[45%] flex justify-start relative transform transition-all duration-1000 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
                        
                        {/* Luxury Frame Container */}
                        <div className="relative p-2.5 bg-white shadow-[0_20px_50px_rgba(74,21,33,0.08)] border border-[#C8A97E]/20 rounded-sm w-full max-w-[480px] group">
                            
                            {/* Offset Golden Border Effect */}
                            <div className="absolute -inset-4 border border-[#C8A97E]/40 -z-10 translate-x-4 translate-y-4 rounded-sm transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                            <img src="/image2.webp" alt="Rana Abdullah Studio" className="w-full h-auto object-cover rounded-sm filter contrast-[1.05]" />
                            
                            {/* Premium 30+ Years Badge */}
                            <div className={`absolute -bottom-8 -right-10 bg-[#4A1521] text-white py-6 px-8 rounded-sm shadow-2xl border-l-4 border-b-4 border-[#C8A97E] transform transition-all duration-1000 delay-500 origin-bottom-right flex flex-col items-center justify-center group-hover:scale-105 ${isVisibleDesktop ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                                <h4 className="font-['Cinzel',serif] text-[42px] text-[#C8A97E] font-bold leading-none mb-1 tracking-wider drop-shadow-md">30+</h4>
                                <p className="text-[11px] tracking-[0.25em] font-medium uppercase m-0 text-center text-white/90">Years of <br />Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content (Slides from RIGHT) */}
                    <div className="w-[50%] space-y-6 text-left relative z-20 pl-4 pr-12">
                        <div className={`transform transition-all duration-1000 delay-300 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <h3 className="text-[12px] text-[#C8A97E] tracking-[0.4em] uppercase font-bold">THE STUDIO</h3>
                        </div>
                        
                        <div className={`transform transition-all duration-1000 delay-500 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <h2 className="font-['Cinzel',serif] text-[56px] text-[#4A1521] leading-[1.1] font-bold tracking-wide">
                                Crafting Elegance <br />
                                <span className="font-medium italic text-[#C8A97E]">Stitch by Stitch</span>
                            </h2>
                        </div>
                        
                        {/* Standardized Diamond Divider */}
                        <div className={`flex items-center gap-2 py-2 transform transition-all duration-1000 delay-700 ease-out ${isVisibleDesktop ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
                        </div>

                        <div className={`transform transition-all duration-1000 delay-[900ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <p className="text-[15px] text-[#555555] leading-[1.8] font-['Montserrat',sans-serif] max-w-md text-justify">
                                At Rana Abdullah Stitching Studio, we turn your imagination into reality. Every outfit we create reflects perfection, grace and individuality. Because your style deserves nothing less than absolute mastery.
                            </p>
                        </div>
                        
                        <div className={`flex items-center gap-10 py-4 transform transition-all duration-1000 delay-[1100ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <div className="group cursor-default">
                                <span className="block font-['Cinzel',serif] text-2xl font-bold text-[#4A1521] group-hover:text-[#C8A97E] transition-colors">100%</span>
                                <span className="text-[10px] text-[#555555] uppercase tracking-[0.2em] font-bold mt-1 block">Custom Fit</span>
                            </div>
                            <div className="w-[1px] h-10 bg-[#C8A97E]/30"></div>
                            <div className="group cursor-default">
                                <span className="block font-['Cinzel',serif] text-2xl font-bold text-[#4A1521] group-hover:text-[#C8A97E] transition-colors">Premium</span>
                                <span className="text-[10px] text-[#555555] uppercase tracking-[0.2em] font-bold mt-1 block">Craftsmanship</span>
                            </div>
                        </div>
                        
                        {/* ==========================================
                            DESKTOP BUTTON FIXED HERE
                        ========================================== */}
                        <div className={`pt-4 transform transition-all duration-1000 delay-[1300ms] ease-out ${isVisibleDesktop ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <Link 
                                to="/about-us" 
                                className="bg-[#4A1521] text-white px-9 py-4 text-[12px] font-bold tracking-[0.25em] uppercase rounded-[2px] hover:bg-transparent hover:text-[#4A1521] border border-[#4A1521] transition-all duration-500 shadow-[0_10px_30px_rgba(74,21,33,0.2)] hover:shadow-none inline-block hover:-translate-y-1 relative z-50 pointer-events-auto"
                            >
                                READ OUR STORY
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================
                MOBILE VIEW (Visible below lg, Framer Motion Horizontal Scroll)
                ========================================================= */}
            <section
                ref={mobileTargetRef}
                className="block lg:hidden relative w-full h-[250vh] bg-[#FDFBF7]"
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

                    {/* Background Texture & Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A1521' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-[300px] bg-[#C8A97E]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

                    <motion.div
                        style={{ x: mobileXTransform }}
                        className="flex items-center gap-10 px-[8vw] w-max relative z-10 will-change-transform"
                    >
                        {/* Slide 1: Image & Badge */}
                        <div className="w-[84vw] md:w-[60vw] flex-shrink-0 flex justify-center py-10">
                            <div className="relative p-2.5 bg-white shadow-[0_15px_40px_rgba(74,21,33,0.08)] border border-[#C8A97E]/30 rounded-sm w-full max-w-[350px]">
                                <img src="/image2.webp" alt="Rana Abdullah Studio" className="w-full h-auto object-cover rounded-sm filter contrast-[1.05]" />
                                
                                <div className="absolute -bottom-6 -right-4 bg-[#4A1521] text-white p-5 rounded-sm shadow-xl border-l-[3px] border-b-[3px] border-[#C8A97E] flex flex-col items-center justify-center">
                                    <h4 className="font-['Cinzel',serif] text-3xl text-[#C8A97E] font-bold leading-none mb-1">30+</h4>
                                    <p className="text-[9px] tracking-[0.25em] font-bold uppercase m-0 text-center">Years of <br />Excellence</p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2: Text Content */}
                        <div className="w-[85vw] md:w-[70vw] flex-shrink-0 flex flex-col justify-center items-center text-center px-4">
                            <h3 className="text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase font-bold mb-3">THE STUDIO</h3>
                            
                            <h2 className="font-['Cinzel',serif] text-[36px] md:text-5xl text-[#4A1521] leading-[1.15] font-bold mb-4">
                                Crafting Elegance <br /> <span className="italic text-[#C8A97E] font-medium">Stitch by Stitch</span>
                            </h2>
                            
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
                                <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                                <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                                <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                                <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
                            </div>
                            
                            <p className="text-[13.5px] text-[#555555] leading-[1.8] font-['Montserrat',sans-serif] px-2 mb-8 max-w-[320px]">
                                At Rana Abdullah Stitching Studio, we turn your imagination into reality. Every outfit we create reflects perfection, grace and individuality. Because your style deserves nothing less than absolute mastery.
                            </p>
                            
                            <div className="flex items-center justify-center gap-8 mb-10 w-full">
                                <div>
                                    <span className="block font-['Cinzel',serif] text-xl font-bold text-[#4A1521]">100%</span>
                                    <span className="text-[9px] text-[#555555] uppercase tracking-[0.2em] font-bold mt-1 block">Custom Fit</span>
                                </div>
                                <div className="w-[1px] h-8 bg-[#C8A97E]/40"></div>
                                <div>
                                    <span className="block font-['Cinzel',serif] text-xl font-bold text-[#4A1521]">Premium</span>
                                    <span className="text-[9px] text-[#555555] uppercase tracking-[0.2em] font-bold mt-1 block">Crafts<br/>manship</span>
                                </div>
                            </div>
                            
                            {/* ==========================================
                                MOBILE BUTTON FIXED HERE
                            ========================================== */}
                            <div className="relative z-[99] w-full max-w-[280px]">
                                <Link
                                    to="/about-us"
                                    className="block w-full text-center relative z-[99] bg-[#4A1521] text-white px-6 py-4 text-[11px] font-bold tracking-[0.25em] uppercase rounded-sm border border-[#4A1521] shadow-[0_10px_20px_rgba(74,21,33,0.15)] hover:bg-transparent hover:text-[#4A1521] transition-all duration-500 pointer-events-auto"
                                >
                                    READ OUR STORY
                                </Link>
                            </div>
                        </div>

                        {/* Spacer for proper alignment at the end of mobile scroll */}
                        <div className="w-[5vw] flex-shrink-0"></div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
                className="hidden lg:block relative w-full py-24 px-12 lg:px-24 bg-[#FDFBF7] overflow-hidden"
            >
                {/* Background Texture */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A1521' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
                ></div>
                
                {/* Right Side Watermark Image */}
                <div className={`absolute -right-40 bottom-[-30px] top-10 flex items-center justify-end pointer-events-none pr-0 z-0 overflow-hidden transition-all duration-[1500ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-[0.9]' : 'translate-x-32 opacity-0'}`}>
                    <img src="/image3.png" alt="Mannequin Watermark" className="h-[105%] w-auto object-contain translate-y-4" />
                </div>

                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-16 relative z-10">
                    
                    {/* Left Side: Image (Slides from LEFT) */}
                    <div className={`w-[45%] flex justify-start relative transform transition-all duration-1000 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
                        <div className="relative p-3 bg-white shadow-2xl border border-[#C8A97E]/30 rounded-sm w-full max-w-[500px]">
                            <img src="/image2.png" alt="Rana Abdullah Studio" className="w-full h-auto object-cover rounded-sm filter contrast-[1.05]" />
                            <div className={`absolute -bottom-6 -right-8 bg-[#4A1521] text-white p-6 rounded-sm shadow-xl border-l-4 border-[#C8A97E] transform transition-all duration-1000 delay-500 origin-bottom-right ${isVisibleDesktop ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                                <h4 className="font-['Cinzel',serif] text-4xl text-[#C8A97E] font-bold leading-none mb-1">30+</h4>
                                <p className="text-xs tracking-[0.2em] font-medium uppercase m-0">Years of <br/>Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content (Slides from RIGHT) */}
                    <div className="w-[50%] space-y-6 text-left relative z-20 pr-12">
                        <div className={`transform transition-all duration-1000 delay-300 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <h3 className="text-sm text-[#C8A97E] tracking-[0.35em] uppercase font-bold">ABOUT US</h3>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-500 ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <h2 className="font-['Cinzel',serif] text-[54px] text-[#4A1521] leading-tight font-medium">Crafting Elegance <br /> Stitch by Stitch</h2>
                        </div>
                        <div className={`flex items-center gap-3 py-1 transform transition-all duration-1000 delay-700 ease-out ${isVisibleDesktop ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}>
                            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-[900ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <p className="text-base text-[#555555] leading-relaxed font-['Montserrat',sans-serif] max-w-md">
                                At Rana Abdullah Stitching Studio, we turn your  <br/>
                                 imagination into reality. Every outfit we create reflects perfection, grace and individuality. Because your style deserves nothing less than absolute mastery.
                            </p>
                        </div>
                        <div className={`flex items-center gap-8 py-2 transform transition-all duration-1000 delay-[1100ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <div>
                                <span className="block font-['Cinzel',serif] text-xl font-bold text-[#4A1521]">100%</span>
                                <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">Custom Fit</span>
                            </div>
                            <div className="w-[1px] h-8 bg-[#C8A97E]/40"></div>
                            <div>
                                <span className="block font-['Cinzel',serif] text-xl font-bold text-[#4A1521]">Premium</span>
                                <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">Craftsmanship</span>
                            </div>
                        </div>
                        <div className={`pt-4 transform transition-all duration-1000 delay-[1300ms] ease-out ${isVisibleDesktop ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                            <a href="#story" className="bg-[#4A1521] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-transparent hover:text-[#4A1521] border border-[#4A1521] transition-all duration-300 shadow-xl hover:shadow-none inline-block hover:-translate-y-1">READ OUR STORY</a>
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
                    
                    {/* Background Texture */}
                    <div 
                        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A1521' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
                    ></div>

                    <motion.div 
                        style={{ x: mobileXTransform }}
                        className="flex items-center gap-12 px-[8vw] w-max relative z-10 will-change-transform"
                    >
                        {/* Slide 1: Image & Badge */}
                        <div className="w-[84vw] md:w-[60vw] flex-shrink-0 flex justify-center">
                            <div className="relative p-2 bg-white shadow-2xl border border-[#C8A97E]/30 rounded-sm w-full">
                                <img src="/image2.png" alt="Rana Abdullah Studio" className="w-full h-auto object-cover rounded-sm filter contrast-[1.05]" />
                                <div className="absolute -bottom-5 -right-2 bg-[#4A1521] text-white p-4 rounded-sm shadow-xl border-l-4 border-[#C8A97E]">
                                    <h4 className="font-['Cinzel',serif] text-3xl text-[#C8A97E] font-bold leading-none mb-1">30+</h4>
                                    <p className="text-[10px] tracking-[0.2em] font-medium uppercase m-0">Years of <br/>Excellence</p>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2: Text Content */}
                        <div className="w-[85vw] md:w-[70vw] flex-shrink-0 space-y-5 text-center">
                            <div><h3 className="text-xs text-[#C8A97E] tracking-[0.35em] uppercase font-bold">ABOUT US</h3></div>
                            <div><h2 className="font-['Cinzel',serif] text-[38px] md:text-5xl text-[#4A1521] leading-tight font-medium">Crafting Elegance <br /> Stitch by Stitch</h2></div>
                            <div className="flex items-center justify-center gap-3 py-1">
                                <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
                                <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                                <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
                            </div>
                            <div>
                                <p className="text-sm text-[#555555] leading-relaxed font-['Montserrat',sans-serif] px-2">
                                    At Rana Abdullah Stitching Studio, we turn your imagination into reality. Every outfit we create reflects perfection, grace and individuality. Because your style deserves nothing less than absolute mastery.
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-6 py-2">
                                <div>
                                    <span className="block font-['Cinzel',serif] text-lg font-bold text-[#4A1521]">100%</span>
                                    <span className="text-[9px] text-[#555555] uppercase tracking-wider font-semibold">Custom Fit</span>
                                </div>
                                <div className="w-[1px] h-6 bg-[#C8A97E]/40"></div>
                                <div>
                                    <span className="block font-['Cinzel',serif] text-lg font-bold text-[#4A1521]">Premium</span>
                                    <span className="text-[9px] text-[#555555] uppercase tracking-wider font-semibold">Craftsmanship</span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <a href="#story" className="bg-[#4A1521] text-white px-6 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm border border-[#4A1521] shadow-xl inline-block">READ OUR STORY</a>
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
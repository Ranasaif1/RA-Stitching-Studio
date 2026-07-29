import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Hover Effects ke sath)
// ==========================================
const CornerBox = ({ children, className }) => (
  <div className={`relative border border-[#C8A97E]/30 p-6 md:p-8 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(74,21,33,0.4)] hover:bg-[#4A1521] group cursor-pointer ${className}`}>
    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

// ==========================================
// 2. CARD CONTENT (Reuse karne ke liye)
// ==========================================
const CardContent = ({ feature }) => (
  <CornerBox className="h-full flex flex-col items-start gap-5">
    <div className="w-14 h-14 rounded-full border border-[#C8A97E] flex items-center justify-center flex-shrink-0 text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-[#4A1521] transition-colors duration-500 shadow-sm">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
    </div>
    <div>
      <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] font-bold text-[18px] mb-3 transition-colors duration-500">
        {feature.title}
      </h3>
      <p className="text-[13px] leading-[1.8] text-[#555555] group-hover:text-[#FDFBF7]/90 transition-colors duration-500">
        {feature.desc}
      </p>
    </div>
  </CornerBox>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const WhyChooseUs = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const features = [
    { title: "30+ YEARS", desc: "Trusted Tailoring Excellence.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
    { title: "FAMILY LEGACY", desc: "Founded by Rana Ilyas, continued by the next generation.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
    { title: "BOUTIQUE ORDERS", desc: "Bulk production for fashion brands and retailers.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { title: "PRECISION CRAFTSMANSHIP", desc: "Premium stitching, luxury finishing, and perfect fit.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 16h12 M7 16V9a2 2 0 012-2h5l3 2v7 M14 10v3 M16 16v.01" /> },
    { title: "CLIENT SATISFACTION", desc: "Trusted by thousands of happy customers.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
    { title: "QUALITY PROMISE", desc: "Every stitch inspected with premium finishing guaranteed.", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
  ];

  // Mobile Sticky Scroll Logic
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // -83% takes the row exactly to the last card based on 6 items
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    // YAHAN SE 'overflow-hidden' HATA DIYA HAI
    <section className="relative w-full bg-[#FDFBF7]">
      
      {/* SECTION HEADER */}
      <div className="pt-20 text-center flex flex-col items-center mb-10 md:mb-16 px-6 relative z-10">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-[1px] bg-[#C8A97E]/50"></div>
          <h4 className="text-[#C8A97E] text-[11px] tracking-[0.3em] font-bold uppercase whitespace-nowrap">WHY CHOOSE US</h4>
          <div className="flex-1 h-[1px] bg-[#C8A97E]/50"></div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP VIEW (Visible on tablet & desktop - Normal Grid)
          ========================================================= */}
      <div className="hidden md:block pb-20 px-12 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <CardContent feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          MOBILE VIEW (Visible on mobile only - Sticky Scroll)
          ========================================================= */}
      <div ref={targetRef} className="block md:hidden relative h-[300vh]">
        {/* Sticky Container - screen ko yahan rok dega */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div 
            style={{ x: xTransform }} 
            className="flex gap-4 px-6 w-max will-change-transform"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="w-[82vw] flex-shrink-0">
                <CardContent feature={feature} />
              </div>
            ))}
            {/* End Spacer: Aakhir mein thori jagah chori hai */}
            <div className="w-[10vw] flex-shrink-0"></div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
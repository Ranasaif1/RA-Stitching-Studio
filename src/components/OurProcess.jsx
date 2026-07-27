import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const OurProcess = () => {
  const processData = [
    {
      step: "01",
      title: "CONSULTATION",
      desc: "We understand your style and requirements.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "FABRIC SELECTION",
      desc: "Choose from our premium quality fabrics.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h4v12H6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h8v9h-8" />
          <ellipse cx="8" cy="6" rx="2" ry="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="14" cy="15" rx="4" ry="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 15c0 1.5 2 2 4 2" />
        </svg>
      )
    },
    {
      step: "03",
      title: "MEASUREMENTS",
      desc: "Precise measurements for the perfect fit.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9v10a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9H8M9.5 13H8M9.5 17H8" />
        </svg>
      )
    },
    {
      step: "04",
      title: "STITCHING",
      desc: "Expert craftsmanship with attention to detail.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V9a2 2 0 012-2h5l3 2v7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10v3" />
          <circle cx="16" cy="16" r="0.5" fill="currentColor" />
        </svg>
      )
    },
    {
      step: "05",
      title: "QUALITY CHECK",
      desc: "Every stitch is checked for perfection.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      step: "06",
      title: "DELIVERY",
      desc: "On-time delivery with perfect finishing.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  // ==========================================
  // MOBILE ANIMATION LOGIC
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
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <h3 className="text-[20px] md:text-[20px] text-[#C8A97E] tracking-[0.3em] uppercase font-bold mb-2">
        OUR PROCESS
      </h3>
      <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
    </div>
  );

  // ==========================================
  // REUSABLE PROCESS STEP COMPONENT
  // ==========================================
  const ProcessStep = ({ item }) => (
    <div className="flex flex-col items-center group cursor-pointer w-full">
      <div className="w-16 h-16 md:w-14 md:h-14 rounded-full border border-[#C8A97E] flex items-center justify-center bg-[#FDFBF7] text-[#C8A97E] mb-4 md:mb-3 group-hover:bg-[#C8A97E] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 relative z-10">
        {item.icon}
      </div>
      <div className="font-['Cinzel',serif] text-[#C8A97E] text-xl font-bold mb-1 transition-transform duration-300 group-hover:scale-110">
        {item.step}
      </div>
      <h4 className="text-[10px] md:text-[9px] font-bold tracking-[0.15em] text-[#4A1521] uppercase mb-2 text-center transition-colors duration-300">
        {item.title}
      </h4>
      <p className="text-[11px] md:text-[10px] text-[#777777] leading-[1.6] max-w-[180px] md:max-w-[160px] text-center mx-auto transition-colors duration-300 group-hover:text-[#4A1521]">
        {item.desc}
      </p>
    </div>
  );

  return (
    // 🚨 YAHAN SE 'overflow-hidden' HATA DIYA HAI 🚨
    <div className="bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* =========================================================
          DESKTOP VIEW
          ========================================================= */}
      <section className="hidden lg:block py-24 px-8 lg:px-16 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader />
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto mt-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[28px] left-[8%] right-[8%] h-[1px] border-t-[1.5px] border-dashed border-[#C8A97E]/60 z-0 origin-left"
          ></motion.div>

          <motion.div 
            className="grid grid-cols-6 gap-x-4 relative z-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {processData.map((item, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <ProcessStep item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MOBILE VIEW (Pinned / Sticky Horizontal Scroll)
          ========================================================= */}
      <section ref={mobileTargetRef} className="block lg:hidden relative h-[400vh]">
        {/* Sticky top-0 ab perfectly lock karega screen ko */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16 bg-[#FDFBF7]">
          
          <SectionHeader />

          <div className="relative w-full mt-4">
            <motion.div 
              style={{ x: mobileXTransform, width: "max-content" }}
              className="flex flex-nowrap items-start px-[10vw] will-change-transform relative z-10"
            >
              
              <div className="absolute top-[32px] left-[20vw] right-[20vw] h-[1px] border-t-[1.5px] border-dashed border-[#C8A97E]/40 -z-10"></div>

              {processData.map((item, index) => (
                <div key={index} className="w-[50vw] sm:w-[35vw] flex-shrink-0">
                  <ProcessStep item={item} />
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
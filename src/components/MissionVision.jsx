import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Luxury Hover Effects)
// ==========================================
const CornerBox = ({ children, className }) => (
  <div className={`relative border border-[#C8A97E]/30 p-10 md:p-14 bg-white/60 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(74,21,33,0.25)] hover:bg-[#4A1521] group cursor-default rounded-sm overflow-hidden ${className}`}>
    
    {/* Animated Corner Accents */}
    <div className="absolute top-3 left-3 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#C8A97E]/40 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
    <div className="absolute top-3 right-3 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#C8A97E]/40 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#C8A97E]/40 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-[#C8A97E]/40 group-hover:border-[#C8A97E] transition-colors duration-500"></div>
    
    {/* Subtle Royal Pattern on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 bg-[radial-gradient(#C8A97E_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
    
    <div className="relative z-10 w-full h-full">
      {children}
    </div>
  </div>
);

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const MissionVision = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Aesthetics for Depth */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#C8A97E]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Subtle Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 w-full max-w-[280px]">
            <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
            <h4 className="text-[#C8A97E] text-[11px] tracking-[0.35em] font-bold uppercase whitespace-nowrap">OUR CORE</h4>
            <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          
          {/* ==========================================
              OUR MISSION CARD
              ========================================== */}
          <motion.div variants={fadeUp} className="h-full">
            <CornerBox className="flex flex-col items-center text-center h-full">
              
              {/* Icon in Luxury Circle Wrapper */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#C8A97E]/50 flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-500 shadow-sm mb-6 md:mb-8 group-hover:shadow-[0_0_20px_rgba(200,169,126,0.3)]">
                <div className="text-[#C8A97E] group-hover:text-[#4A1521] transition-all duration-500 group-hover:scale-110">
                  <svg className="w-9 h-9 md:w-11 md:h-11" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <div>
                <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-white transition-colors duration-500 text-2xl md:text-[28px] font-bold tracking-wide mb-4">
                  OUR MISSION
                </h3>
                
                {/* Standardized Diamond Divider */}
                <div className="flex items-center justify-center gap-1.5 mb-6">
                  <div className="w-12 h-[1px] bg-[#C8A97E]/60 group-hover:bg-[#C8A97E] transition-colors duration-500"></div>
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] group-hover:bg-[#C8A97E] transition-colors duration-500 flex items-center justify-center"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] group-hover:bg-[#C8A97E] transition-colors duration-500 flex items-center justify-center"></div>
                  <div className="w-12 h-[1px] bg-[#C8A97E]/60 group-hover:bg-[#C8A97E] transition-colors duration-500"></div>
                </div>
                
                <p className="text-[14px] md:text-[15px] text-[#666666] group-hover:text-[#FDFBF7]/90 transition-colors duration-500 leading-[1.8] max-w-sm mx-auto">
                  To preserve the legacy of quality tailoring while creating elegant garments that reflect confidence, beauty, and individuality through exceptional craftsmanship.
                </p>
              </div>
            </CornerBox>
          </motion.div>

          {/* ==========================================
              OUR VISION CARD
              ========================================== */}
          <motion.div variants={fadeUp} className="h-full">
            <CornerBox className="flex flex-col items-center text-center h-full">
              
              {/* Icon in Luxury Circle Wrapper */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#C8A97E]/50 flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-500 shadow-sm mb-6 md:mb-8 group-hover:shadow-[0_0_20px_rgba(200,169,126,0.3)]">
                <div className="text-[#C8A97E] group-hover:text-[#4A1521] transition-all duration-500 group-hover:scale-110">
                  <svg className="w-9 h-9 md:w-11 md:h-11" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              
              <div>
                <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-white transition-colors duration-500 text-2xl md:text-[28px] font-bold tracking-wide mb-4">
                  OUR VISION
                </h3>
                
                {/* Standardized Diamond Divider */}
                <div className="flex items-center justify-center gap-1.5 mb-6">
                  <div className="w-12 h-[1px] bg-[#C8A97E]/60 group-hover:bg-[#C8A97E] transition-colors duration-500"></div>
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] group-hover:bg-[#C8A97E] transition-colors duration-500 flex items-center justify-center"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] group-hover:bg-[#C8A97E] transition-colors duration-500 flex items-center justify-center"></div>
                  <div className="w-12 h-[1px] bg-[#C8A97E]/60 group-hover:bg-[#C8A97E] transition-colors duration-500"></div>
                </div>
                
                <p className="text-[14px] md:text-[15px] text-[#666666] group-hover:text-[#FDFBF7]/90 transition-colors duration-500 leading-[1.8] max-w-sm mx-auto">
                  To become one of Pakistan's most trusted luxury tailoring studios, recognized for premium quality, timeless designs, and reliable boutique production.
                </p>
              </div>
            </CornerBox>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
import React from 'react';
import { motion } from 'framer-motion';

// Updated CornerBox for Luxury Hover Effects
const CornerBox = ({ children, className }) => (
  // group class add ki hai taake hover par iske andar ki cheezon ka color change kar sakein
  <div className={`relative border border-[#C8A97E]/30 p-6 md:p-8 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(74,21,33,0.4)] hover:bg-[#4A1521] group cursor-pointer ${className}`}>
    {/* Corners (Hover par thore zyada clear ho jayenge) */}
    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#C8A97E] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 w-full">
      {children}
    </div>
  </div>
);

const MissionVision = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <motion.div variants={fadeUp} className="h-full">
          <CornerBox className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left h-full">
            
            {/* Icon - Hover par thora sa zoom hoga */}
            <div className="text-[#C8A97E] group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <div>
              {/* Heading - Hover par Gold ho jayegi */}
              <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-500 text-2xl mb-2">
                OUR MISSION
              </h3>
              
              <div className="flex items-center justify-center md:justify-start gap-1.5 mb-4">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
              </div>
              
              {/* Text - Hover par White/Cream ho jayega */}
              <p className="text-[13px] text-[#555555] group-hover:text-[#FDFBF7]/90 transition-colors duration-500 leading-relaxed">
                To preserve the legacy of quality tailoring while creating elegant garments that reflect confidence, beauty, and individuality through exceptional craftsmanship.
              </p>
            </div>
          </CornerBox>
        </motion.div>

        {/* Vision */}
        <motion.div variants={fadeUp} className="h-full">
          <CornerBox className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left h-full">
            
            {/* Icon - Hover par thora sa zoom hoga */}
            <div className="text-[#C8A97E] group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            
            <div>
              {/* Heading - Hover par Gold ho jayegi */}
              <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-500 text-2xl mb-2">
                OUR VISION
              </h3>
              
              <div className="flex items-center justify-center md:justify-start gap-1.5 mb-4">
                <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
              </div>
              
              {/* Text - Hover par White/Cream ho jayega */}
              <p className="text-[13px] text-[#555555] group-hover:text-[#FDFBF7]/90 transition-colors duration-500 leading-relaxed">
                To become one of Pakistan's most trusted luxury tailoring studios, recognized for premium quality, timeless designs, and reliable boutique production.
              </p>
            </div>
          </CornerBox>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default MissionVision;
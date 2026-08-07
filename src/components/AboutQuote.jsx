import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Luxury Expanding Hover Effects)
// ==========================================
const CornerBox = ({ children, className }) => (
  <div className={`relative p-8 md:p-16 bg-white/70 backdrop-blur-xl transition-all duration-[800ms] hover:shadow-[0_20px_60px_-15px_rgba(200,169,126,0.25)] hover:bg-white/90 group rounded-[2px] ${className}`}>
    
    {/* Subtle Inner Border */}
    <div className="absolute inset-4 border border-[#C8A97E]/10 pointer-events-none group-hover:border-[#C8A97E]/20 transition-colors duration-700"></div>

    {/* Elegant Expanding Corners */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-[#C8A97E]/60 transition-all duration-700 ease-out group-hover:w-12 group-hover:h-12 group-hover:border-[#C8A97E]"></div>
    <div className="absolute top-0 right-0 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-[#C8A97E]/60 transition-all duration-700 ease-out group-hover:w-12 group-hover:h-12 group-hover:border-[#C8A97E]"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-[#C8A97E]/60 transition-all duration-700 ease-out group-hover:w-12 group-hover:h-12 group-hover:border-[#C8A97E]"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1.5px] border-r-[1.5px] border-[#C8A97E]/60 transition-all duration-700 ease-out group-hover:w-12 group-hover:h-12 group-hover:border-[#C8A97E]"></div>
    
    {children}
  </div>
);

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const AboutQuote = () => {
  // Stagger Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 md:py-32 px-4 text-center w-full bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Aesthetics for Depth */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "linear-gradient(#4A1521 1px, transparent 1px), linear-gradient(90deg, #4A1521 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] bg-[#C8A97E]/10 rounded-[100%] blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-[1000px] mx-auto relative z-10"
      >
        <CornerBox className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
          
          {/* Giant Floating Background Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 50 }}
            whileInView={{ opacity: 0.04, scale: 1, rotate: -5, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 text-[#4A1521] text-[250px] md:text-[400px] font-serif leading-none select-none z-0"
          >
            “
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Small Top Quote Icon */}
            <motion.div variants={itemVariant} className="text-[#C8A97E] text-5xl md:text-6xl font-serif mb-6 leading-none drop-shadow-sm hover:scale-110 transition-transform duration-500 cursor-default">
              “
            </motion.div>
            
            {/* Main Quote Text */}
            <motion.h2 
              variants={itemVariant} 
              className="font-['Cinzel',serif] text-[28px] sm:text-3xl md:text-4xl lg:text-[46px] text-[#4A1521] mb-8 font-semibold leading-[1.3] md:leading-[1.25] tracking-wide"
            >
              <span className="italic font-medium text-[#C8A97E]">Three Decades</span> of Craftsmanship. <br className="hidden md:block" /> 
              One Promise of <span className="italic font-medium text-[#C8A97E]">Excellence.</span>
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p variants={itemVariant} className="text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] font-bold uppercase text-[#555555]">
              Where Every Stitch Tells A Story
            </motion.p>
            
            {/* Standardized Diamond Divider */}
            <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 mt-12 opacity-80">
              <div className="w-16 md:w-24 h-[1px] bg-[#C8A97E]/70"></div>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
              <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
              <div className="w-16 md:w-24 h-[1px] bg-[#C8A97E]/70"></div>
            </motion.div>
            
          </div>
        </CornerBox>
      </motion.div>
    </section>
  );
};

export default AboutQuote;
import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. CORNER BOX (Luxury Expanding Hover Effects)
// ==========================================
const CornerBox = ({ children, className }) => (
  <div className={`relative border border-[#C8A97E]/30 p-8 md:p-16 bg-white/40 backdrop-blur-md transition-all duration-700 hover:shadow-[0_15px_40px_-15px_rgba(200,169,126,0.3)] hover:bg-white/60 hover:border-[#C8A97E]/50 group ${className}`}>
    
    {/* Corners - Hover par yeh bahar ki taraf expand honge */}
    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C8A97E] transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C8A97E] transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C8A97E] transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C8A97E] transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1"></div>
    
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
    <section className="py-24 px-6 text-center max-w-5xl mx-auto relative overflow-hidden">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10"
      >
        <CornerBox className="border-t-0 border-b-0 py-16 px-6 md:px-12 relative overflow-hidden">
          
          {/* Giant Floating Background Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 0.05, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 text-[#C8A97E] text-[200px] md:text-[350px] font-serif leading-none select-none z-0"
          >
            “
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Small Top Quote Icon */}
            <motion.div variants={itemVariant} className="text-[#C8A97E] text-5xl md:text-6xl font-serif mb-4 leading-none drop-shadow-md">
              “
            </motion.div>
            
            {/* Main Quote Text */}
            <motion.h2 variants={itemVariant} className="font-['Cinzel',serif] italic text-3xl md:text-4xl lg:text-5xl text-[#4A1521] mb-6 font-medium leading-snug md:leading-tight">
              Three Decades of Craftsmanship. <br className="hidden md:block" /> One Promise of Excellence.
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p variants={itemVariant} className="text-[10px] md:text-[12px] tracking-[0.4em] font-bold uppercase text-[#555555]">
              WHERE EVERY STITCH TELLS A STORY.
            </motion.p>
            
            {/* Animated Divider */}
            <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 mt-10 opacity-80">
              <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
              <div className="w-2.5 h-2.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-1 h-1 bg-[#C8A97E]"></div></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
              <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
            </motion.div>
            
          </div>
        </CornerBox>
      </motion.div>
    </section>
  );
};

export default AboutQuote;
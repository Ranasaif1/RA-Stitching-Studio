import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  // ==========================================
  // STAGGERED ANIMATION LOGIC
  // ==========================================
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center font-['Montserrat',sans-serif] overflow-hidden bg-[#2D0D14]">
      
      {/* ==========================================
          BACKGROUND WITH SLOW ZOOM EFFECT
          ========================================== */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.08 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('/image20.webp')" }}
      ></motion.div>
      
      {/* Premium Multi-layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D0D14] via-[#4A1521]/85 to-[#2D0D14] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-0"></div>
      
      {/* Subtle Golden Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      {/* ==========================================
          FLOATING TEXT & BUTTON CONTENT
          ========================================== */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 text-center px-6 md:px-12 max-w-4xl flex flex-col items-center"
      >
        
        {/* Subtitle */}
        <motion.h3 variants={itemVariants} className="text-[#C8A97E] text-[11px] md:text-[13px] tracking-[0.4em] font-bold uppercase mb-4 drop-shadow-md">
           The Ultimate Experience
        </motion.h3>

        {/* Main Title - Italic Accent ke sath */}
        <motion.h2 
          variants={itemVariants} 
          className="text-white font-['Cinzel',serif] text-[38px] md:text-5xl lg:text-[64px] font-medium mb-6 leading-[1.15] drop-shadow-2xl tracking-wide"
        >
          Let's Create Your <br className="hidden md:block" /> 
          <span className="italic text-[#C8A97E] font-semibold">Perfect Outfit</span>
        </motion.h2>
        
        {/* Standardized Diamond Golden Divider */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
            <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
        </motion.div>

        {/* Paragraph */}
        <motion.p 
          variants={itemVariants} 
          className="text-[#FDFBF7]/90 text-[14px] md:text-[16px] tracking-wide mb-12 drop-shadow-md max-w-xl leading-[1.9]"
        >
          Book an appointment today and let's bring your dream outfit to life with our expert craftsmanship and personalized tailoring.
        </motion.p>
        
        {/* ==========================================
            UPGRADED LARGE LUXURY BUTTON
            ========================================== */}
        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <Link 
            to="/appointment"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#C8A97E] text-[#4A1521] px-10 py-5 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase transition-all duration-500 rounded-sm overflow-hidden shadow-[0_10px_30px_rgba(200,169,126,0.25)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.5)] hover:-translate-y-1 w-full sm:w-auto"
          >
            {/* Hover Fill Effect (Smooth sliding from left) */}
            <div className="absolute inset-0 w-0 bg-white transition-all duration-[600ms] ease-out group-hover:w-full z-0"></div>
            
            <span className="relative z-10 transition-colors duration-300">BOOK AN APPOINTMENT</span>
            
            {/* Calendar Icon - Slight tilt on hover */}
            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </Link>
        </motion.div>

      </motion.div>
      
    </section>
  );
};

export default CallToAction;
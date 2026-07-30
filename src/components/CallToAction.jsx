import React from 'react';
import { motion } from 'framer-motion';

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
    <section 
      className="relative w-full py-32 md:py-40 bg-cover bg-center bg-fixed flex items-center justify-center font-['Montserrat',sans-serif] overflow-hidden"
      style={{ backgroundImage: "url('/image20.png')" }}
    >
      
      {/* Dark Maroon Overlay with slight gradient for premium depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A1521]/80 via-[#4A1521]/90 to-[#4A1521]/95 z-0"></div>

      {/* ==========================================
          FLOATING TEXT & BUTTON CONTENT
          ========================================== */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // 30% screen par aane ke baad animation chalegi
        className="relative z-10 text-center px-6 md:px-12 max-w-4xl flex flex-col items-center"
      >
        
        {/* Main Title - Size barha diya hai */}
        <motion.h2 
          variants={itemVariants} 
          className="text-white font-['Cinzel',serif] text-[36px] md:text-5xl lg:text-[54px] font-medium mb-6 leading-[1.15] drop-shadow-2xl"
        >
          Let's Create Your <br className="hidden md:block" /> Perfect Outfit
        </motion.h2>
        
        {/* Golden Divider */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
        </motion.div>

        {/* Paragraph - Thora bold aur clear kiya hai */}
        <motion.p 
          variants={itemVariants} 
          className="text-[#FDFBF7]/90 text-[13px] md:text-[15px] tracking-wide mb-10 drop-shadow-md max-w-lg leading-relaxed"
        >
          Book an appointment today and let's bring your dream outfit to life with our expert craftsmanship.
        </motion.p>
        
        {/* ==========================================
            UPGRADED LARGE BUTTON
            ========================================== */}
        <motion.div variants={itemVariants}>
          <motion.button 
            // Hover aur Tap par button interact karega
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Padding (px-10 py-5) aur Text Size (text-[12px]) barha kar button BADA kar diya hai
            className="border border-[#C8A97E] text-[#C8A97E] bg-transparent px-10 py-5 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase hover:bg-[#C8A97E] hover:text-[#4A1521] transition-all duration-500 rounded-sm flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(200,169,126,0.15)] hover:shadow-[0_0_35px_rgba(200,169,126,0.4)]"
          >
            BOOK AN APPOINTMENT
            
            {/* Calendar Icon - Size barha diya hai (w-5 h-5) */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </motion.button>
        </motion.div>

      </motion.div>
      
    </section>
  );
};

export default CallToAction;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Craftsmanship = () => {
  // Staggered Animations Setup
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
    <section className="w-full flex flex-col lg:flex-row items-center bg-[#FDFBF7] font-['Montserrat',sans-serif] overflow-hidden">
      
      {/* ==========================================
          LEFT SIDE: Framed Image (Slides in from Left)
          ========================================== */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        // Animation tab chalegi jab 30% screen par aaye
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-[55%] p-6 md:p-16 lg:py-24 lg:pl-[8%] lg:pr-4"
      >
        <div className="relative p-3 bg-white shadow-2xl border border-[#C8A97E]/30 rounded-sm group hover:-translate-y-2 transition-transform duration-700">
          
          <img 
            src="/image4.png" 
            alt="Our Craftsmanship Detail" 
            className="w-full h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-sm filter contrast-[1.05]"
          />

          {/* Decorative Frame Corners */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#4A1521]/20 transition-all duration-500 group-hover:border-[#C8A97E]"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-[#4A1521]/20 transition-all duration-500 group-hover:border-[#C8A97E]"></div>

        </div>
      </motion.div>

      {/* ==========================================
          RIGHT SIDE: Text Content (Staggered Fade-Up)
          ========================================== */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        // Mobile par Center, Desktop (lg) par Left align
        className="w-full lg:w-[45%] flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-8 py-16 md:px-16 lg:pr-[10%] lg:pl-8 relative z-10"
      >
        
        {/* Sub Heading */}
        <motion.h4 variants={itemVariants} className="text-[#C8A97E] text-[10px] md:text-[11px] tracking-[0.3em] font-bold uppercase mb-3">
          OUR CRAFTSMANSHIP
        </motion.h4>
        
        {/* Main Title */}
        <motion.h2 variants={itemVariants} className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[42px] text-[#4A1521] leading-[1.15] mb-5 font-medium max-w-lg mx-auto lg:mx-0">
          Where Passion Meets <br className="hidden md:block" /> Perfect Craft
        </motion.h2>

        {/* Golden Ornamental Divider */}
        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-6 origin-center lg:origin-left w-full">
          <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p variants={itemVariants} className="text-[#555555] text-[12px] md:text-[13px] leading-[1.9] mb-8 max-w-md mx-auto lg:mx-0">
          Every detail matters. From the finest fabrics to the perfect stitch, we put our heart into creating outfits that reflect your personality.
        </motion.p>

        {/* Discover More Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/about-us"
            className="inline-block border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            DISCOVER More
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Craftsmanship;
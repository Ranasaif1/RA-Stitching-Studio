import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurPromise = () => {
  // Animations setup
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Thora delay barhaya hai taake mazeed smooth lagay
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Thoda zyada neechay se slide karega
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center bg-[#FDFBF7] font-['Montserrat',sans-serif] overflow-hidden">

      {/* Signature Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        `}
      </style>

      {/* ==========================================
          LEFT SIDE: Text Content
          ========================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        // 🌟 MAGIC FIX: 'amount: 0.3' ka matlab jab 30% hissa screen par samne hoga, tabhi animation chalegi
        viewport={{ once: true, amount: 0.3 }}
        // Mobile ke liye items-center aur text-center lagaya hai, large screens par items-start aur text-left hoga
        className="w-full lg:w-[45%] flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-8 py-16 md:px-16 lg:pl-[10%] lg:pr-8 relative z-10"
      >

        {/* Sub Heading */}
        <motion.h4 variants={itemVariants} className="text-[#C8A97E] text-[10px] md:text-[11px] tracking-[0.3em] font-bold uppercase mb-3">
          OUR PROMISE
        </motion.h4>

        {/* Main Title */}
        <motion.h2 variants={itemVariants} className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[42px] text-[#4A1521] leading-[1.15] mb-5 font-medium max-w-lg mx-auto lg:mx-0">
          Crafted With Passion, <br className="hidden md:block" /> Tailored With Love
        </motion.h2>

        {/* Golden Ornamental Divider */}
        {/* Mobile par center, lg par left origin */}
        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-6 origin-center lg:origin-left w-full">
          <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p variants={itemVariants} className="text-[#555555] text-[12px] md:text-[13px] leading-[1.9] mb-8 max-w-md mx-auto lg:mx-0">
          At Rana Abdullah Stitching Studio, we believe every outfit reflects your personality. From the finest fabrics to the smallest details, we ensure perfection in every stitch.
        </motion.p>

        {/* Cursive Signature */}
        <motion.div variants={itemVariants} className="text-[#C8A97E] font-['Great_Vibes',cursive] text-4xl md:text-5xl tracking-wide mb-10">
          Rana Abdullah
        </motion.div>

        {/* Discover Our Story Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/about-us"
            className="inline-block border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            DISCOVER OUR STORY
          </Link>
        </motion.div>

      </motion.div>

      {/* ==========================================
          RIGHT SIDE: Framed Image
          ========================================== */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        // Image ki animation bhi tabhi chalegi jab ye visible hogi
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-[55%] p-6 md:p-16 lg:py-24 lg:pr-[8%] lg:pl-4"
      >
        <div className="relative p-3 bg-white shadow-2xl border border-[#C8A97E]/30 rounded-sm group hover:-translate-y-2 transition-transform duration-700">

          <img
            src="/image5.webp"
            alt="Our Promise - Stitching Detail"
            className="w-full h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-sm filter contrast-[1.05]"
          />

          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#4A1521]/20 transition-all duration-500 group-hover:border-[#C8A97E]"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-[#4A1521]/20 transition-all duration-500 group-hover:border-[#C8A97E]"></div>

        </div>
      </motion.div>

    </section>
  );
};

export default OurPromise;
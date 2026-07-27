import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// ==========================================
// PREMIUM ANIMATED COUNTER (Framer Motion Engine)
// ==========================================
const AnimatedCounter = ({ end, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Framer motion ki animate API numbers ko perfectly smooth speed deti hai
      const controls = animate(0, end, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setValue(Math.floor(v)); // Decimal hata kar perfect integer banata hai
        }
      });
      return () => controls.stop();
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {/* toLocaleString() se 10000 ban jata hai 10,000 (Premium Look) */}
      {value.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => {
  const statsData = [
    { 
      endValue: 30, 
      suffix: "+",
      label: "YEARS OF EXPERIENCE", 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C8A97E] mb-3 md:mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 4v16M16 4v16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h2M6 12h2M6 16h2" />
        </svg>
      )
    },
    { 
      endValue: 10000, 
      suffix: "+",
      label: "HAPPY CLIENTS", 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C8A97E] mb-3 md:mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-4.418 0-8 2.686-8 6v4c0 3.314 3.582 6 8 6s8-2.686 8-6v-4c0-3.314-3.582-6-8-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 4.5v15M16 4.5v15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 2l1 2M15 2l-1 2M12 1v3" />
        </svg>
      )
    },
    { 
      endValue: 50000, 
      suffix: "+",
      label: "OUTFITS STITCHED", 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C8A97E] mb-3 md:mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2 2 0 00-2 2 c0 1 1 1.5 2 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7l-8 4h16l-8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11v8c0 1.5 1 2 5 2s5-.5 5-2v-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v10" />
        </svg>
      )
    },
    { 
      endValue: 98, 
      suffix: "%",
      label: "CLIENT SATISFACTION", 
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C8A97E] mb-3 md:mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="10" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a3 3 0 110-6 3 3 0 010 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l-1.5 6L12 19l4.5 2L15 15" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full flex flex-col xl:flex-row overflow-hidden font-['Montserrat',sans-serif]">
      
      {/* Signature Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        `}
      </style>

      {/* ==========================================
          LEFT SIDE: Maroon Box (Slides in from Left)
          ========================================== */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full xl:w-[35%] bg-[#4A1521] px-8 md:px-16 xl:pl-[10%] xl:pr-12 py-16 md:py-20 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-[#C8A97E]/30 relative z-10 shadow-xl xl:shadow-none"
      >
        <h4 className="text-[#C8A97E] text-[10px] tracking-[0.25em] font-bold uppercase mb-3">
          WHY CHOOSE US
        </h4>
        <h2 className="text-white font-['Cinzel',serif] text-3xl md:text-[38px] leading-[1.2] mb-5 font-medium">
          Excellence in <br className="hidden md:block" /> Every Stitch
        </h2>
        <p className="text-[#D3C5C8] text-[12px] md:text-[13px] leading-[1.9] mb-10 max-w-sm">
          We combine creativity, craftsmanship and attention to detail to deliver outfits that make you feel confident and beautiful.
        </p>
        <div className="text-[#C8A97E] font-['Great_Vibes',cursive] text-4xl md:text-[42px] tracking-wide">
          Rana Abdullah
        </div>
      </motion.div>

      {/* ==========================================
          RIGHT SIDE: Cream Box (Staggered Fade Up)
          ========================================== */}
      <div className="w-full xl:w-[65%] bg-[#FDFBF7] py-16 xl:py-0 px-4 md:px-8 xl:pr-[5%] flex items-center justify-center relative z-0">
        
        <motion.div 
          className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 } // Items ek ek kar ke aayenge
            }
          }}
        >
          {statsData.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              // CSS Magic for borders: Mobile par 2x2 grid cross banayega, Desktop par sidhi line banayega
              className={`flex flex-col items-center justify-center text-center p-6 md:px-4 md:py-10 border-[#C8A97E]/30
                ${(i === 0 || i === 1) ? 'border-b md:border-b-0' : ''} 
                ${i !== 3 ? 'md:border-r' : ''} 
                ${(i % 2 === 0) ? 'border-r md:border-r-0' : ''}
              `}
            >
              
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center cursor-pointer"
              >
                {stat.icon}
              </motion.div>

              <h3 className="font-['Cinzel',serif] text-[28px] md:text-3xl lg:text-4xl text-[#4A1521] mb-2 md:mb-3 font-medium">
                <AnimatedCounter end={stat.endValue} suffix={stat.suffix} />
              </h3>

              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#4A1521] leading-relaxed max-w-[120px] mx-auto opacity-80">
                {stat.label}
              </p>

            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Stats;
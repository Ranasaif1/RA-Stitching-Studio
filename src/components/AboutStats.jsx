import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

// ==========================================
// MAIN STATS COMPONENT
// ==========================================
const AboutStats = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const stats = [
    { num: 30, suffix: "+", label: "YEARS OF EXPERIENCE", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M14.5 9v10a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1" /> },
    { num: 50000, suffix: "+", label: "OUTFITS STITCHED", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12 M7 16V9a2 2 0 012-2h5l3 2v7 M14 10v3" /> },
    { num: 10000, suffix: "+", label: "HAPPY CLIENTS", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" /> },
    { num: 500, suffix: "+", label: "BOUTIQUES & BRANDS", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1" /> },
    { num: 100, suffix: "%", label: "COMMITMENT TO QUALITY", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
  ];

  return (
    // Background with elegant gradient and shadows
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#4A1521] via-[#3A0F18] to-[#2D0D14] py-20 lg:py-24 border-y border-[#C8A97E]/30 z-20 shadow-2xl">
      
      {/* Subtle Background Glow for luxury feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[#C8A97E]/5 blur-[120px] pointer-events-none"></div>

      {/* Inner Container */}
      <div className="relative z-10 px-6 max-w-[1400px] mx-auto">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          // Responsive Grid: Mobile par 2, Tablet par 3, Desktop par 5 columns
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-14 gap-x-6"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp} 
              // Aakhri item mobile par center mein laane ke liye col-span-2 lagaya hai
              className={`flex flex-col items-center text-center group cursor-default ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              
              {/* Premium Icon Wrapper with Hover Fill */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#C8A97E]/40 bg-[#C8A97E]/5 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] group-hover:-translate-y-2 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-[#C8A97E] group-hover:text-[#4A1521] transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {stat.icon}
                </svg>
              </div>
              
              {/* Animated Counter */}
              <h3 className="font-['Cinzel',serif] text-4xl md:text-[42px] text-white font-bold mb-2 tracking-wider drop-shadow-md group-hover:text-[#C8A97E] transition-colors duration-300">
                <AnimatedCounter to={stat.num} suffix={stat.suffix} />
              </h3>
              
              {/* Small Label Text */}
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#C8A97E]/80 uppercase mt-1 px-2 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default AboutStats;
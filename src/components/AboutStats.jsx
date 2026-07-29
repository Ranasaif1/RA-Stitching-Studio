import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  // Jab element 50% screen par aayega tabhi animation chalegi
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2.5, // 2.5 seconds mein counter chale ga
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            // Number ko format kar ke (jaise 50000 ko 50,000) display karna
            ref.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const AboutStats = () => {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  // Data ko update kiya hai taake Counter ko 'number' aur 'suffix' alag alag mil sake
  const stats = [
    { num: 30, suffix: "+", label: "YEARS OF EXPERIENCE", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M14.5 9v10a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1" /> },
    { num: 50000, suffix: "+", label: "OUTFITS STITCHED", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12 M7 16V9a2 2 0 012-2h5l3 2v7 M14 10v3" /> },
    { num: 10000, suffix: "+", label: "HAPPY CLIENTS", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" /> },
    { num: 500, suffix: "+", label: "BOUTIQUES & BRANDS SERVED", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1" /> },
    { num: 100, suffix: "%", label: "COMMITMENT TO QUALITY", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
  ];

  return (
    // yahan se 'my-10' (margin) hata diya hai aur background brand ka Maroon (Red) laga diya hai.
    // Is se yeh oopar walay section ke sath bilkul judd jaye ga.
    <section className="w-full bg-[#4A1521] border-y border-[#C8A97E]/30 relative z-20 shadow-xl">
      
      {/* Inner Container */}
      <div className="py-16 px-6 max-w-[1400px] mx-auto">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }} 
          className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4 divide-x-0 md:divide-x divide-[#C8A97E]/30"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center px-4 group">
              
              {/* Icon - Gold color with subtle hover bounce */}
              <svg className="w-10 h-10 text-[#C8A97E] mb-3 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {stat.icon}
              </svg>
              
              {/* Animated Counter - Gold Color */}
              <h3 className="font-['Cinzel',serif] text-3xl md:text-[32px] text-[#C8A97E] font-bold mb-1 tracking-wide">
                <AnimatedCounter to={stat.num} suffix={stat.suffix} />
              </h3>
              
              {/* Label Text - Light Cream Color (taake Maroon background par parha ja sake) */}
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#FDFBF7]/80 uppercase mt-1">
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
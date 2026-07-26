import React, { useState, useEffect, useRef } from 'react';

// Custom Number Counter Component
const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detect karne ke liye IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ek dafa chalne ke baad disconnect kar diya
        }
      },
      { threshold: 0.5 } // Jab 50% section screen par aye tab trigger ho
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Counting Animation Logic
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds mein count complete hoga
    const increment = end / (duration / 16); // 60 FPS ke hisaab se step

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start)); // Decimal ko round off kiya
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  // Data array update kar diya counter component ke mutabiq
  const statsData = [
    { 
      endValue: 30, 
      suffix: "+",
      label: "YEARS OF EXPERIENCE", 
      icon: (
        <svg className="w-10 h-10 text-[#C8A97E] mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10 text-[#C8A97E] mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10 text-[#C8A97E] mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10 text-[#C8A97E] mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
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

      {/* Left Side: Maroon Box */}
      <div className="w-full xl:w-[35%] bg-[#4A1521] px-8 md:pl-[10%] xl:pr-12 py-20 flex flex-col justify-center border-r border-[#C8A97E]/20">
        <h4 className="text-[#C8A97E] text-[10px] tracking-[0.25em] font-bold uppercase mb-3">
          WHY CHOOSE US
        </h4>
        <h2 className="text-white font-['Cinzel',serif] text-3xl md:text-[38px] leading-[1.1] mb-5 font-medium">
          Excellence in Every Stitch
        </h2>
        <p className="text-[#D3C5C8] text-[12px] leading-[1.9] mb-10 max-w-sm">
          We combine creativity, craftsmanship and attention to detail to deliver outfits that make you feel confident and beautiful.
        </p>
        <div className="text-[#C8A97E] font-['Great_Vibes',cursive] text-4xl md:text-[42px] tracking-wide">
          Rana Abdullah
        </div>
      </div>

      {/* Right Side: Cream Box */}
      <div className="w-full xl:w-[65%] bg-[#FDFBF7] py-16 xl:py-0 px-4 md:pr-[5%] flex items-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center px-4 ${
                i !== statsData.length - 1 ? 'md:border-r border-[#C8A97E]/30' : ''
              }`}
            >
              
              {/* Icon */}
              <div className="flex justify-center items-center">
                {stat.icon}
              </div>

              {/* Number Animated Counter */}
              <h3 className="font-['Cinzel',serif] text-3xl md:text-4xl text-[#4A1521] mb-3 font-medium">
                <AnimatedCounter end={stat.endValue} suffix={stat.suffix} />
              </h3>

              {/* Label */}
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#4A1521] leading-relaxed max-w-[120px] mx-auto">
                {stat.label}
              </p>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Stats;
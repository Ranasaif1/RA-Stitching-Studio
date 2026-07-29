import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// ==========================================
// ANIMATED COUNTER COMPONENT (For 30+)
// ==========================================
const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2, // 2 seconds mein counter chalega
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const OurStory = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: 3-Image Staggered Layout */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.1 }} 
          transition={{ duration: 0.8 }}
          // lg screen par right padding, mobile par center alignment ke liye adjust kiya
          className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-stretch gap-10 md:gap-14 pr-0 lg:pr-6"
        >
          
          {/* IMAGE 1: Top Right (Visible on ALL screens) */}
          {/* Mobile par self-center, bari screen par self-end */}
          <div className="relative self-center lg:self-end w-[95%] md:w-[85%] group">
            {/* 30+ Years Badge with Animated Counter */}
            <div className="absolute -top-6 -left-4 md:-left-12 z-30 bg-[#4A1521] border-2 border-[#C8A97E] rounded-t-full rounded-b-xl p-4 md:p-6 text-center shadow-2xl w-24 md:w-32 flex flex-col items-center">
              <span className="text-[#C8A97E] text-2xl md:text-3xl font-['Cinzel',serif] font-bold">
                <AnimatedCounter to={30} suffix="+" />
              </span>
              <span className="text-[#C8A97E] text-[7px] md:text-[9px] uppercase tracking-widest mt-1">Years of Craftsmanship</span>
              <div className="mt-2 w-full flex justify-center">
                <svg className="w-5 h-1.5 md:w-8 md:h-3 text-[#C8A97E]" viewBox="0 0 40 10" fill="currentColor">
                  <path d="M20 5 L15 0 L10 5 L15 10 Z M20 5 L25 0 L30 5 L25 10 Z" />
                </svg>
              </div>
            </div>
            
            <img 
              src="/image18.png" 
              alt="Rana Ilyas Tailoring" 
              className="w-full h-auto object-cover shadow-xl grayscale sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 ease-in-out" 
            />
          </div>

          {/* IMAGE 2: Middle Left (HIDDEN ON MOBILE: 'hidden lg:block') */}
          <div className="hidden lg:block relative self-start w-[85%] md:w-[75%] border-[6px] md:border-8 border-[#FDFBF7] shadow-xl group z-20">
            <img 
              src="/image15.png" 
              alt="Craftsmanship" 
              className="w-full h-auto object-cover grayscale sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 ease-in-out" 
            />
          </div>

          {/* IMAGE 3: Bottom Right (HIDDEN ON MOBILE: 'hidden lg:block') */}
          <div className="hidden lg:block relative self-end w-[70%] md:w-[55%] border-[6px] md:border-8 border-[#FDFBF7] shadow-xl group z-20 mr-2 md:mr-8">
            <img 
              src="/image16.png" 
              alt="Premium Details" 
              className="w-full h-auto object-cover grayscale sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 ease-in-out" 
            />
          </div>

        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8 }}
          // Mobile par text-center, desktop (lg) par text-left
          className="w-full lg:w-1/2 relative z-10 text-center lg:text-left"
        >
          <h4 className="text-[#C8A97E] text-[12px] md:text-[14px] tracking-[0.3em] font-bold uppercase mb-3">OUR STORY</h4>
          <h2 className="font-['Cinzel',serif] text-3xl md:text-[42px] leading-tight text-[#4A1521] mb-6 font-medium">
            A Legacy of Craftsmanship, <br className="hidden md:block" /> Continued with Passion
          </h2>
          
          {/* Divider: Mobile par center (justify-center), desktop par left (lg:justify-start) */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-12 h-[1px] bg-[#C8A97E]"></div>
          </div>

          {/* Text size ko mobile ke liye thora adjust kiya hai (text-[16px] md:text-[20px]) taake responsive rahay */}
          <div className="space-y-4 md:space-y-5 text-[16px] md:text-[20px] leading-[1.8] md:leading-[1.9] text-[#555555]">
            <p>Welcome to <strong>Rana Abdullah Stitching Studio</strong>, where tradition, craftsmanship, and timeless elegance come together to create garments that leave a lasting impression.</p>
            <p>Our story began more than 30 years ago when <strong>Mr. Rana Ilyas</strong> founded the business under the name <strong>Rana Tailors</strong>. Through honesty, dedication, and exceptional tailoring skills, he earned the trust of countless families by delivering garments known for their perfect fit and outstanding quality.</p>
            <p>Today, the next generation proudly carries forward his vision under a new identity—<strong>Rana Abdullah Stitching Studio</strong>.</p>
            <p>While our name has changed, our values remain the same.</p>
            <p>Whether it's a luxury bridal dress, elegant formal wear, sophisticated casual wear, or premium Luxury Pret, every piece is stitched with precision, premium fabrics, and meticulous attention to detail.</p>
            <p>We also proudly undertake bulk stitching orders for boutiques, fashion brands, designers, and retailers, delivering consistent quality, professional craftsmanship, and on-time production for every collection.</p>
            <p>For us, tailoring is more than stitching fabric—it is about creating confidence, elegance, and unforgettable moments.</p>
            
            <p className="text-[#4A1521] font-bold italic pt-4 border-t border-[#C8A97E]/20 mt-6">
              Every outfit we create carries forward a legacy that began with our founder, Rana Ilyas, and continues today through the next generation with the same dedication, craftsmanship, and passion.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
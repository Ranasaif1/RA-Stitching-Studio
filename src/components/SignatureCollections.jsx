import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SignatureCollections = () => {
  const collectionsData = [
    { title: "WEDDING COUTURE", img: "/image13.webp" },
    { title: "WESTERN COLLECTION", img: "/image29.webp" },
    { title: "EID COLLECTION", img: "/image12.webp" },
    { title: "PARTY WEAR", img: "/image10.webp" }
  ];

  // ==========================================
  // MOBILE ANIMATION LOGIC (Pin & Horizontal Scroll)
  // ==========================================
  const mobileTargetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: mobileTargetRef,
    offset: ["start start", "end end"] 
  });
  
  // Premium smooth inertia for the horizontal swipe
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, 
    damping: 25,    
    mass: 0.5       
  });

  // Track logic
  const mobileXTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );

  // ==========================================
  // REUSABLE BANNER CARD COMPONENT
  // ==========================================
  const BannerCard = ({ item }) => (
    <div className="relative w-full h-full group overflow-hidden rounded-md cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500">
      
      {/* Background Image */}
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = item.img.replace('.png', '.jpg');
        }}
      />
      
      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-[#4A1521]/60 transition-colors duration-500"></div>
      
      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <h4 className="text-white font-['Cinzel',serif] text-[18px] md:text-[20px] lg:text-[16px] xl:text-[20px] font-medium tracking-[0.1em] uppercase drop-shadow-lg text-center leading-snug transform transition-transform duration-500 group-hover:scale-105">
          {item.title}
        </h4>
      </div>
      
    </div>
  );

  // ==========================================
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <h3 className="text-[20px] md:text-[15px] text-[#C8A97E] tracking-[0.25em] font-bold uppercase mb-2">
        SIGNATURE COLLECTIONS
      </h3>
      <div className="flex items-center justify-center gap-1.5 mb-10">
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
    </div>
  );

  return (
    // Note: No 'overflow-hidden' on this wrapper to keep Sticky working perfectly
    <div className="bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* =========================================================
          DESKTOP VIEW (Visible on lg and above)
          ========================================================= */}
      <section className="hidden lg:block py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader />
        </motion.div>
        
        {/* 4 Banners Grid */}
        <motion.div 
          className="max-w-[1500px] mx-auto grid grid-cols-4 gap-4 h-[220px] xl:h-[250px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 } // Staggered Animation for Banners
            }
          }}
        >
          {collectionsData.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="h-full w-full"
            >
              <BannerCard item={item} />
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* =========================================================
          MOBILE VIEW (Pinned / Sticky Horizontal Scroll - Visible below lg)
          ========================================================= */}
      {/* h-[300vh] for 4 items to ensure the scroll speed is smooth */}
      <section ref={mobileTargetRef} className="block lg:hidden relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16 bg-[#FDFBF7]">
          
          <SectionHeader />

          {/* Wrapper for the moving track */}
          <div className="relative w-full mt-2">
            
            <motion.div 
              style={{ x: mobileXTransform, width: "max-content" }}
              className="flex flex-nowrap items-stretch gap-4 px-[10vw] will-change-transform"
            >
              {collectionsData.map((item, i) => (
                // Har banner ki width set ki hai aur height 250px di hai taake wide (chora) lagay
                <div key={i} className="w-[80vw] sm:w-[50vw] flex-shrink-0 h-[220px] sm:h-[250px]">
                  <BannerCard item={item} />
                </div>
              ))}
              
              {/* Spacer for proper alignment at the end of scroll */}
              <div className="w-[10vw] flex-shrink-0"></div>
            </motion.div>

          </div>
          
        </div>
      </section>

    </div>
  );
};

export default SignatureCollections;
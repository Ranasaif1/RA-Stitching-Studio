import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Collections = () => {
  const collectionsData = [
    { title: "Bridal Wear", img: "/image6.png" },
    { title: "Formal Wear", img: "/image7.png" },
    { title: "Casual Wear", img: "/image8.png" },
    { title: "Luxury Pret", img: "/image9.png" }
  ];

  // ==========================================
  // MOBILE ANIMATION LOGIC (Pin & Horizontal Scroll)
  // ==========================================
  const mobileTargetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: mobileTargetRef,
    offset: ["start start", "end end"] 
  });
  
  // 🌟 Premium Smooth Inertia (Physics-based scroll) 🌟
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, 
    damping: 25,    
    mass: 0.5       
  });

  // Track ko chalane ka perfect formula
  const mobileXTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );

  // ==========================================
  // REUSABLE CARD COMPONENT (Luxury Design)
  // ==========================================
  const CollectionCard = ({ item }) => (
    <div className="relative h-[450px] lg:h-[550px] w-full group overflow-hidden rounded-md cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-transparent hover:border-[#C8A97E]/50 transition-all duration-500">
      
      {/* Background Image with Hover Scale */}
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = item.img.replace('.png', '.jpg');
        }}
      />
      
      {/* Gradient Overlay (Darkens on hover for better text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A1521]/90 via-[#4A1521]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
        
        {/* Category Title */}
        <h3 className="text-white font-['Cinzel',serif] text-2xl lg:text-[28px] mb-2 font-medium uppercase tracking-wider drop-shadow-md transform transition-transform duration-500 group-hover:-translate-y-2">
          {item.title}
        </h3>
        
        {/* View Collection Link */}
        <div className="overflow-hidden">
          <p className="text-[#C8A97E] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 transform transition-transform duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            VIEW COLLECTION <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </p>
        </div>
        
      </div>
    </div>
  );

  // ==========================================
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <p className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase mb-3 font-bold">
        OUR COLLECTIONS
      </p>
      <h2 className="font-['Cinzel',serif] text-3xl md:text-5xl text-[#4A1521] mb-4 font-medium tracking-wide">
        Timeless Designs, Just For You
      </h2>
      <div className="flex items-center justify-center gap-2 mb-10 lg:mb-16">
        <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* =========================================================
          DESKTOP VIEW (Visible on lg and above)
          ========================================================= */}
      <section className="hidden lg:block py-24 px-8 lg:px-16 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 } // Staggered entry for cards
            }
          }}
        >
          {collectionsData.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
            >
              <CollectionCard item={item} />
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* =========================================================
          MOBILE VIEW (Pinned / Sticky Horizontal Scroll - Visible below lg)
          ========================================================= */}
      {/* Height 300vh rakhi hai 4 cards ke hisaab se scroll speed balance karne ke liye */}
      <section ref={mobileTargetRef} className="block lg:hidden relative h-[300vh]">
        
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16 bg-[#FDFBF7]">
          
          <SectionHeader />

          <motion.div 
            style={{ 
              x: mobileXTransform,
              width: "max-content" 
            }}
            className="flex flex-nowrap items-stretch gap-5 px-[8vw] mt-2 will-change-transform"
          >
            {collectionsData.map((item, i) => (
              <div key={i} className="w-[80vw] sm:w-[50vw] flex-shrink-0">
                <CollectionCard item={item} />
              </div>
            ))}
            {/* Spacer for final margin */}
            <div className="w-[8vw] flex-shrink-0"></div>
          </motion.div>
          
        </div>

      </section>

    </div>
  );
};

export default Collections;
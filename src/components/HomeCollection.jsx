import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collectionsData = [
    { 
      id: "bridal-wear",
      title: "Bridal Wear", 
      img: "/image6.webp",
      desc: "Exquisite handcrafted bridal dresses featuring luxurious embellishments, intricate embroidery, and timeless silhouettes for your special day."
    },
    { 
      id: "formal-wear",
      title: "Formal Wear", 
      img: "/image7.webp",
      desc: "Elegant evening ensembles and perfectly tailored formals designed to make you stand out at every luxury occasion."
    },
    { 
      id: "casual-wear",
      title: "Casual Wear", 
      img: "/image8.png",
      desc: "Comfortable, premium everyday outfits blending effortless style with uncompromising fabric quality and perfect fit."
    },
    { 
      id: "luxury-pret",
      title: "Luxury Pret", 
      img: "/image9.webp",
      desc: "Sophisticated ready-to-wear designs that perfectly balance traditional artistry and modern contemporary aesthetics."
    },
    { 
      id: "western-collection",
      title: "Western Collection", 
      img: "/image29.webp", 
      desc: "Chic and contemporary western silhouettes, tailored to perfection for a bold, modern, and confident look."
    },
    { 
      // Agar inka data nahi banaya, toh inki alag id de dein
      id: "boutique-collection",
      title: "Boutique Collection", 
      img: "/image31.webp", 
      desc: "Exclusive, limited-edition pieces curated specially for boutiques and the ultimate fashion-forward wardrobe."
    },
    { 
      id: "luxury-embroidery",
      title: "Luxury Embroidery", 
      img: "/image30.png", 
      desc: "Showcasing breathtaking intricate threadwork, delicate beadwork, and masterful artisanal craftsmanship."
    }
  ];

  const duplicatedCollections = [...collectionsData, ...collectionsData];

  // ==========================================
  // MOBILE ANIMATION LOGIC
  // ==========================================
  const mobileTargetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: mobileTargetRef,
    offset: ["start start", "end end"] 
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, 
    damping: 25,    
    mass: 0.5       
  });

  const mobileXTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );

  // ==========================================
  // REUSABLE CARD COMPONENT 
  // ==========================================
  const CollectionCard = ({ item }) => (
    // 🚨 FIX: Yahan 'div' ko 'Link' se replace kar diya hai
    <Link 
        to={`/collection/${item.id}`} 
        className="block relative h-[420px] lg:h-[480px] w-full group overflow-hidden rounded-xl cursor-pointer shadow-[0_15px_40px_rgb(0,0,0,0.1)] border border-transparent hover:border-[#C8A97E]/60 transition-all duration-700"
    >
      
      <img 
        src={item.img} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = item.img.replace('.png', '.jpg');
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a0b12] via-[#4A1521]/40 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500 flex flex-col justify-end items-center p-6 text-center">
        
        <h3 className="text-white font-['Cinzel',serif] text-2xl lg:text-[26px] mb-2 font-medium uppercase tracking-wider drop-shadow-md transform transition-transform duration-500 group-hover:-translate-y-2">
          {item.title}
        </h3>
        
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-full">
          <div className="overflow-hidden">
            <p className="text-[#FDFBF7]/90 text-[12px] lg:text-[13px] leading-relaxed pb-4 font-light px-2">
              {item.desc}
            </p>
          </div>
        </div>
        
        <div className="overflow-hidden mt-1">
          <p className="text-[#C8A97E] text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            VIEW COLLECTION <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </p>
        </div>
        
      </div>
    </Link>
  );

  // ==========================================
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <p className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase mb-3 font-bold">
        OUR COLLECTIONS
      </p>
      <h2 className="font-['Cinzel',serif] text-3xl md:text-5xl text-[#4A1521] mb-4 font-bold tracking-wide">
        Timeless Designs, Just For You
      </h2>
      <div className="flex items-center justify-center gap-2 mb-10 lg:mb-16">
        <div className="w-10 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* DESKTOP VIEW */}
      <section className="hidden lg:block py-24 overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader />
        </motion.div>
        
        <style>
          {`
            .marquee-container {
              display: flex;
              width: max-content;
              animation: auto-scroll 45s linear infinite;
            }
            .marquee-wrapper:hover .marquee-container {
              animation-play-state: paused;
            }
            @keyframes auto-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        <div className="w-full overflow-hidden marquee-wrapper mt-4 px-4 relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none"></div>
            
            <div className="marquee-container gap-6 pl-6">
              {duplicatedCollections.map((item, i) => (
                <div key={i} className="w-[320px] flex-shrink-0">
                  <CollectionCard item={item} />
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section ref={mobileTargetRef} className="block lg:hidden relative h-[500vh]">
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
              <div key={i} className="w-[82vw] sm:w-[50vw] flex-shrink-0">
                <CollectionCard item={item} />
              </div>
            ))}
            <div className="w-[8vw] flex-shrink-0"></div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Collections;
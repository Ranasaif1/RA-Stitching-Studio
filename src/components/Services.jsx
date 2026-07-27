import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Services = () => {
  const servicesData = [
    { title: "Custom Stitching", desc: "Designed just for you, stitched to perfection.", icon: "/icon-1.png" },
    { title: "Bridal Couture", desc: "Exquisite bridal wear for your special day.", icon: "/icon-2.png" },
    { title: "Formal Wear", desc: "Elegant designs for every occasion.", icon: "/icon-3.png" },
    { title: "Luxury Pret", desc: "Premium ready-to-wear with a luxury touch.", icon: "/icon-4.png" },
    { title: "Alterations", desc: "Perfect fitting with flawless alterations.", icon: "/icon-5.png" },
    { title: "Custom Measurements", desc: "Precision measurements for the perfect fit.", icon: "/icon-6.png" },
  ];

  // ==========================================
  // MOBILE ANIMATION LOGIC (Pin & Horizontal Scroll)
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

  // 🌟 THE MAGIC FIX: Format Matching for Framer Motion 🌟
  // Ab '0%' ki jagah 'calc(0% + 0vw)' likha hai taake library ko samajh aa jaye ke slide kaise karna hai
  const mobileXTransform = useTransform(
    smoothProgress, 
    [0, 1], 
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );

  // ==========================================
  // REUSABLE CARD COMPONENT
  // ==========================================
  const ServiceCard = ({ service }) => (
    <div className="group relative border border-[#C8A97E]/30 rounded-t-[100px] rounded-b-xl pt-20 pb-3 px-12 flex flex-col items-center bg-white shadow-[0_10px_30px_rgba(74,21,33,0.06)] transition-all duration-500 ease-out cursor-pointer hover:shadow-[0_20px_40px_rgba(200,169,126,0.2)] hover:-translate-y-2 hover:border-[#C8A97E] h-full w-full max-w-[280px] mx-auto">
      <div className="mb-4 h-30 w-30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <img 
          src={service.icon} 
          alt={service.title}
          className="h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C8A97E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'/%3E%3C/svg%3E";
          }}
        />
      </div>
      <h3 className="text-[12px] font-bold tracking-[0.2em] text-[#4A1521] mb-2 uppercase text-center w-full transition-colors duration-300 group-hover:text-[#C8A97E]">
        {service.title}
      </h3>
      <p className="text-[11px] text-[#777777] leading-relaxed font-['Montserrat',sans-serif] text-center w-full group-hover:text-[#4A1521] transition-colors duration-300">
        {service.desc}
      </p>
    </div>
  );

  // ==========================================
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <p className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase mb-3 font-bold">
        OUR SERVICES
      </p>
      <h2 className="font-['Cinzel',serif] text-3xl md:text-5xl text-[#4A1521] mb-4 font-medium tracking-wide">
        Excellence in Every Stitch
      </h2>
      <div className="flex items-center justify-center gap-2 mb-8 lg:mb-16">
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
    <div className="bg-[#FDFBF7]">
      
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
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {servicesData.map((service, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1">
            VIEW ALL SERVICES
          </button>
        </motion.div>
      </section>

      {/* =========================================================
          MOBILE VIEW (Pinned / Scroll Jacking - Visible below lg)
          ========================================================= */}
      <section ref={mobileTargetRef} className="block lg:hidden relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-16 bg-[#FDFBF7]">
          
          <SectionHeader />

          <motion.div 
            style={{ 
              x: mobileXTransform,
              width: "max-content" 
            }}
            className="flex flex-nowrap items-stretch gap-6 px-[8vw] mt-4 will-change-transform"
          >
            {servicesData.map((service, i) => (
              <div key={i} className="w-[75vw] sm:w-[45vw] flex-shrink-0 h-full">
                <ServiceCard service={service} />
              </div>
            ))}
            <div className="w-[8vw] flex-shrink-0"></div>
          </motion.div>

          {/* Bottom Button */}
          <div className="mt-8 text-center px-[8vw] w-full">
            <button className="w-full border border-[#C8A97E] text-[#4A1521] bg-transparent px-6 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#4A1521] hover:text-white transition-all duration-300 rounded-sm">
              VIEW ALL SERVICES
            </button>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Services;
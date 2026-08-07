import React from 'react';
import { motion } from 'framer-motion';

const InstagramFeed = () => {
  const feedImages = [
    { img: "/image9.webp", likes: "1.2k" },
    { img: "/image4.webp", likes: "950" },
    { img: "/image5.webp", likes: "2.1k" },
    { img: "/image6.webp", likes: "1.8k" },
    { img: "/image7.webp", likes: "3.4k" },
    { img: "/image8.png", likes: "890" },
  ];

  const instaUrl = "https://www.instagram.com/ranaabdullah.studio/";

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif] overflow-hidden">
      
      {/* Background Aesthetics for Depth */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[300px] bg-[#C8A97E]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 z-0"></div>

      {/* ==========================================
          HEADER SECTION
          ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center mb-12 md:mb-16"
      >
        {/* Sub Heading */}
        <h3 className="text-[10.5px] md:text-[12px] text-[#C8A97E] tracking-[0.4em] font-bold uppercase mb-3 drop-shadow-sm">
          Follow Our Journey
        </h3>

        {/* Main Title / Handle */}
        <a 
          href={instaUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block font-['Cinzel',serif] text-[32px] sm:text-4xl md:text-5xl text-[#4A1521] mb-6 font-bold tracking-wide hover:text-[#C8A97E] transition-colors duration-500"
        >
          @ranaabdullah.studio
        </a>

        {/* Standardized Diamond Divider */}
        <div className="flex items-center justify-center gap-2 opacity-80">
            <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
            <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
            <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]/70"></div>
        </div>
      </motion.div>

      {/* ==========================================
          INSTAGRAM GRID (Cinematic Hover Effects)
          ========================================== */}
      <motion.div 
        className="max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mb-14 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {feedImages.map((item, i) => (
          <motion.a 
            key={i}
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-[0_15px_30px_rgba(74,21,33,0.2)] hover:-translate-y-2 transition-all duration-700 ease-out bg-black"
          >
            {/* Background Post Image */}
            <img 
              src={item.img} 
              alt={`Instagram post ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-110 group-hover:opacity-60 filter contrast-[1.05]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = item.img.replace('.png', '.jpg');
              }}
            />
            
            {/* 🌟 LUXURY HOVER OVERLAY 🌟 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1521]/90 via-[#4A1521]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-3 p-4">
              
              {/* Inner Golden Frame on Hover */}
              <div className="absolute inset-3 border border-[#C8A97E]/40 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 delay-100 pointer-events-none"></div>

              {/* Instagram Icon */}
              <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                <svg className="w-8 h-8 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>

              {/* Heart / Likes Counter */}
              <div className="flex items-center gap-1.5 text-white text-[12px] font-bold tracking-wider transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <svg className="w-4 h-4 text-[#C8A97E] fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{item.likes}</span>
              </div>

            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* ==========================================
          FOLLOW BUTTON WITH LUXURY HOVER
          ========================================== */}
      <motion.div 
        className="flex justify-center relative z-10 pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a 
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-4 text-[11px] font-bold tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 rounded-[2px] hover:text-white hover:border-[#4A1521] shadow-sm hover:shadow-[0_10px_20px_rgba(74,21,33,0.15)]"
        >
          {/* Hover Background Fill Effect */}
          <div className="absolute inset-0 w-0 bg-[#4A1521] transition-all duration-[600ms] ease-out group-hover:w-full -z-10"></div>
          
          <span className="relative z-10">FOLLOW US ON INSTAGRAM</span>
          
          {/* Small Instagram Icon */}
          <svg className="w-4 h-4 relative z-10 text-[#C8A97E] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </motion.div>

    </section>
  );
};

export default InstagramFeed;
import React from 'react';
import { motion } from 'framer-motion';

const InstagramFeed = () => {
  const feedImages = [
    { img: "/image9.png", likes: "1.2k" },
    { img: "/image4.png", likes: "950" },
    { img: "/image5.png", likes: "2.1k" },
    { img: "/image6.png", likes: "1.8k" },
    { img: "/image7.png", likes: "3.4k" },
    { img: "/image8.png", likes: "890" },
  ];

  const instaUrl = "https://www.instagram.com/ranaabdullah.studio/";

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif] overflow-hidden">
      
      {/* ==========================================
          HEADER SECTION
          ========================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Sub Heading */}
        <h3 className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.3em] font-bold uppercase mb-2">
          FOLLOW OUR JOURNEY
        </h3>

        {/* Main Title / Handle with Direct Link */}
        <a 
          href={instaUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block font-['Cinzel',serif] text-3xl md:text-4xl text-[#4A1521] mb-12 font-medium tracking-wide hover:text-[#C8A97E] transition-colors duration-300"
        >
          @ranaabdullah.studio
        </a>
      </motion.div>

      {/* ==========================================
          INSTAGRAM GRID (Desktop & Mobile Responsive)
          ========================================== */}
      <motion.div 
        className="max-w-[1500px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12"
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
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            // Hover scaling + Shadow
            className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer shadow-sm border border-transparent hover:border-[#C8A97E]/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Background Post Image */}
            <img 
              src={item.img} 
              alt={`Instagram post ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-[1.02]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = item.img.replace('.png', '.jpg');
              }}
            />
            
            {/* 🌟 LUXURY HOVER OVERLAY 🌟 */}
            <div className="absolute inset-0 bg-[#4A1521]/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4">
              
              {/* Instagram Icon */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>

              {/* Heart / Likes Counter */}
              <div className="flex items-center gap-1.5 text-white text-[11px] font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <svg className="w-4 h-4 text-[#C8A97E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{item.likes}</span>
              </div>

            </div>

          </motion.a>
        ))}
      </motion.div>

      {/* ==========================================
          FOLLOW BUTTON WITH REAL LINK
          ========================================== */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <a 
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-4 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm flex items-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
        >
          FOLLOW US ON INSTAGRAM
          
          {/* Small Instagram Icon */}
          <svg className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
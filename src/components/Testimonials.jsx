import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // 10 Premium Testimonials
  const testimonialsData = [
    {
      name: "Ayesha Khan",
      text: "The stitching, the fabric, the finishing – everything was beyond perfection. Highly recommended for any formal event!",
    },
    {
      name: "Sana Malik",
      text: "They understood exactly what I wanted and delivered more than my expectations. The fitting was absolutely flawless.",
    },
    {
      name: "Hina Farooq",
      text: "Professional team, premium quality and perfect fitting. I'm a regular client now and they never disappoint!",
    },
    {
      name: "Zara Ahmed",
      text: "My bridal dress was a masterpiece! The hand embroidery and attention to detail left everyone speechless.",
    },
    {
      name: "Fatima Noor",
      text: "Exceptional tailoring and on-time delivery. It's so rare to find such a reliable and polite service in this city.",
    },
    {
      name: "Nida Tariq",
      text: "Their formal wear stitching is out of this world. The measurements were spot on the very first time I tried it.",
    },
    {
      name: "Rabia Hassan",
      text: "A truly luxurious experience. The fabric selection is top-notch and the staff guides you through every step.",
    },
    {
      name: "Maria Shah",
      text: "I gave them a very complex design for a party wear outfit, and they replicated it flawlessly. Amazing work!",
    },
    {
      name: "Zainab Ali",
      text: "Perfect fit on the first try. Didn't need a single alteration. These guys are absolute masters of their craft!",
    },
    {
      name: "Sara Sheikh",
      text: "The finishing on their Eid collection is stunning. I have never felt more confident and comfortable in an outfit.",
    }
  ];

  // ==========================================
  // CAROUSEL LOGIC & AUTO-SCROLL
  // ==========================================
  const scrollRef = useRef(null);

  // Scroll function jo next card par le jayega
  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Agar end par pohnch gaye hain, toh wapis start par le jao
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      
      // Agar start par hain, toh end par le jao
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Auto Scroll Effect (Har 4 second baad)
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval);
  }, []);


  // ==========================================
  // SHARED HEADER COMPONENT
  // ==========================================
  const SectionHeader = () => (
    <div className="text-center flex flex-col items-center px-4 w-full">
      <h3 className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.3em] uppercase font-bold mb-2">
        WHAT OUR CLIENTS SAY
      </h3>
      <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[40px] text-[#4A1521] mb-4 font-medium tracking-wide">
        Trusted By Hundreds Of Happy Clients
      </h2>
      <div className="flex items-center justify-center gap-1.5 mb-10">
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-0 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif] overflow-hidden">
      
      {/* Hide scrollbar with custom CSS style */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader />
      </motion.div>

      {/* Carousel Container */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-center relative px-4 md:px-0 mt-4">
        
        {/* Left Arrow (Desktop only) */}
        <button 
          onClick={scrollLeft}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A97E] items-center justify-center text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-colors duration-300 mr-4 lg:mr-6 shadow-sm z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 w-full py-4 px-2"
        >
          {testimonialsData.map((client, i) => (
            <div 
              key={i} 
              // Mobile par 85vw (taake agla card zara sa nazar aye), Tablet par exactly 50%, Desktop par exactly 33.33%
              className="flex-shrink-0 snap-center w-[85vw] sm:w-[60vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white p-8 lg:p-10 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#C8A97E]/10 flex flex-col text-left hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(200,169,126,0.15)] transition-all duration-500 relative overflow-hidden"
            >
              
              {/* Background Watermark Icon for Luxury Feel */}
              <div className="absolute -top-4 -right-4 text-[#FDFBF7] opacity-80 z-0 pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Icon */}
              <div className="text-[#C8A97E] mb-5 relative z-10">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-[#666666] text-[12px] lg:text-[13px] leading-[1.8] mb-8 flex-grow relative z-10 font-medium">
                "{client.text}"
              </p>

              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex gap-1.5 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-3.5 h-3.5 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Name */}
                <h4 className="font-bold text-[#4A1521] text-[12px] lg:text-[13px] tracking-[0.1em] uppercase">
                  {client.name}
                </h4>
              </div>

            </div>
          ))}
        </div>

        {/* Right Arrow (Desktop only) */}
        <button 
          onClick={scrollRight}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A97E] items-center justify-center text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-colors duration-300 ml-4 lg:ml-6 shadow-sm z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

      </div>
    </section>
  );
};

export default Testimonials;
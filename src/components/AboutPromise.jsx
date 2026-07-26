import React from 'react';

const OurPromise = () => {
  return (
    // w-full aur flex-row se edge-to-edge layout banega
    <section className="w-full flex flex-col lg:flex-row bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Signature Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        `}
      </style>

      {/* Left Side: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 py-16 md:px-16 lg:pl-[10%] lg:pr-[5%]">
        
        {/* Sub Heading */}
        <h4 className="text-[#C8A97E] text-[10px] md:text-[11px] tracking-[0.3em] font-bold uppercase mb-3">
          OUR PROMISE
        </h4>
        
        {/* Main Title */}
        <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[40px] text-[#4A1521] leading-[1.2] mb-4 font-medium">
          Crafted With Passion, <br className="hidden md:block" /> Tailored With Love
        </h2>

        {/* Golden Ornamental Divider (Left Aligned) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
        </div>

        {/* Description Paragraph */}
        <p className="text-[#555555] text-[11px] md:text-[12px] leading-[1.8] mb-6 max-w-md">
          At Rana Abdullah Stitching Studio, we believe every outfit reflects your personality. From the finest fabrics to the smallest details, we ensure perfection in every stitch.
        </p>

        {/* Cursive Signature */}
        <div className="text-[#C8A97E] font-['Great_Vibes',cursive] text-3xl md:text-4xl tracking-wide mb-8">
          Rana Abdullah
        </div>

        {/* Discover Our Story Button */}
        <div>
          <button className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm">
            DISCOVER OUR STORY
          </button>
        </div>

      </div>

      {/* Right Side: Edge-to-Edge Image (image5.png) */}
      <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto">
        <img 
          src="/image5.png" 
          alt="Our Promise - Stitching Detail" 
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default OurPromise;
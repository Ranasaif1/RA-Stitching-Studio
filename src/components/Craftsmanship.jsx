import React from 'react';

const Craftsmanship = () => {
  return (
    // w-full aur flex-row se edge-to-edge layout banega
    <section className="w-full flex flex-col lg:flex-row bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Left Side: Edge-to-Edge Image */}
      <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto">
        <img 
          src="/image4.png" 
          alt="Our Craftsmanship Detail" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 py-16 md:px-16 lg:px-[10%]">
        
        {/* Sub Heading */}
        <h4 className="text-[#C8A97E] text-[10px] md:text-[11px] tracking-[0.3em] font-bold uppercase mb-3">
          OUR CRAFTSMANSHIP
        </h4>
        
        {/* Main Title */}
        <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[42px] text-[#4A1521] leading-tight mb-4 font-medium">
          Where Passion Meets <br className="hidden md:block" /> Perfect Craft
        </h2>

        {/* Golden Ornamental Divider (Left Aligned) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-8 h-[1px] bg-[#C8A97E]"></div>
        </div>

        {/* Description Paragraph */}
        <p className="text-[#555555] text-[11px] md:text-[12px] leading-[1.8] mb-8 max-w-md">
          Every detail matters. From the finest fabrics to the perfect stitch, we put our heart into creating outfits that reflect your personality.
        </p>

        {/* Discover More Button */}
        <div>
          <button className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm">
            DISCOVER MORE
          </button>
        </div>

      </div>

    </section>
  );
};

export default Craftsmanship;
import React from 'react';

const CallToAction = () => {
  return (
    // bg-fixed ki wajah se image background mein ruki rahegi jab user scroll karega
    <section 
      className="relative w-full py-28 md:py-32 bg-cover bg-center bg-fixed flex items-center justify-center font-['Montserrat',sans-serif]"
      style={{ backgroundImage: "url('/image1.png')" }}
    >
      
      {/* Dark Maroon Overlay taake white text bilkul wazeh nazar aye aur background screenshot jaisa premium lagay */}
      <div className="absolute inset-0 bg-[#4A1521]/85 z-0"></div>

      {/* Floating Text Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl flex flex-col items-center">
        
        {/* Main Title */}
        <h2 className="text-white font-['Cinzel',serif] text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight drop-shadow-lg">
          Let's Create Your <br className="hidden md:block" /> Perfect Outfit
        </h2>
        
        {/* Paragraph */}
        <p className="text-[#FDFBF7]/90 text-[12px] md:text-[13px] tracking-wide mb-8 drop-shadow-md max-w-lg">
          Book an appointment today and let's bring your dream outfit to life.
        </p>
        
        {/* Floating Button with Icon */}
        <button className="border border-[#C8A97E] text-white bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-[#4A1521] transition-all duration-500 rounded-sm flex items-center gap-2.5 shadow-lg">
          BOOK AN APPOINTMENT
          
          {/* Calendar/Booking Icon */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </button>

      </div>
      
    </section>
  );
};

export default CallToAction;
import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Ayesha Khan",
      text: "The stitching, the fabric, the finishing – everything was beyond perfection. Highly recommended!",
    },
    {
      name: "Sana Malik",
      text: "They understood exactly what I wanted and delivered more than my expectations. recommended.",
    },
    {
      name: "Hina Farooq",
      text: "Professional team, premium quality and perfect fitting. I'm a regular client now!",
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Sub Heading */}
      <h3 className="text-[10px] md:text-[11px] text-[#4A1521] tracking-[0.25em] font-bold uppercase mb-3">
        WHAT OUR CLIENTS SAY
      </h3>

      {/* Main Title */}
      <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-[40px] text-[#4A1521] mb-4 font-medium tracking-wide">
        Trusted By Hundreds Of Happy Clients
      </h2>

      {/* Golden Ornamental Divider */}
      <div className="flex items-center justify-center gap-1.5 mb-14">
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
      
      {/* Carousel Container */}
      <div className="max-w-[1300px] mx-auto flex items-center justify-between relative">
        
        {/* Left Arrow (Hidden on very small mobile screens) */}
        <button className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A97E] items-center justify-center text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-colors duration-300 mr-4 lg:mr-8 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 w-full">
          {testimonialsData.map((client, i) => (
            <div 
              key={i} 
              className="bg-white p-8 lg:p-10 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C8A97E]/10 flex flex-col text-left hover:-translate-y-1 transition-transform duration-500"
            >
              
              {/* Quote Icon */}
              <div className="text-[#C8A97E] mb-5">
                <svg className="w-8 h-8 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-[#666666] text-[12px] lg:text-[13px] leading-relaxed mb-8 flex-grow">
                "{client.text}"
              </p>

              <div>
                {/* 5 Stars */}
                <div className="flex gap-1.5 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-3.5 h-3.5 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Client Name */}
                <h4 className="font-bold text-[#4A1521] text-[12px] lg:text-[13px] tracking-wide">
                  {client.name}
                </h4>
              </div>

            </div>
          ))}
        </div>

        {/* Right Arrow (Hidden on very small mobile screens) */}
        <button className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A97E] items-center justify-center text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-colors duration-300 ml-4 lg:ml-8 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

      </div>

    </section>
  );
};

export default Testimonials;
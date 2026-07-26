import React from 'react';

const OurProcess = () => {
  const processData = [
    {
      step: "01",
      title: "CONSULTATION",
      desc: "We understand your style and requirements.",
      icon: (
        // Chat/Consultation Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "MEASUREMENTS",
      desc: "Precise measurements for the perfect fit.",
      icon: (
        // Measuring Tape Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9v10a2 2 0 01-2 2h-1a2 2 0 01-2-2V7a2 2 0 012-2h1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9H8M9.5 13H8M9.5 17H8" />
        </svg>
      )
    },
    {
      step: "03",
      title: "FABRIC SELECTION",
      desc: "Choose from our premium quality fabrics.",
      icon: (
        // Fabric Roll Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h4v12H6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h8v9h-8" />
          <ellipse cx="8" cy="6" rx="2" ry="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="14" cy="15" rx="4" ry="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 15c0 1.5 2 2 4 2" />
        </svg>
      )
    },
    {
      step: "04",
      title: "STITCHING",
      desc: "Expert craftsmanship with attention to detail.",
      icon: (
        // Sewing Machine / Needle Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V9a2 2 0 012-2h5l3 2v7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10v3" />
          <circle cx="16" cy="16" r="0.5" fill="currentColor" />
        </svg>
      )
    },
    {
      step: "05",
      title: "QUALITY CHECK",
      desc: "Every stitch is checked for perfection.",
      icon: (
        // Quality Badge / Check Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      step: "06",
      title: "DELIVERY",
      desc: "On-time delivery with perfect finishing.",
      icon: (
        // Delivery Bag / Ribbon Box Icon
        <svg className="w-7 h-7 text-[#C8A97E]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Section Heading */}
      <h3 className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.3em] uppercase font-bold mb-2">
        OUR PROCESS
      </h3>

      {/* Golden Ornamental Divider */}
      <div className="flex items-center justify-center gap-2 mb-16">
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Horizontal Dotted Line (Hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[1px] border-t-[1.5px] border-dashed border-[#C8A97E]/60 z-0"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
          {processData.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              
              {/* Icon in Circle */}
              <div className="w-14 h-14 rounded-full border border-[#C8A97E] flex items-center justify-center bg-[#FDFBF7] mb-3 group-hover:bg-[#C8A97E]/10 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Number (01, 02...) */}
              <div className="font-['Cinzel',serif] text-[#C8A97E] text-xl font-medium mb-1">
                {item.step}
              </div>

              {/* Title */}
              <h4 className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-[#4A1521] uppercase mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-[10px] md:text-[11px] text-[#777777] leading-[1.6] max-w-[160px] mx-auto">
                {item.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
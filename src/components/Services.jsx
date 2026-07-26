import React from 'react';

const Services = () => {
  const servicesData = [
    { 
      title: "Custom Stitching", 
      desc: "Designed just for you, stitched to perfection.",
      // Yahan apna pehla icon lagayen jo public folder mein hoga
      icon: "/icon-1.png" 
    },
    { 
      title: "Bridal Couture", 
      desc: "Exquisite bridal wear for your special day.",
      icon: "/icon-2.png" 
    },
    { 
      title: "Formal Wear", 
      desc: "Elegant designs for every occasion.",
      icon: "/icon-3.png" 
    },
    { 
      title: "Luxury Pret", 
      desc: "Premium ready-to-wear with a luxury touch.",
      icon: "/icon-4.png" 
    },
    { 
      title: "Alterations", 
      desc: "Perfect fitting with flawless alterations.",
      icon: "/icon-5.png" 
    },
    { 
      title: "Custom Measurements", 
      desc: "Precision measurements for the perfect fit.",
      icon: "/icon-6.png" 
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-center bg-[#FDFBF7]">
      
      {/* Sub Heading */}
      <p className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase mb-3 font-bold">
        OUR SERVICES
      </p>

      {/* Main Title */}
      <h2 className="font-['Cinzel',serif] text-4xl md:text-5xl text-[#4A1521] mb-4 font-medium tracking-wide">
        Excellence in Every Stitch
      </h2>

      {/* Golden Ornamental Divider */}
      <div className="flex items-center justify-center gap-2 mb-16">
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-[1200px] mx-auto">
        {servicesData.map((service, i) => (
          <div 
            key={i} 
            // Cards ki styling bilkul reference image jesi soft kar di hai
            className="border border-[#C8A97E]/10 rounded-t-full rounded-b-md pt-12 pb-8 px-4 flex flex-col items-center bg-white shadow-[0_8px_30px_rgb(200,169,126,0.12)] hover:shadow-[0_15px_40px_rgb(74,21,33,0.1)] hover:-translate-y-1 transition-all duration-500 cursor-default"
          >
            {/* Image Container for Original Assets */}
            <div className="mb-3 h-25 flex items-center justify-center">
              <img 
                src={service.icon} 
                alt={service.title}
                // Agar images ka size set karna ho toh yahan se width/height adjust kar lein
                className="h-full w-auto object-contain opacity-80"
                // Fallback icon just in case image load na ho (Jab aap images daal denge toh yeh hide ho jayega)
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C8A97E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Title */}
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#4A1521] mb-3 uppercase text-center w-full">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[11px] text-[#888888] leading-[1.8] font-['Montserrat',sans-serif] px-2 text-center w-full">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-16">
        <button className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-10 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm">
          VIEW ALL SERVICES
        </button>
      </div>
    </section>
  );
};

export default Services;
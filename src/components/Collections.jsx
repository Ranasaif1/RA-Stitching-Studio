import React from 'react';

const Collections = () => {
  // Yahan humne aapki local images image6, image7, image8, aur image9 set kar di hain
  const collectionsData = [
    { title: "Bridal Wear", img: "/image6.png" },
    { title: "Formal Wear", img: "/image7.png" },
    { title: "Casual Wear", img: "/image8.png" },
    { title: "Luxury Pret", img: "/image9.png" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Sub Heading */}
      <p className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.4em] uppercase mb-3 font-bold">
        OUR COLLECTIONS
      </p>

      {/* Main Title */}
      <h2 className="font-['Cinzel',serif] text-4xl md:text-5xl text-[#4A1521] mb-4 font-medium tracking-wide">
        Timeless Designs, Just For You
      </h2>

      {/* Golden Ornamental Divider */}
      <div className="flex items-center justify-center gap-2 mb-12">
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {collectionsData.map((item, i) => (
          <div 
            key={i} 
            // rounded-md se screenshot jese halke gol kinare banenge
            className="relative h-[450px] lg:h-[550px] group overflow-hidden rounded-md cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
          >
            {/* Image */}
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              // Fallback image in case png ki jagah jpg ho
              onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.img.replace('.png', '.jpg');
              }}
            />
            
            {/* Gradient Overlay (Neeche se dark hoga taake white text saaf nazar aye) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left transition-opacity duration-300">
              
              {/* Category Title */}
              <h3 className="text-white font-['Cinzel',serif] text-2xl lg:text-[28px] mb-2 font-medium uppercase tracking-wider drop-shadow-md">
                {item.title}
              </h3>
              
              {/* View Collection Link */}
              <p className="text-[#FDFBF7]/90 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                VIEW COLLECTION <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </p>
              
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Collections;
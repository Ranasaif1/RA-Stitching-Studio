import React from 'react';

const SignatureCollections = () => {
  // Yahan image10 se image13 tak array mein set kar di hain
  const collectionsData = [
    { title: "WEDDING COUTURE", img: "/image10.png" },
    { title: "EMBROIDERED LUXURY", img: "/image11.png" },
    { title: "EID COLLECTION", img: "/image12.png" },
    { title: "PARTY WEAR", img: "/image13.png" }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Small Header Title */}
      <h3 className="text-[10px] md:text-[11px] text-[#4A1521] tracking-[0.25em] font-bold uppercase mb-2">
        SIGNATURE COLLECTIONS
      </h3>

      {/* Golden Ornamental Divider */}
      <div className="flex items-center justify-center gap-1.5 mb-10">
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
        </div>
        <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
      </div>
      
      {/* 4 Banners Grid - Horizontal Wide Cards */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collectionsData.map((item, i) => (
          <div 
            key={i} 
            // Height ko wide banner ki tarah chota rakha hai aur halke gol kinare (rounded-md) lagaye hain
            className="relative h-[200px] md:h-[250px] lg:h-[220px] xl:h-[250px] group overflow-hidden rounded-md cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            {/* Image */}
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              // Agar file .jpg hui to fallback code khud handle kar lega
              onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.img.replace('.png', '.jpg');
              }}
            />
            
            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h4 className="text-white font-['Cinzel',serif] text-[16px] md:text-[18px] lg:text-[16px] xl:text-[20px] font-medium tracking-[0.1em] uppercase drop-shadow-lg text-center leading-snug">
                {item.title}
              </h4>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
};

export default SignatureCollections;
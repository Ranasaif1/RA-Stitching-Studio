import React from 'react';

const InstagramFeed = () => {
  // Yahan aap apni 6 images ke paths de sakte hain. Filhal maine placeholder paths rakh diye hain.
  const feedImages = [
    "/image9.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png",
    "/image8.png",
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Sub Heading */}
      <h3 className="text-[10px] md:text-[11px] text-[#C8A97E] tracking-[0.3em] font-bold uppercase mb-2">
        FOLLOW OUR JOURNEY
      </h3>

      {/* Main Title / Handle */}
      <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl text-[#4A1521] mb-12 font-medium tracking-wide">
        @ranaabdullah.studio
      </h2>

      {/* Instagram Grid (6 Images in a row on large screens) */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
        {feedImages.map((img, i) => (
          <div 
            key={i} 
            // aspect-square se image bilkul chokor (square) ban jayegi Instagram posts ki tarah
            className="relative aspect-square overflow-hidden rounded-md group cursor-pointer shadow-sm"
          >
            {/* Image */}
            <img 
              src={img} 
              alt={`Instagram post ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              // Agar abhi images public folder mein nahi hain, toh yeh fallback image load kar dega taake design kharab na ho
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/400x400/E8E3DD/4A1521?text=Post+${i+1}`;
              }}
            />
            
            {/* Hover Overlay with Insta Icon */}
            <div className="absolute inset-0 bg-[#4A1521]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <div className="flex justify-center">
        <button className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#C8A97E] hover:text-white transition-all duration-300 rounded-sm flex items-center gap-3">
          FOLLOW US ON INSTAGRAM
          
          {/* Small Instagram Icon inside button */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </button>
      </div>

    </section>
  );
};

export default InstagramFeed;
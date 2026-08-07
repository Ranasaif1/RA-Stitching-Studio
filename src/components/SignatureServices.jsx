import React from 'react';
import { motion } from 'framer-motion';

const SignatureServices = () => {
    const signatureServices = [
        { title: "BRIDAL COUTURE", badge: "Bespoke Luxury", desc: "Handcrafted bridal dresses using luxurious fabrics, intricate embroidery, and delicate embellishments to create a masterpiece that reflects your unique story and elegance.", img: "/image13.webp" },
        { title: "LUXURY PRET", badge: "Ready to Wear", desc: "Sophisticated pret wear collection that blends premium fabrics, refined silhouettes, and exceptional craftsmanship for effortless elegance in every look.", img: "/image9.webp" },
        { title: "FORMAL WEAR", badge: "Elegant Occasions", desc: "Custom-designed formal outfits tailored to perfection. Every detail is carefully crafted to make your special moments even more memorable.", img: "/image11.webp" },
        { title: "CASUAL WEAR", badge: "Everyday Luxury", desc: "Comfort meets elegance in our custom casual wear. Premium fabrics, perfect stitching, and attention to detail for your everyday style and comfort.", img: "/image7.webp" },
        { title: "CUSTOM STITCHING", badge: "Made for You", desc: "From consultation to final fitting, we create outfits according to your exact measurements, preferred fabrics, and personal style to make every piece uniquely yours.", img: "/image26.webp" },
        { title: "BOUTIQUE & BULK", badge: "Bulk Manufacturing", desc: "Professional bulk stitching services for boutiques, designers, and fashion brands with consistent quality and reliable production timelines.", img: "/image25.webp" },
        { title: "WESTERN WEAR", badge: "Contemporary Luxury", desc: "Modern silhouettes crafted with premium fabrics, flawless tailoring, and elegant finishing. From evening gowns and cocktail dresses to chic contemporary outfits, every piece is custom designed to reflect your confidence, sophistication, and personal style.", img: "/image29.webp" }
    ];

    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    return (
        <section className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#FDFBF7] overflow-hidden">
            
            {/* Background Aesthetics for Depth */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8A97E]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* ==========================================
                    LUXURY SECTION HEADER
                    ========================================== */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center mb-14 md:mb-20 px-4"
                >
                    <div className="flex items-center gap-4 w-full max-w-[340px] mb-4">
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
                        <h4 className="text-[#C8A97E] text-[11px] md:text-[12px] tracking-[0.4em] font-bold uppercase whitespace-nowrap">WHAT WE OFFER</h4>
                        <div className="flex-1 h-[1px] bg-[#C8A97E]/60"></div>
                    </div>
                    
                    <h2 className="font-['Cinzel',serif] text-3xl md:text-4xl lg:text-5xl text-[#4A1521] font-bold tracking-wide mb-6 uppercase">
                        Our Signature Services
                    </h2>
                    
                    {/* Standardized Diamond Golden Divider */}
                    <div className="flex items-center justify-center gap-2 opacity-80">
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-12 md:w-16 h-[1px] bg-[#C8A97E]"></div>
                    </div>
                </motion.div>
                
                {/* ==========================================
                    SERVICES GRID
                    ========================================== */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
                >
                    {signatureServices.map((service, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            // Aakhri item ko center karne ka luxury layout trick (agar odd numbers hon)
                            className={`group flex flex-col md:flex-row bg-white border border-[#C8A97E]/30 rounded-[2px] overflow-hidden shadow-[0_10px_30px_rgba(74,21,33,0.04)] hover:shadow-[0_20px_50px_rgba(74,21,33,0.12)] hover:-translate-y-1.5 transition-all duration-700 ease-out ${index === signatureServices.length - 1 && signatureServices.length % 2 !== 0 ? 'lg:col-span-2 lg:w-[70%] lg:mx-auto' : ''}`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-[45%] h-[280px] md:h-auto relative overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-[#4A1521]/0 group-hover:bg-[#4A1521]/20 transition-colors duration-700 z-10 pointer-events-none"></div>
                                <img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out filter contrast-[1.05]" 
                                />
                                {/* Image Inner Golden Border on Hover */}
                                <div className="absolute inset-3 border border-white/0 group-hover:border-white/40 z-20 transition-colors duration-700 pointer-events-none rounded-[1px]"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center relative bg-white">
                                
                                {/* Subtle Background Royal Pattern */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-[radial-gradient(#4A1521_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    {/* Premium Badge */}
                                    <span className="block text-[#C8A97E] text-[10px] md:text-[11px] font-bold tracking-[0.35em] uppercase mb-3 drop-shadow-sm">
                                        {service.badge}
                                    </span>
                                    
                                    {/* Title */}
                                    <h3 className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-[26px] font-bold mb-3 tracking-wide group-hover:text-[#C8A97E] transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Animated Expanding Divider */}
                                    <div className="w-8 h-[1px] bg-[#C8A97E]/50 mb-5 group-hover:w-16 group-hover:bg-[#C8A97E] transition-all duration-700 ease-out"></div>
                                    
                                    {/* Description */}
                                    <p className="text-[#666666] text-[13.5px] md:text-[14.5px] leading-[1.8] font-light mb-6 text-justify">
                                        {service.desc}
                                    </p>
                                    
                                    {/* Interactive Action Text */}
                                    <div className="flex items-center gap-2 text-[#4A1521] text-[10px] font-bold tracking-[0.2em] uppercase mt-auto group-hover:text-[#C8A97E] transition-colors duration-300">
                                        <span>Discover</span>
                                        <svg className="w-3.5 h-3.5 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SignatureServices;
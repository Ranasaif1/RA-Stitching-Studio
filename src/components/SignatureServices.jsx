import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const SignatureServices = () => {
    const signatureServices = [
        { title: "BRIDAL COUTURE", badge: "Bespoke Luxury", desc: "Handcrafted bridal dresses using luxurious fabrics, intricate embroidery, and delicate embellishments to create a masterpiece that reflects your unique story and elegance.", img: "/image13.png" },
        { title: "LUXURY PRET", badge: "Ready to Wear", desc: "Sophisticated pret wear collection that blends premium fabrics, refined silhouettes, and exceptional craftsmanship for effortless elegance in every look.", img: "/image9.png" },
        { title: "FORMAL WEAR", badge: "Elegant Occasions", desc: "Custom-designed formal outfits tailored to perfection. Every detail is carefully crafted to make your special moments even more memorable.", img: "/image11.png" },
        { title: "CASUAL WEAR", badge: "Everyday Luxury", desc: "Comfort meets elegance in our custom casual wear. Premium fabrics, perfect stitching, and attention to detail for your everyday style and comfort.", img: "/image7.png" },
        { title: "CUSTOM STITCHING", badge: "Made for You", desc: "From consultation to final fitting, we create outfits according to your exact measurements, preferred fabrics, and personal style to make every piece uniquely yours.", img: "/image26.png" },
        { title: "BOUTIQUE & BULK", badge: "Bulk Manufacturing", desc: "Professional bulk stitching services for boutiques, designers, and fashion brands with consistent quality and reliable production timelines.", img: "/image25.png" },
        { title: "WESTERN WEAR", badge: "Contemporary Luxury", desc: "Modern silhouettes crafted with premium fabrics, flawless tailoring, and elegant finishing. From evening gowns and cocktail dresses to chic contemporary outfits, every piece is custom designed to reflect your confidence, sophistication, and personal style.", img: "/image29.png" }
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
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="py-16 md:py-24 px-5 sm:px-8 max-w-[1400px] mx-auto bg-white/50">
            <SectionHeader title="OUR SIGNATURE SERVICES" />
            
            <motion.div 
                variants={containerVariants}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-10"
            >
                {signatureServices.map((service, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        className="group flex flex-col sm:flex-row bg-white border border-[#C8A97E]/20 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(74,21,33,0.08)] hover:-translate-y-1 transition-all duration-500"
                    >
                        {/* Image Section */}
                        <div className="w-full sm:w-[45%] h-[240px] sm:h-auto relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-[#4A1521]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img 
                                src={service.img} 
                                alt={service.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full sm:w-[55%] p-6 md:p-8 flex flex-col justify-center relative bg-[url('/light-texture.png')] bg-cover bg-center">
                            
                            {/* Animated Icon */}
                            <div className="w-12 h-12 rounded-full border border-[#C8A97E]/40 flex items-center justify-center mb-5 text-[#C8A97E] group-hover:bg-[#4A1521] group-hover:border-[#4A1521] group-hover:text-[#C8A97E] transition-all duration-500 shadow-sm">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="font-['Cinzel',serif] text-[#4A1521] text-lg md:text-xl font-bold mb-2 tracking-wide">
                                    {service.title}
                                </h3>
                                <span className="inline-block bg-[#f9f5f0] text-[#C8A97E] border border-[#C8A97E]/30 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-max group-hover:bg-[#C8A97E] group-hover:text-white transition-colors duration-500">
                                    {service.badge}
                                </span>
                                <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed font-light">
                                    {service.desc}
                                </p>
                            </div>
                            
                            {/* Subtle Decorative Line */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SignatureServices;
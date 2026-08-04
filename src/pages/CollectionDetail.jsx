import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collectionsData } from '../data/collectionsData';

const CollectionDetail = () => {
    const { collectionId } = useParams();
    const collection = collectionsData[collectionId];
    const [selectedImage, setSelectedImage] = useState(null); // Full screen image view ke liye

    // Page load hone par top par scroll karein
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [collectionId]);

    // Agar URL ghalat ho toh Error / Fallback Page
    if (!collection) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
                <h1 className="font-['Cinzel',serif] text-4xl text-[#4A1521] mb-4">Collection Not Found</h1>
                <Link to="/collections" className="text-[#C8A97E] border-b border-[#C8A97E] font-bold tracking-widest uppercase text-[12px] hover:text-[#4A1521] transition-colors">
                    Back to All Collections
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#FDFBF7] font-['Montserrat',sans-serif] min-h-screen pb-20">
            
            {/* 1. HERO SECTION (Cover Image & Title) */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#110a0c]">
                <div className="absolute inset-0 z-0">
                    <img src={collection.coverImg} alt={collection.title} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110a0c] via-[#110a0c]/40 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-3xl mt-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-[#C8A97E] text-[11px] md:text-[13px] font-bold tracking-[0.3em] uppercase block mb-3"
                    >
                        {collection.subtitle}
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-['Cinzel',serif] text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide"
                    >
                        {collection.title}
                    </motion.h1>

                    <motion.div 
                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]/70"></div>
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]/70"></div>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-300 text-[13px] md:text-[15px] leading-relaxed font-light"
                    >
                        {collection.description}
                    </motion.p>
                </div>
            </section>

            {/* 2. IMAGE GALLERY GRID */}
            <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 md:pt-24">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {collection.images.map((imgUrl, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden group cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 border border-[#C8A97E]/20 bg-white"
                            onClick={() => setSelectedImage(imgUrl)}
                        >
                            {/* Inner Luxury Frame on Hover */}
                            <div className="absolute inset-3 border border-white/0 group-hover:border-white/50 z-20 transition-colors duration-500 pointer-events-none"></div>
                            
                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-[#4A1521]/0 group-hover:bg-[#4A1521]/20 z-10 transition-colors duration-500 pointer-events-none"></div>

                            <img 
                                src={imgUrl} 
                                alt={`${collection.title} design ${index + 1}`} 
                                className="w-full h-auto object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/image1.webp'; // Fallback image agar link toot jaye
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. LIGHTBOX (Full Screen Image Viewer) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <motion.img 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage} 
                            alt="Expanded design" 
                            className="max-w-full max-h-[90vh] object-contain border border-[#C8A97E]/30 shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Taake image par click karne se band na ho
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CollectionDetail;
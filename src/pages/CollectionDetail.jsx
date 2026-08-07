import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collectionsData } from '../data/collectionsData'; // Adjust path if needed
// 🚨 FIX 1: Component names MUST start with a Capital letter in React
import CallToAction from '../components/CallToAction'; 
import InstagramFeed from '../components/InstagramFeed'; 

const CollectionDetail = () => {
    const { collectionId } = useParams();
    const navigate = useNavigate();
    const collection = collectionsData[collectionId];
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [collectionId]);

    // ==========================================
    // 404 / NOT FOUND STATE
    // ==========================================
    if (!collection) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-center px-5 font-['Montserrat',sans-serif] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A97E_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <h1 className="font-['Cinzel',serif] text-4xl md:text-5xl text-[#4A1521] mb-4 font-bold uppercase relative z-10">Collection Not Found</h1>
                <p className="text-[#555555] mb-8 relative z-10 font-light">The collection you are looking for does not exist or has been moved.</p>
                <button 
                    onClick={() => navigate('/collections')} 
                    className="relative z-10 bg-[#4A1521] text-[#C8A97E] px-10 py-4 text-[11px] md:text-[12px] tracking-[0.25em] uppercase font-bold hover:bg-[#3A1018] transition-colors duration-300"
                >
                    Discover All Collections
                </button>
            </div>
        );
    }

    // --- Animation Variants ---
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="w-full bg-[#FDFBF7] font-['Montserrat',sans-serif] min-h-screen relative">
            
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "linear-gradient(#C8A97E 1px, transparent 1px), linear-gradient(90deg, #C8A97E 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

            {/* ==========================================
                1. CINEMATIC HERO SECTION
                ========================================== */}
            <section className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-[#110a0c]">
                
                {/* Background Image & Fixed Gradient */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={collection.coverImg} 
                        alt={collection.title} 
                        className="w-full h-full object-cover filter contrast-[1.05]" 
                        onError={(e) => { e.target.src = '/image28.webp'; }}
                    />
                    
                    {/* Dark overlay taake text clear parha jaye (Upar se dark, neechay se halka) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20"></div>

                    {/* Bottom gradient sirf border par blend karega */}
                    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none z-10"></div>
                </div>

                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="relative z-10 text-center px-5 max-w-3xl mt-16 md:mt-24 flex flex-col items-center"
                >
                    <motion.span 
                        variants={fadeUp}
                        className="text-[#C8A97E] text-[11px] md:text-[13px] font-bold tracking-[0.4em] uppercase block mb-4 drop-shadow-md"
                    >
                        {collection.subtitle}
                    </motion.span>
                    
                    <motion.h1 
                        variants={fadeUp}
                        className="font-['Cinzel',serif] text-[40px] sm:text-[50px] md:text-[70px] leading-[1.1] font-bold text-white mb-6 tracking-wide uppercase drop-shadow-lg"
                    >
                        {collection.title}
                    </motion.h1>

                    {/* Signature Golden Diamond Divider */}
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-8 opacity-90 drop-shadow-md">
                        <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-2 h-2 rotate-45 bg-[#C8A97E]"></div>
                        <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 bg-[#C8A97E]"></div></div>
                        <div className="w-12 md:w-20 h-[1px] bg-[#C8A97E]"></div>
                    </motion.div>

                    {/* Text color off-white aur shadow ke sath */}
                    <motion.p 
                        variants={fadeUp}
                        className="text-[#FDFBF7]/95 text-[14.5px] md:text-[16px] leading-[1.9] font-medium max-w-[700px] text-center drop-shadow-md"
                    >
                        {collection.description}
                    </motion.p>
                </motion.div>
            </section>

            {/* ==========================================
                2. EDITORIAL MASONRY GALLERY
                ========================================== */}
            <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-10 pb-20 relative z-10">
                
                {/* Back Link */}
                <div className="mb-10 flex justify-center md:justify-start">
                    <Link to="/collections" className="group flex items-center gap-2 text-[#4A1521] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase hover:text-[#C8A97E] transition-colors duration-300">
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Collections
                    </Link>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6">
                    {collection.images.map((imgUrl, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                            className="relative overflow-hidden group cursor-pointer break-inside-avoid shadow-[0_10px_20px_rgba(74,21,33,0.05)] hover:shadow-[0_20px_40px_rgba(74,21,33,0.15)] transition-all duration-700 border border-[#C8A97E]/20 bg-[#FDFBF7] rounded-[2px]"
                            onClick={() => setSelectedImage(imgUrl)}
                        >
                            {/* Inner Luxury Frame on Hover */}
                            <div className="absolute inset-3 border border-white/0 group-hover:border-white/50 z-20 transition-all duration-700 pointer-events-none rounded-[1px] scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100"></div>
                            
                            {/* Dark Overlay on Hover for focus */}
                            <div className="absolute inset-0 bg-[#4A1521]/0 group-hover:bg-[#4A1521]/10 z-10 transition-colors duration-700 pointer-events-none"></div>

                            {/* View Icon on Hover */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="w-12 h-12 rounded-full bg-white/90 text-[#4A1521] flex items-center justify-center backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>

                            <img 
                                src={imgUrl} 
                                alt={`${collection.title} design ${index + 1}`} 
                                className="w-full h-auto object-cover transform transition-transform duration-[2s] ease-out group-hover:scale-110 filter contrast-[1.02]"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/image22.webp'; 
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ==========================================
                3. LIGHTBOX (Full Screen Image Viewer)
                ========================================== */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 z-50 group"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        
                        <motion.img 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            src={selectedImage} 
                            alt="Expanded design view" 
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ==========================================
                4. REUSABLE COMPONENTS
                ========================================== */}
            {/* 🚨 FIX 2: Correct Component Usage */}
            <CallToAction />
            <InstagramFeed /> 

        </div>
    );
};

export default CollectionDetail;
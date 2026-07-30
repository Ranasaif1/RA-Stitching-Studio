import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ==========================================
  // ANIMATION VARIANTS
  // ==========================================
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // Elements ek ke baad ek aayenge
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer 
      className="relative font-['Montserrat',sans-serif] bg-cover bg-center border-t-4 border-[#C8A97E]"
      style={{ backgroundImage: "url('/image1.png')" }}
    >
      
      {/* Dark Maroon Overlay */}
      <div className="absolute inset-0 bg-[#4A1521]/80 z-0"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 py-16 lg:py-20 text-white">
        
        {/* Animated Grid Container */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 xl:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Column 1: Logo Area (Visible on all screens) */}
          <motion.div variants={itemVariants} className="flex flex-col items-start lg:col-span-1">
            <img 
              src="/logo1.png" 
              alt="Rana Abdullah Studio" 
              className="w-100 h-auto object-contain mb-4"
            />
          </motion.div>

          {/* Column 2: Quick Links (Hidden on Mobile) */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <h4 className="text-[#C8A97E] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-[#D3C5C8] text-[12px] md:text-[14px]">
              {['Home', 'About Us', 'Services', 'Collections', 'Gallery', 'Pricing', 'Contact'].map((link, i) => (
                <li key={i}>
                  {/* Home, About Us, aur Contact ke liye React Router ka Link use kiya hai */}
                  {link === 'About Us' ? (
                    <Link to="/about-us" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium">
                      {link}
                    </Link>
                  ) : link === 'Home' ? (
                    <Link to="/" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium">
                      {link}
                    </Link>
                  ) : link === 'Contact' ? (
                    <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium">
                      {link}
                    </Link>
                  ) : (
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium">
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Services (Hidden on Mobile) */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <h4 className="text-[#C8A97E] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
              OUR SERVICES
            </h4>
            <ul className="space-y-3 text-[#D3C5C8] text-[12px] md:text-[14px]">
              {['Custom Stitching', 'Bridal Wear', 'Luxury Pret', 'Formal Wear', 'Alterations', 'Custom Measurements'].map((link, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Us (Yahan se 'hidden md:block' hata diya hai, ab yeh mobile par show hoga) */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-[#C8A97E] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
              CONTACT US
            </h4>
            <ul className="space-y-4 text-[#D3C5C8] text-[12px] md:text-[14px] leading-relaxed font-medium">
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#C8A97E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+92 3099853117</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#C8A97E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+92 3012652131</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#C8A97E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@ranaabdullahstudio.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#C8A97E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Shop No. 253, First Floor, Aashiana Shopping Mall, Block 9, Clifton, Karachi – 75500, Pakistan</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                <svg className="w-5 h-5 text-[#C8A97E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mon - Sat: 11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 5: Newsletter (Visible on all screens) */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-[#C8A97E] text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-6">
              NEWSLETTER
            </h4>
            <p className="text-[#D3C5C8] text-[12px] md:text-[14px] mb-4 leading-relaxed font-medium">
              Subscribe to our newsletter for latest updates and offers.
            </p>
            
            {/* Input Field with Inline Button */}
            <div className="relative flex items-center w-full mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 text-white px-4 py-3 text-[12px] md:text-[13px] outline-none rounded-sm placeholder-[#D3C5C8] border border-[#C8A97E]/40 focus:border-[#C8A97E] transition-colors" 
              />
              <button 
                className="absolute right-2 text-[#C8A97E] hover:text-white p-1 transition-colors"
                title="Subscribe"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Copyright Bottom Bar with Fade Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 border-t border-[#C8A97E]/20 bg-black/40"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between text-[11px] md:text-[12px] text-[#D3C5C8] tracking-wider font-medium">
          <p>© 2026 Zarvix Digital. All Rights Reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/Terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button (Animated pop-in) */}
      <motion.button 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={scrollToTop}
        className="absolute bottom-[80px] right-6 lg:right-10 w-10 h-10 bg-[#FDFBF7] text-[#4A1521] rounded-full flex items-center justify-center hover:bg-[#C8A97E] hover:text-white transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:-translate-y-1 z-50 group"
        title="Scroll to Top"
      >
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>

    </footer>
  );
};

export default Footer;
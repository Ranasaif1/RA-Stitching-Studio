import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  // Page load hote hi screen ko top par le jayega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState(0);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const privacyData = [
    {
      short: "Information",
      title: "Information We Collect",
      text: "To provide you with the best possible experience, we may collect certain personal information that you voluntarily provide when contacting us, booking an appointment, requesting a quotation, or placing an order. This information may include your name, phone number, email address, home or delivery address, body measurements, order details, and any additional information you choose to share with us regarding your tailoring requirements. We may also collect limited technical information such as your browser type, device information, IP address, and website usage statistics to improve the performance, security, and user experience of our website."
    },
    {
      short: "Usage",
      title: "How We Use Your Information",
      text: "The information we collect is used solely to provide our tailoring services and improve your overall experience. Your information allows us to schedule appointments, prepare quotations, process orders, communicate order updates, maintain accurate measurements for future services, respond to inquiries, improve our website, and provide customer support whenever required. We may also use your contact information to notify you about important service updates or promotional offers. You may opt out of promotional communications at any time."
    },
    {
      short: "Protection",
      title: "Protection of Your Information",
      text: "We take appropriate administrative, technical, and organizational measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. Client measurements, order history, and contact information are treated as confidential and are only accessible to authorized personnel responsible for providing our services. Although we follow industry-standard security practices, no online platform can guarantee absolute security. We continuously work to maintain a secure environment for all client information."
    },
    {
      short: "Sharing",
      title: "Sharing of Information",
      text: "Your personal information is never sold, rented, or traded to third parties. We only share information when it is necessary to complete a requested service, comply with legal obligations, or protect our legal rights. Any trusted third-party service providers assisting with website hosting, communication, or payment processing are expected to maintain the confidentiality and security of your information."
    },
    {
      short: "Cookies",
      title: "Cookies and Website Analytics",
      text: "Our website may use cookies and similar technologies to enhance your browsing experience, remember your preferences, analyze website traffic, and improve website functionality. Cookies do not collect sensitive personal information and can be disabled through your browser settings if you prefer not to use them."
    },
    {
      short: "Records",
      title: "Measurements and Order Records",
      text: "As a tailoring studio, we maintain customer measurements and order history to provide consistent fitting and faster service for future orders. This information remains confidential and is used exclusively for tailoring purposes unless you request its removal where legally permitted."
    },
    {
      short: "Third-Party",
      title: "Third-Party Links",
      text: "Our website may contain links to third-party websites or social media platforms for your convenience. Once you leave our website, this Privacy Policy no longer applies. We encourage you to review the privacy policies of any external websites you visit."
    },
    {
      short: "Your Rights",
      title: "Your Rights",
      text: "You have the right to request access to the personal information we hold about you, ask for corrections to inaccurate information, request deletion of your personal data where applicable, or withdraw your consent for marketing communications at any time. We will respond to such requests in accordance with applicable laws and our operational requirements."
    },
    {
      short: "Children",
      title: "Children's Privacy",
      text: "Our services are intended for individuals who are legally capable of entering into service agreements. We do not knowingly collect personal information from children without appropriate parental or guardian consent."
    },
    {
      short: "Updates",
      title: "Updates to This Privacy Policy",
      text: "We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements. Any updates will be published on this page, and the revised version will become effective immediately upon posting. We encourage you to review this page periodically to stay informed about how we protect your information."
    }
  ];

  // Smooth scroll handler for sidebar links
  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120; // 🚨 FIX: Offset match kiya gaya hai
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-['Montserrat',sans-serif]">
      
      {/* ==========================================
          HERO SECTION (Full Page with Glass Box)
          ========================================== */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-24 px-4 md:px-6 overflow-hidden">
        
        {/* Background Image - 100% Original Colors */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image21.webp" 
            alt="Privacy Background" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        
        {/* Text Container - Transparent Glass Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          // 🚨 FIX: Mobile par w-[90%] aur flex-col items-center lagaya hai taake overflow na ho
          className="relative z-10 w-[90%] sm:w-auto max-w-4xl mx-auto flex flex-col items-center justify-center text-center mt-12 md:mt-20 bg-white/40 backdrop-blur-md border border-white/50 p-6 sm:p-10 md:p-16 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        >
          {/* 🚨 FIX: Break-words aur responsive sizing taake text screen se bahar na nikle */}
          <h1 className="font-['Cinzel',serif] text-[32px] sm:text-5xl md:text-6xl lg:text-[75px] text-[#4A1521] font-bold mb-4 md:mb-6 leading-[1.1] w-full break-words">
            PRIVACY <br className="hidden sm:block" /> POLICY
          </h1>
          
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 opacity-90 w-full">
            <div className="w-10 md:w-24 h-[2px] bg-[#4A1521]"></div>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rotate-45 border-2 border-[#4A1521] flex items-center justify-center"><div className="w-1 h-1 bg-[#4A1521]"></div></div>
            <div className="w-10 md:w-24 h-[2px] bg-[#4A1521]"></div>
          </div>
          
          <p className="text-[#4A1521] text-[13px] sm:text-sm md:text-lg font-bold max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Protecting your personal information and respecting your privacy is one of our highest priorities.
          </p>

          <div className="inline-flex items-center gap-2 text-[#4A1521] font-bold text-[9px] sm:text-[10px] md:text-sm tracking-[0.1em] sm:tracking-[0.2em] uppercase bg-white/70 px-4 py-3 md:px-5 md:py-2.5 rounded-full border border-white/60 shadow-sm whitespace-nowrap">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#4A1521] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="mt-0.5">Last Updated • July 29, 2026</span>
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          MAIN CONTENT AREA
          ========================================== */}
      <section className="py-16 md:py-24 px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT SIDEBAR (Sticky) - MOBILE PAR HIDE KAR DIYA HAI */}
          <motion.aside 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-[25%] lg:sticky lg:top-32 bg-[#FDFBF7] border border-[#C8A97E]/30 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-10"
          >
            <h3 className="font-['Cinzel',serif] text-[#C8A97E] text-xl font-bold text-center mb-4 tracking-widest">
              CONTENTS
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-8 opacity-60">
              <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A97E]"></div>
              <div className="w-10 h-[1px] bg-[#C8A97E]"></div>
            </div>

            <ul className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              {privacyData.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(index)}
                    className={`flex items-center gap-4 w-full text-left transition-all duration-300 group ${activeSection === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <span className="font-['Cinzel',serif] text-[#C8A97E] text-lg w-6">{String(index + 1).padStart(2, '0')}</span>
                    <span className={`text-sm font-medium ${activeSection === index ? 'text-[#4A1521]' : 'text-[#555555] group-hover:text-[#4A1521]'}`}>
                      {item.short}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>

          {/* RIGHT CONTENT CARDS - HAR POINT KE LIYE ALAG BOX (Mobile Aligned) */}
          <motion.main 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="w-full lg:w-[75%] flex flex-col gap-5 md:gap-8"
          >
            {/* Intro Card */}
            <motion.div variants={itemVariants} className="bg-white border border-[#C8A97E]/30 shadow-xl rounded-xl p-6 md:p-10 mb-2 relative">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C8A97E]"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C8A97E]"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C8A97E]"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C8A97E]"></div>
              
              <p className="text-[#555555] leading-[1.9] text-[14px] md:text-[16px] text-left mb-4">
                At <strong>Rana Abdullah Stitching Studio</strong>, we value the trust our clients place in us. Protecting your personal information and respecting your privacy is one of our highest priorities. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, book an appointment, or use our tailoring services.
              </p>
              <p className="text-[#555555] leading-[1.9] text-[14px] md:text-[16px] text-left italic text-[#4A1521]/80 font-medium border-t border-[#C8A97E]/20 pt-4">
                By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
              </p>
            </motion.div>

            {/* Dynamic Cards Map */}
            {privacyData.map((item, index) => (
              <motion.div 
                key={index} 
                id={`section-${index}`} 
                variants={itemVariants}
                className="scroll-mt-32 relative bg-white border border-[#C8A97E]/20 rounded-xl p-5 sm:p-7 md:p-10 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(74,21,33,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
              >
                {/* Decorative Background Blur for Luxury Feel */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C8A97E]/10 rounded-full blur-3xl group-hover:bg-[#C8A97E]/20 transition-colors duration-700 pointer-events-none"></div>

                <div className="flex flex-row gap-4 md:gap-8 items-start relative z-10">
                  
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#C8A97E] flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#C8A97E] group-hover:border-[#4A1521] transition-all duration-500 shadow-sm mt-1 md:mt-0">
                    <span className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-white text-lg md:text-2xl font-bold transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-lg md:text-2xl font-bold mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    
                    <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]/50 mb-3 md:mb-4 group-hover:w-20 md:group-hover:w-24 group-hover:bg-[#C8A97E] transition-all duration-500"></div>
                    
                    <p className="text-[#555555] leading-[1.7] md:leading-[1.8] text-[13px] md:text-[15px] text-left">
                      {item.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.main>
          
        </div>

        {/* ==========================================
            NEED ASSISTANCE BANNER
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 border border-[#C8A97E]/30 shadow-[0_10px_40px_rgba(74,21,33,0.08)] rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#FDFBF7] relative group"
        >
          <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-[#C8A97E]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

          <div className="w-full md:w-[40%] lg:w-[45%] relative">
            <img 
              src="/image20.webp" 
              alt="Assistance" 
              className="w-full h-56 sm:h-72 md:h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent md:hidden pointer-events-none"></div>
          </div>
          
          <div className="w-full md:w-[60%] lg:w-[55%] p-6 sm:p-8 py-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center relative z-10">
            <h3 className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              HAVE QUESTIONS?
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 opacity-80">
              <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#C8A97E]"></div></div>
              <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
            </div>
            
            <p className="text-[#555555] text-[13px] md:text-[15px] leading-relaxed mb-8 max-w-md">
              If you have any questions regarding this Privacy Policy or wish to request information about your personal data, please feel free to contact us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-[#4A1521] text-white px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#4A1521] hover:bg-transparent hover:text-[#4A1521] active:scale-95 transition-all duration-300 flex justify-center items-center"
              >
                CONTACT US
              </Link>
              <Link 
                to="/appointment" 
                className="w-full sm:w-auto bg-transparent text-[#C8A97E] px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#C8A97E] hover:bg-[#C8A97E] hover:text-white active:scale-95 transition-all duration-300 flex justify-center items-center"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </motion.div>
        
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #C8A97E;
            border-radius: 10px;
          }
        }
      `}</style>
      
    </div>
  );
};

export default PrivacyPolicy;
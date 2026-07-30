import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms = () => {
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

  const termsData = [
    {
      short: "Acceptance",
      title: "Acceptance of Terms",
      text: "By using this website or engaging with any of our services, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, we kindly request that you refrain from using our website or placing an order. Continued use of our website will be considered acceptance of the latest version of these terms."
    },
    {
      short: "Our Services",
      title: "Our Services",
      text: "Rana Abdullah Stitching Studio specializes in premium ladies tailoring and couture, offering bespoke bridal wear, formal wear, casual wear, luxury pret, and custom stitching services. We also provide professional tailoring solutions for boutiques, designers, and fashion brands through our bulk production services. Every garment is crafted with precision and attention to detail to ensure the highest quality standards."
    },
    {
      short: "Appointments",
      title: "Appointments and Consultations",
      text: "To provide every client with dedicated attention, we recommend scheduling an appointment before visiting our studio. During the consultation, our team discusses your design preferences, measurements, fabric selection, and delivery timeline. Appointment times are reserved specifically for each client, and we kindly request punctuality. In the event of a delay, your consultation may be shortened or rescheduled depending on availability."
    },
    {
      short: "Measurements",
      title: "Measurements and Fitting",
      text: "Perfect tailoring begins with accurate measurements. Measurements taken by our experienced team are carefully recorded to ensure the best possible fit. If a client chooses to provide measurements remotely, the accuracy of those measurements remains the client's responsibility. Rana Abdullah Stitching Studio cannot be held liable for fitting issues resulting from incorrect measurements supplied by the customer. Minor alterations may be offered where applicable to achieve the desired fit."
    },
    {
      short: "Confirmation",
      title: "Order Confirmation",
      text: "Every order is treated as a custom project and begins only after the design, measurements, fabric selection, and pricing have been finalized. An order is considered confirmed once the required advance payment has been received. From that point onward, production is scheduled according to the agreed timeline and our current workload."
    },
    {
      short: "Payments",
      title: "Pricing and Payments",
      text: "The cost of each garment depends on several factors, including design complexity, embroidery, embellishments, fabric requirements, and finishing details. All prices are quoted in Pakistani Rupees (PKR) unless otherwise stated. An advance payment is required before production begins, while the remaining balance must be cleared before collection or delivery. For boutique and bulk production orders, payment schedules may vary according to the project agreement."
    },
    {
      short: "Delivery",
      title: "Production and Delivery",
      text: "Every garment is handcrafted with care, and production timelines are provided as estimates based on the complexity of the design. While we make every effort to complete orders on or before the promised delivery date, delays may occasionally occur due to high seasonal demand, custom embroidery work, fabric availability, or circumstances beyond our control. Clients will always be informed promptly if any changes to the delivery schedule become necessary."
    },
    {
      short: "Alterations",
      title: "Alterations",
      text: "Customer satisfaction is important to us, and we strive to deliver garments that fit beautifully. If a minor fitting adjustment is required, alteration requests should be made within seven days of receiving the outfit. Requests made after this period or alterations resulting from changes in body measurements may incur additional charges."
    },
    {
      short: "Refunds",
      title: "Cancellations and Refunds",
      text: "Because every garment is custom-made specifically for the client, cancellations are only possible before production has begun. Once cutting, stitching, embroidery, or any stage of production has started, advance payments become non-refundable. Refunds, where applicable, will be evaluated on a case-by-case basis depending on the progress of the order."
    },
    {
      short: "Bulk Orders",
      title: "Boutique and Bulk Orders",
      text: "In addition to individual clients, Rana Abdullah Stitching Studio proudly partners with boutiques, designers, and fashion brands by providing professional bulk stitching services. Production schedules, pricing, payment terms, quality standards, and delivery commitments for bulk projects are discussed and agreed upon before production begins to ensure a smooth and reliable partnership."
    },
    {
      short: "IP Rights",
      title: "Intellectual Property",
      text: "All content available on this website, including photographs, garment designs, logos, graphics, written content, branding elements, and overall website design, remains the exclusive property of Rana Abdullah Stitching Studio unless otherwise stated. Any unauthorized reproduction, distribution, modification, or commercial use of our content without prior written permission is strictly prohibited."
    },
    {
      short: "Liability",
      title: "Limitation of Liability",
      text: "While we are committed to maintaining the highest standards of quality and professionalism, Rana Abdullah Stitching Studio shall not be held responsible for delays or losses resulting from circumstances beyond our reasonable control, including supplier delays, natural events, transportation issues, or other unforeseen situations. Our liability shall be limited to the value of the service provided."
    },
    {
      short: "Privacy",
      title: "Privacy",
      text: "We respect the privacy of every client and handle personal information with complete confidentiality. Information such as names, contact details, addresses, and measurements is collected solely for the purpose of providing our tailoring services and improving the customer experience. We do not sell, rent, or share customer information with third parties except where required by applicable law."
    },
    {
      short: "Updates",
      title: "Changes to These Terms",
      text: "Rana Abdullah Stitching Studio reserves the right to update or modify these Terms & Conditions at any time without prior notice. Any revisions will become effective immediately upon publication on this page. We encourage clients to review these terms periodically to stay informed of any updates."
    }
  ];

  // Smooth scroll handler for sidebar links
  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      // Adjusted offset for sticky header if any
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-['Montserrat',sans-serif]">
      
      {/* ==========================================
                HERO SECTION (Full Page with Glass Box & Image 19)
                ========================================== */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
              
              {/* Background Image - 100% Original Colors */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/image21.png" 
                  alt="Privacy Background" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              {/* Text Container - Transparent Glass Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto text-center mt-12 md:mt-20 bg-white/40 backdrop-blur-md border border-white/50 p-10 md:p-16 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              >
                <h1 className="font-['Cinzel',serif] text-5xl md:text-7xl lg:text-[80px] text-[#4A1521] font-bold mb-4 md:mb-6 leading-[1.1]">
            TERMS & <br /> CONDITIONS
          </h1>
          
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 opacity-90">
            <div className="w-12 md:w-24 h-[2px] bg-[#4A1521]"></div>
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rotate-45 border-2 border-[#4A1521] flex items-center justify-center"><div className="w-1 h-1 bg-[#4A1521]"></div></div>
            <div className="w-12 md:w-24 h-[2px] bg-[#4A1521]"></div>
          </div>
          
          <p className="text-[#4A1521] text-sm md:text-lg font-bold max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Transparency, trust, and professionalism are the foundation of every service we provide.
          </p>

          <div className="inline-flex items-center gap-2 text-[#4A1521] font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase bg-white/70 px-4 py-3 md:px-5 md:py-2.5 rounded-full border border-white/60 shadow-sm">
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
          
          {/* LEFT SIDEBAR (Sticky) - MOBILE PAR HIDE KAR DIYA HAI 'hidden lg:block' */}
          <motion.aside 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-[25%] lg:sticky lg:top-24 bg-[#FDFBF7] border border-[#C8A97E]/30 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
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
              {termsData.map((item, index) => (
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
            {termsData.map((item, index) => (
              <motion.div 
                key={index} 
                id={`section-${index}`} 
                variants={itemVariants}
                className="scroll-mt-32 relative bg-white border border-[#C8A97E]/20 rounded-xl p-5 md:p-10 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(74,21,33,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
              >
                {/* Decorative Background Blur for Luxury Feel */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#C8A97E]/10 rounded-full blur-3xl group-hover:bg-[#C8A97E]/20 transition-colors duration-700"></div>

                {/* FIX: flex-col ki jagah flex-row kar diya hai taake mobile par bhi side-by-side perfectly align rahay */}
                <div className="flex flex-row gap-4 md:gap-8 items-start relative z-10">
                  
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#C8A97E] flex items-center justify-center bg-[#FDFBF7] group-hover:bg-[#C8A97E] group-hover:border-[#4A1521] transition-all duration-500 shadow-sm mt-1 md:mt-0">
                    <span className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-white text-lg md:text-2xl font-bold transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-['Cinzel',serif] text-[#4A1521] group-hover:text-[#C8A97E] transition-colors duration-300 text-lg md:text-2xl font-bold mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Animated Divider Line */}
                    <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]/50 mb-3 md:mb-4 group-hover:w-20 md:group-hover:w-24 group-hover:bg-[#C8A97E] transition-all duration-500"></div>
                    
                    <p className="text-[#555555] leading-[1.7] md:leading-[1.8] text-[13px] md:text-[15px] text-justify md:text-left">
                      {item.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.main>
        </div>


        {/* ==========================================
            NEED ASSISTANCE BANNER (Mobile Optimized)
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 border border-[#C8A97E]/30 shadow-[0_10px_40px_rgba(74,21,33,0.08)] rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#FDFBF7] relative group"
        >
          {/* Decorative Glow (Hidden on mobile, visible on desktop hover) */}
          <div className="hidden md:block absolute -top-20 -left-20 w-40 h-40 bg-[#C8A97E]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          {/* Left Image */}
          <div className="w-full md:w-[40%] lg:w-[45%] relative">
            <img 
              src="/image20.png" 
              alt="Assistance" 
              className="w-full h-56 sm:h-72 md:h-full object-cover object-center"
            />
            {/* Mobile Gradient Overlay - Image ko text section ke sath smoothly blend karne ke liye */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent md:hidden"></div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-[60%] lg:w-[55%] p-8 py-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center relative z-10">
            <h3 className="font-['Cinzel',serif] text-[#4A1521] text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              NEED ASSISTANCE?
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 opacity-80">
              <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-[#C8A97E] flex items-center justify-center"><div className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#C8A97E]"></div></div>
              <div className="w-10 md:w-12 h-[1px] bg-[#C8A97E]"></div>
            </div>
            
            <p className="text-[#555555] text-[13px] md:text-[15px] leading-relaxed mb-8 max-w-md">
              If you have any questions regarding our policies or services, our team is always happy to assist you.
            </p>
            
            {/* Buttons - Mobile par w-full aur sm/desktop par normal size */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-[#4A1521] text-white px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#4A1521] hover:bg-transparent hover:text-[#4A1521] active:scale-95 transition-all duration-300"
              >
                CONTACT US
              </Link>
              <Link 
                to="/book-appointment" 
                className="w-full sm:w-auto bg-transparent text-[#C8A97E] px-8 py-3.5 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-sm border border-[#C8A97E] hover:bg-[#C8A97E] hover:text-white active:scale-95 transition-all duration-300"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Style for scrollbar in sidebar (Desktop Only) */}
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

export default Terms;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faqs = () => {
  const faqsData = [
    {
      question: "What types of ladies' outfits do you stitch?",
      answer: "We stitch Bridal Wear, Luxury Pret, Formal Wear, Casual Wear, Party Wear, Eid Collections, Maxi Dresses, Long Frocks, Abayas, and fully customized outfits."
    },
    {
      question: "Do you offer custom stitching?",
      answer: "Yes. Every outfit is stitched according to your measurements, preferred design, fabric, and fitting requirements."
    },
    {
      question: "Can I bring my own fabric?",
      answer: "Absolutely. You can bring your own fabric, lace, embroidery, and accessories, or we can help you choose the perfect material."
    },
    {
      question: "How do I book an appointment?",
      answer: "Simply click the Book Appointment button, call us, or contact us on WhatsApp to schedule your visit."
    },
    {
      question: "Do you take bridal stitching orders?",
      answer: "Yes. We specialize in luxury bridal couture with premium finishing and handcrafted detailing."
    },
    {
      question: "How long does stitching take?",
      answer: "Delivery depends on the outfit:\n\n• Casual Wear: 3–5 days\n• Formal Wear: 5–7 days\n• Luxury Pret: 7–10 days\n• Bridal Dresses: 2–6 weeks"
    },
    {
      question: "Do you provide alteration services?",
      answer: "Yes. We offer professional alterations to improve fitting, length, sleeves, neckline, and overall finishing."
    },
    {
      question: "Can I place an urgent order?",
      answer: "Yes. Rush orders are accepted depending on our production schedule. Please contact us before booking."
    },
    {
      question: "Do you provide measurement services?",
      answer: "Yes. Our team takes professional measurements to ensure a perfect fit."
    },
    {
      question: "Can I share a dress picture for stitching?",
      answer: "Yes. You can share inspiration photos, Pinterest designs, or reference images, and we'll create a custom version for you."
    },
    {
      question: "Do you offer home measurement services?",
      answer: "Home measurement services may be available in selected areas. Please contact us for availability."
    },
    {
      question: "Do you stitch all sizes?",
      answer: "Yes. We stitch outfits in all sizes with customized fitting for every client."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash, Bank Transfer, EasyPaisa, JazzCash, and other available payment methods."
    },
    {
      question: "Can I order from another city?",
      answer: "Yes. You can send your measurements online, and we can discuss delivery options based on your location."
    },
    {
      question: "How can I contact Rana Abdullah Stitching Studio?",
      answer: "You can reach us through Phone, WhatsApp, Instagram, Facebook, Email, or by visiting our studio during business hours."
    },
    {
      question: "Do you copy designer dresses?",
      answer: "We can create outfits inspired by your reference images while maintaining our own craftsmanship and tailoring standards. We do not claim to produce exact replicas of copyrighted designer pieces."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqsData : faqsData.slice(0, 8);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* HEADER SECTION */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[11px] md:text-[13px] tracking-[0.3em] font-bold uppercase mb-4">
          <span className="text-[#C8A97E]">FREQUENTLY ASKED </span>
          <span className="text-[#4A1521]">QUESTIONS</span>
        </h3>
        
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          </div>
          <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        </div>
      </motion.div>

      {/* FAQS GRID */}
      {/* Layout prop is added here to smoothly expand the grid when button is clicked */}
      <motion.div 
        layout 
        className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 items-start"
      >
        <AnimatePresence>
          {displayedFaqs.map((faq, index) => {
            // Naye aane wale FAQs ko delay dena taake wo ek sath jhatke se na ayen
            const animationDelay = index > 7 ? (index - 8) * 0.08 : index * 0.08;

            return (
              <motion.div 
                // key={index} ki jagah unique question string use kiya hai jo bug-free hai
                key={faq.question}
                layout 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: animationDelay }}
                
                onMouseEnter={() => setOpenIndex(index)}
                onClick={() => toggleFaq(index)}
                
                className={`bg-white rounded-md border transition-all duration-300 cursor-pointer overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#C8A97E] shadow-[0_10px_30px_rgba(200,169,126,0.15)]' 
                    : 'border-[#C8A97E]/20 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#C8A97E]/50'
                }`}
              >
                
                {/* Question Header */}
                <div className="flex items-center justify-between p-5 md:p-6">
                  <span className={`font-bold text-[12px] md:text-[13px] tracking-wide pr-4 transition-colors duration-300 ${
                    openIndex === index ? 'text-[#C8A97E]' : 'text-[#4A1521]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Animated Plus/Minus Icon */}
                  <div className={`flex-shrink-0 transition-transform duration-500 ${
                    openIndex === index ? 'text-[#C8A97E] rotate-180' : 'text-[#C8A97E]/70'
                  }`}>
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Expandable Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#666666] text-[12px] leading-[1.8] whitespace-pre-line border-t border-[#C8A97E]/10 pt-4 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* READ ALL FAQS BUTTON */}
      {faqsData.length > 8 && (
        <motion.div 
          layout // Button bhi neechay smoothly slide hoga
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border border-[#C8A97E] text-[#4A1521] bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] transition-all duration-500 rounded-sm shadow-sm flex items-center gap-2"
          >
            {showAll ? "SHOW LESS FAQS" : "READ ALL FAQS"}
            
            {/* Arrow Icon */}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      )}

    </section>
  );
};

export default Faqs;
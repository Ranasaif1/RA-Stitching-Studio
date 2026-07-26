import React, { useState } from 'react';

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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#FDFBF7] font-['Montserrat',sans-serif]">
      
      {/* Centered Heading */}
      <div className="text-center mb-16">
        <h3 className="text-[11px] md:text-[13px] tracking-[0.3em] font-bold uppercase mb-4">
          <span className="text-[#C8A97E]">FREQUENTLY ASKED </span>
          <span className="text-[#4A1521]">QUESTIONS</span>
        </h3>
        
        {/* Golden Ornamental Divider */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
          <div className="flex gap-1">
            <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
            <div className="w-1 h-1 rotate-45 bg-[#C8A97E]"></div>
          </div>
          <div className="w-10 h-[1px] bg-[#C8A97E]/70"></div>
        </div>
      </div>

      {/* Premium 2-Column Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 items-start">
        {faqsData.map((faq, index) => (
          <div 
            key={index} 
            // Box hata kar sirf ek elegant bottom border lagaya hai
            className="border-b border-[#C8A97E]/30 pb-2 transition-all duration-300"
          >
            {/* FAQ Header / Question Button */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className={`font-bold text-[12px] md:text-[13px] tracking-wide pr-4 transition-colors duration-300 ${
                openIndex === index ? 'text-[#C8A97E]' : 'text-[#4A1521] group-hover:text-[#C8A97E]'
              }`}>
                {faq.question}
              </span>
              
              {/* Premium Thin Line SVG Icons */}
              <div className="flex-shrink-0 text-[#C8A97E] transition-transform duration-300 ml-2">
                {openIndex === index ? (
                  // Minus Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 12H4" />
                  </svg>
                ) : (
                  // Plus Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </div>
            </button>

            {/* Expandable Answer */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[400px] opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-[#666666] text-[12px] leading-[1.8] whitespace-pre-line pr-8">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Faqs;
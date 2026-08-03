// ServicePage.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from './servicesData';

const ServicePage = () => {
  const { slug } = useParams();
  
  // Find the exact service data using the slug from the URL
  const service = servicesData.find((s) => s.slug === slug);

  // Agar user ghalat URL daale toh 404 ya home pe bhej dein
  if (!service) {
    return <Navigate to="/services"/>;
  }

  return (
    <div className="bg-[#FAF8F5] font-sans text-gray-800">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${service.hero.bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-serif text-[#D4AF37] mb-4 uppercase tracking-widest">{service.hero.title}</h1>
          <h2 className="text-2xl font-light mb-6 italic">{service.hero.subtitle}</h2>
          <p className="text-sm md:text-base leading-relaxed mb-8">{service.hero.description}</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-sm hover:bg-yellow-600 transition">BOOK APPOINTMENT</button>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-sm hover:bg-[#D4AF37] hover:text-white transition">VIEW COLLECTION</button>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={service.intro.image} alt={service.intro.title} className="w-full h-auto rounded-sm shadow-xl" />
        </div>
        <div>
          <h3 className="text-3xl font-serif text-[#D4AF37] mb-6 uppercase tracking-wider">{service.intro.title}</h3>
          {service.intro.paragraphs.map((para, index) => (
            <p key={index} className="mb-4 text-gray-600 leading-relaxed text-justify">{para}</p>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif text-[#D4AF37] mb-12 uppercase tracking-wider">Why Choose Our {service.hero.title}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {service.whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37]">
                  {/* Yahan Icon daal sakte hain */}
                  <span className="text-2xl">✧</span> 
                </div>
                <h4 className="font-bold mb-2 uppercase text-sm tracking-wide">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED & PROCESS */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {/* Included List */}
        <div className="bg-white p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 text-center uppercase">What's Included</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whatsIncluded.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <span className="text-[#D4AF37] mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="bg-white p-8 border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 text-center uppercase">Our Process</h3>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-[#D4AF37] mb-12 text-center uppercase tracking-wider">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-l-2 border-[#D4AF37] pl-4">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="bg-[#1a1a1a] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-[#D4AF37] mb-4">{service.cta.title}</h3>
          <p className="text-gray-300 mb-8">{service.cta.desc}</p>
          <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-sm hover:bg-yellow-600 transition font-bold tracking-widest uppercase">
            Book Your Appointment
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicePage;
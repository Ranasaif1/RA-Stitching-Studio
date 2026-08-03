import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
                <h1 className="font-['Cinzel',serif] text-4xl text-[#4A1521]">Service Not Found</h1>
                <Link to="/services" className="mt-4 text-[#C8A97E] border-b border-[#C8A97E]">
                    Return to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#FDFBF7] font-['Montserrat',sans-serif] text-gray-800">
            
            {/* 1. HERO SECTION */}
            <section 
                className="relative h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${service.heroImg})` }}
            >
                <div className="absolute inset-0 bg-[#110a0c]/70"></div>
                <div className="relative z-10 max-w-4xl px-6 text-white">
                    <span className="text-[#C8A97E] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        RANA ABDULLAH STITCHING STUDIO
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Cinzel',serif] text-white mb-4 uppercase tracking-wider">
                        {service.title}
                    </h1>
                    <h2 className="text-lg md:text-xl font-light text-[#C8A97E] mb-6 italic">
                        {service.subtitle}
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {service.heroDesc}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link 
                            to="/appointment" 
                            className="bg-[#4A1521] border border-[#4A1521] text-white px-8 py-3 rounded-sm hover:bg-[#C8A97E] hover:border-[#C8A97E] transition font-bold tracking-widest text-xs uppercase"
                        >
                            BOOK APPOINTMENT
                        </Link>
                        <Link 
                            to="/collections" 
                            className="border border-[#C8A97E] text-[#C8A97E] px-8 py-3 rounded-sm hover:bg-[#C8A97E] hover:text-[#4A1521] transition font-bold tracking-widest text-xs uppercase"
                        >
                            VIEW COLLECTION
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT/INTRO SECTION */}
            <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-['Cinzel',serif] text-[#4A1521] mb-6 uppercase tracking-wider">
                        {service.aboutTitle}
                    </h3>
                    <p className="mb-4 text-[#555555] leading-relaxed text-sm md:text-base text-justify">
                        {service.aboutDesc1}
                    </p>
                    <p className="mb-4 text-[#555555] leading-relaxed text-sm md:text-base text-justify">
                        {service.aboutDesc2}
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img 
                        src={service.aboutImg} 
                        alt={service.aboutTitle} 
                        className="w-full h-auto rounded-sm shadow-xl border border-[#C8A97E]/20" 
                    />
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="bg-white py-20 border-y border-[#C8A97E]/20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-['Cinzel',serif] text-[#4A1521] mb-12 uppercase tracking-wider">
                        {service.whyChooseTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.whyChooseUs.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center p-6 border border-[#C8A97E]/10 rounded-sm hover:shadow-md transition"
                            >
                                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full border border-[#C8A97E] text-[#C8A97E]">
                                    <span className="text-xl">✦</span>
                                </div>
                                <h4 className="font-['Cinzel',serif] font-bold mb-2 uppercase text-base text-[#4A1521] tracking-wide">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHAT'S INCLUDED & PROCESS */}
            <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
                {/* What's Included */}
                <div className="bg-white p-8 border border-[#C8A97E]/20 shadow-sm">
                    <h3 className="text-2xl font-['Cinzel',serif] text-[#4A1521] mb-6 text-center uppercase tracking-wide">
                        What's Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-center text-sm text-[#555555]">
                                <span className="text-[#C8A97E] mr-3 font-bold">✔</span> 
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Process */}
                <div className="bg-white p-8 border border-[#C8A97E]/20 shadow-sm">
                    <h3 className="text-2xl font-['Cinzel',serif] text-[#4A1521] mb-6 text-center uppercase tracking-wide">
                        {service.processTitle}
                    </h3>
                    <div className="space-y-6">
                        {service.process.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#4A1521] text-[#C8A97E] flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                    {step.step}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-[#4A1521] uppercase mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GALLERY */}
            {service.gallery && service.gallery.length > 0 && (
                <section className="bg-white py-20 border-t border-[#C8A97E]/20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-3xl font-['Cinzel',serif] text-[#4A1521] mb-10 text-center uppercase tracking-wider">
                            {service.title} Gallery
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {service.gallery.map((img, idx) => (
                                <div key={idx} className="aspect-[3/4] overflow-hidden rounded-sm border border-[#C8A97E]/20">
                                    <img 
                                        src={img} 
                                        alt={`${service.title} sample ${idx+1}`} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. FAQS */}
            <section className="bg-[#FDFBF7] py-20 border-t border-[#C8A97E]/20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-['Cinzel',serif] text-[#4A1521] mb-12 text-center uppercase tracking-wider">
                        Frequently Asked Questions
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-sm border-l-2 border-[#C8A97E] shadow-sm">
                                <h4 className="font-bold text-sm text-[#4A1521] mb-2">
                                    {faq.q}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CALL TO ACTION (CTA) */}
            <section className="bg-[#4A1521] text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h3 className="text-3xl font-['Cinzel',serif] text-[#C8A97E] mb-4">
                        {service.ctaTitle}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                        {service.ctaDesc}
                    </p>
                    <Link 
                        to="/appointment" 
                        className="inline-block bg-[#C8A97E] text-[#4A1521] px-8 py-3 rounded-sm hover:bg-white transition font-bold tracking-widest text-xs uppercase"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetail;
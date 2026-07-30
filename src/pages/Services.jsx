import React, { useEffect } from 'react';

// ==========================================
// IMPORT ALL COMPONENTS (Directly from components folder)
// ==========================================
import ServiceHero from '../components/ServiceHero';
import TailoringExpectations from '../components/TailoringExpectations';
import SignatureServices from '../components/SignatureServices';
import WhyChooseUs from '../components/ServiceWhyChooseUs';
import OurProcess from '../components/ServiceOurProcess';
import ManufacturingPartner from '../components/ManufacturingPartner';
import ServiceFAQs from '../components/ServiceFAQs';
import ServiceCTA from '../components/CallToAction';
import InstagramFeed from '../components/InstagramFeed';

const Services = () => {
    // Page load hote hi screen ko top par le jayega
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FDFBF7] min-h-screen font-['Montserrat',sans-serif]">
            <ServiceHero />
            <TailoringExpectations />
            <SignatureServices />
            <WhyChooseUs />
            <OurProcess />
            <ManufacturingPartner />
            <ServiceFAQs />
            <ServiceCTA />
            <InstagramFeed/>
        </div>
    );
};

export default Services;
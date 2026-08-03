import React from 'react';
import AppointmentHero from '../components/AppointmentHero';
import ExperienceCouture from '../components/ExperienceCouture';
import BookingSection from '../components/BookingSection';
import AppointmentProcess from '../components/AppointmentProcess';
import WhyChooseUs from '../components/ServiceWhyChooseUs'; // Purana reused component
import AppointmentFAQs from '../components/AppointmentFAQs';
import CallToAction from '../components/CallToAction'; // Purana CTA component
import InstagramFeed from '../components/InstagramFeed';

const Appointment = () => {
    return (
        <div className="w-full bg-white font-sans">
            <AppointmentHero />
            <ExperienceCouture />
            <BookingSection />
            <AppointmentProcess />
            <WhyChooseUs />
            <AppointmentFAQs />
            <CallToAction />
            <InstagramFeed />
        </div>
    );
};

export default Appointment;
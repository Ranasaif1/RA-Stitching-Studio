import React from 'react';

import CollectionsHero from '../components/CollectionsHero';
import HeritageSection from '../components/HeritageSection';
import HomeCollection from '../components/HomeCollection';
import WhyChooseUs from '../components/ServiceWhyChooseUs';
import SignatureCollections from '../components/SignatureCollections'; 
import Craftsmanship from '../components/Craftsmanship';
import SeasonalCollections from '../components/SeasonalCollections';
import CallToAction from '../components/CallToAction'; 
import InstagramFeed from '../components/InstagramFeed';

const Collections = () => {
    return (
        // 🚨 FIX: Yahan se "overflow-x-hidden" hata diya gaya hai
        <div className="w-full bg-white font-sans">
            <CollectionsHero />
            <HeritageSection />
            <HomeCollection />
            <WhyChooseUs />
            <SignatureCollections />
            <Craftsmanship />
            <SeasonalCollections />
            <CallToAction />
            <InstagramFeed />
        </div>
    );
};

export default Collections;
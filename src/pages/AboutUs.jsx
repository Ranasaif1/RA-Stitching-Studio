import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import WhyChooseUs from '../components/WhyChooseUs';
import MissionVision from '../components/MissionVision';
import AboutStats from '../components/AboutStats';
import AboutQuote from '../components/AboutQuote';
import AboutCTA from '../components/CallToAction';
import InstagramFeed from '../components/InstagramFeed';
import OurPromise from '../components/AboutPromise';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#FDFBF7] font-['Montserrat',sans-serif] text-[#555555]">

      {/* Signature Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        `}
      </style>

      {/* Saaray components yahan line se render honge */}
      <AboutHero />
      <AboutStats />
      <OurStory />
      <WhyChooseUs />
      <MissionVision />
      <OurPromise/>
      <AboutQuote />
      <AboutCTA />
      <InstagramFeed/>

    </div>
  );
};

export default AboutUs;
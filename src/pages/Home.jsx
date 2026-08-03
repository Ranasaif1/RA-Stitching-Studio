import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutPromise from '../components/AboutPromise';
import Collections from '../components/HomeCollection';
import Stats from '../components/Stats';
import AboutSection from '../components/AboutSection';
import OurProcess from '../components/OurProcess';
import Craftsmanship from '../components/Craftsmanship';
import SignatureCollections from '../components/SignatureCollections';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Faqs from '../components/Faqs';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection/>
        <Services />
        <Stats />
        <Collections />
        <AboutPromise />
        <OurProcess/>
        <Craftsmanship/>
        <SignatureCollections/>
        <CallToAction/>
        <Testimonials/>
        <InstagramFeed/>
        <Faqs/>
      </main>
    </div>
  );
};

export default Home;
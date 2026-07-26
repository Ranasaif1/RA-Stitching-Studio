import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutPromise from '../components/AboutPromise';
import Collections from '../components/Collections';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import OurProcess from '../components/OurProcess';
import Craftsmanship from '../components/Craftsmanship';
import SignatureCollections from '../components/SignatureCollections';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import Faqs from '../components/Faqs';

const Home = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;
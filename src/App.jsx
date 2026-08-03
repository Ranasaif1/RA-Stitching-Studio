import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Components aur Pages Import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Collections from './pages/Collections';
import Appointment from './pages/Appointment';
import WhatsAppButton from './components/WhatsAppButton'; // WhatsApp Button Component Import

// Naya Dynamic Service Page Import
import ServiceDetail from './pages/ServiceDetail'; 
import CollectionDetail from './pages/CollectionDetail';
// Har naye page par automatically top par scroll karne ke liye component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Yeh page change hone par screen ko top par le jayega */}
      
      <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-['Montserrat',sans-serif]">
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Standard Pages (All paths in lowercase) */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/appointment" element={<Appointment />} />

            
            {/* Dynamic Service Route */}
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
            <Route path="/collection/:collectionId" element={<CollectionDetail />} />

            {/* Catch-all Route: Agar URL match na ho toh Home par bhej do */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <WhatsAppButton /> {/* WhatsApp Button Component */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
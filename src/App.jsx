import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components aur Pages Import karein (Apne folder paths ke hisaab se check kar lein)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    // Router app ko pages mein divide karne mein madad karta hai
    <Router>
      <div className="bg-[#FDFBF7] min-h-screen flex flex-col font-['Montserrat',sans-serif]">
        
        {/* Navbar har page par same rahega isliye isko Routes se bahar rakha hai */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Jab link '/' hoga toh Home chalega */}
            <Route path="/" element={<Home />} />
            
            {/* Jab link '/about-us' hoga toh AboutUs component chalega */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />

          </Routes>
        </main>
        
        {/* Footer bhi har page par same rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
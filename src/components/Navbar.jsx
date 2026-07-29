import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// React Router se Link import kiya hai
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('HOME');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Page track karne ke liye location use kar rahe hain
    const location = useLocation();

    const navItems = ['HOME', 'ABOUT US', 'SERVICES', 'COLLECTIONS', 'GALLERY', 'CONTACT'];

    // Jab page badlega toh Active Link khud set ho jayega
    useEffect(() => {
        if (location.pathname === '/about-us') {
            setActiveLink('ABOUT US');
        } else if (location.pathname === '/') {
            setActiveLink('HOME');
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const getLinkHref = (item) => {
        if (item === 'HOME') return '/';
        if (item === 'ABOUT US') return '/about-us';
        return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <motion.header 
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-[5%] transition-all duration-500 ease-in-out ${
                scrolled 
                ? 'h-[90px] bg-white shadow-md border-b border-[#C8A97E]/20' 
                : 'h-[110px] bg-transparent'
            }`}
        >
            <div className="logo flex-shrink-0 relative z-50 flex items-center h-full">
                {/* Logo par click karne se bhi Home page par chala jaye */}
                <Link to="/" onClick={() => setActiveLink('HOME')}>
                    <img 
                        src="/logo.png" 
                        alt="Rana Abdullah Logo" 
                        className={`hidden lg:block w-auto object-contain cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                            scrolled ? 'h-[55px] xl:h-[150px]' : 'h-[75px] xl:h-[200px]'
                        }`} 
                    />
                    <img 
                        src="/minilogo.png" 
                        alt="Rana Abdullah Mini Logo" 
                        className={`block lg:hidden w-auto object-contain cursor-pointer transition-all duration-500 ${
                            scrolled ? 'h-[80px]' : 'h-[100px]'
                        }`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/logo.png";
                        }}
                    />
                </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto h-full">
                <nav className="nav-menu flex items-center">
                    <ul className="flex items-center gap-6 xl:gap-8 m-0 p-0 list-none">
                        {navItems.map((item) => {
                            const isPageLink = item === 'HOME' || item === 'ABOUT US';
                            
                            return (
                                <li key={item}>
                                    {/* Agar Home ya About Us hai toh Link use karein bina refresh page change ke liye */}
                                    {isPageLink ? (
                                        <Link
                                            to={getLinkHref(item)}
                                            onClick={() => setActiveLink(item)}
                                            className={`relative text-[12px] xl:text-[13px] font-bold tracking-[1.5px] uppercase transition-colors duration-300 group py-2 ${
                                                activeLink === item ? 'text-[#4A1521]' : 'text-[#4A1521] hover:text-[#C8A97E]'
                                            }`}
                                        >
                                            {item}
                                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A97E] transition-transform duration-300 origin-center ${
                                                activeLink === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}></span>
                                        </Link>
                                    ) : (
                                        /* Baqi items ke liye normal anchor tag use karein */
                                        <a
                                            href={getLinkHref(item)}
                                            onClick={() => setActiveLink(item)}
                                            className={`relative text-[12px] xl:text-[13px] font-bold tracking-[1.5px] uppercase transition-colors duration-300 group py-2 ${
                                                activeLink === item ? 'text-[#4A1521]' : 'text-[#4A1521] hover:text-[#C8A97E]'
                                            }`}
                                        >
                                            {item}
                                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A97E] transition-transform duration-300 origin-center ${
                                                activeLink === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}></span>
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="header-cta flex items-center">
                    <a 
                        href="#book-appointment" 
                        className="inline-flex items-center gap-2.5 text-[#4A1521] border border-[#C8A97E] px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] xl:text-[12px] font-bold tracking-[1.5px] uppercase transition-all duration-500 bg-transparent hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] shadow-sm hover:shadow-md rounded-sm group"
                    >
                        <svg className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        BOOK APPOINTMENT
                    </a>
                </div>
            </div>

            <div className="lg:hidden flex items-center relative z-50 h-full">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex flex-col justify-center items-center w-10 h-10 border border-[#C8A97E] rounded-sm bg-white/50 focus:outline-none overflow-hidden"
                >
                    <span className={`block w-5 h-[2px] bg-[#4A1521] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-[2px] bg-[#4A1521] transition-all duration-300 ease-in-out my-1 ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'}`}></span>
                    <span className={`block w-5 h-[2px] bg-[#4A1521] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`}></span>
                </button>
            </div>

            <div 
                className={`fixed inset-0 bg-[#FDFBF7] z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out origin-top ${
                    isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}
            >
                <div className="absolute top-[100px] flex items-center justify-center gap-2">
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                </div>
                
                <ul className="flex flex-col items-center gap-6 w-full px-6 mt-10">
                    {navItems.map((item, index) => {
                        const isPageLink = item === 'HOME' || item === 'ABOUT US';

                        return (
                            <li 
                                key={item} 
                                className={`transform transition-all duration-500 ease-out ${
                                    isMobileMenuOpen 
                                    ? `translate-y-0 opacity-100 delay-[${index * 100}ms]` 
                                    : 'translate-y-8 opacity-0 delay-0'
                                }`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
                            >
                                {isPageLink ? (
                                    <Link
                                        to={getLinkHref(item)}
                                        onClick={() => {
                                            setActiveLink(item);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`text-2xl font-['Cinzel',serif] tracking-[0.1em] font-medium uppercase transition-colors duration-300 relative inline-block ${
                                            activeLink === item ? 'text-[#C8A97E]' : 'text-[#4A1521]'
                                        }`}
                                    >
                                        {item}
                                        {activeLink === item && (
                                            <span className="absolute top-1/2 left-[-10px] right-[-10px] h-[1px] bg-[#C8A97E] -translate-y-1/2 opacity-50"></span>
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        href={getLinkHref(item)}
                                        onClick={() => {
                                            setActiveLink(item);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`text-2xl font-['Cinzel',serif] tracking-[0.1em] font-medium uppercase transition-colors duration-300 relative inline-block ${
                                            activeLink === item ? 'text-[#C8A97E]' : 'text-[#4A1521]'
                                        }`}
                                    >
                                        {item}
                                        {activeLink === item && (
                                            <span className="absolute top-1/2 left-[-10px] right-[-10px] h-[1px] bg-[#C8A97E] -translate-y-1/2 opacity-50"></span>
                                        )}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className={`absolute bottom-16 transform transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <a 
                        href="#book-appointment" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-[#4A1521] border border-[#C8A97E] px-8 py-3.5 text-[11px] font-bold tracking-[2px] uppercase bg-transparent hover:bg-[#4A1521] hover:text-white transition-all duration-300 rounded-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        BOOK APPOINTMENT
                    </a>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Dropdown states
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const location = useLocation();

    const navItems = ['HOME', 'ABOUT US', 'SERVICES', 'COLLECTIONS', 'CONTACT'];

    // Services List with precise routes
    const servicesList = [
        { name: 'Bridal Couture', path: '/service/bridal-couture' },
        { name: 'Luxury Pret', path: '/service/luxury-pret' },
        { name: 'Formal Wear', path: '/service/formal-wear' },
        { name: 'Casual Wear', path: '/service/casual-wear' },
        { name: 'Custom Stitching', path: '/service/custom-stitching' },
        { name: 'Boutique & Bulk', path: '/service/boutique-bulk' },
        { name: 'Western Collection', path: '/service/western-collection' }
    ];

    // Scroll Track
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile Menu Body Overflow
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsMobileDropdownOpen(false); // Reset dropdown when closing menu
        }
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const getLinkHref = (item) => {
        if (item === 'HOME') return '/';
        if (item === 'ABOUT US') return '/about-us';
        if (item === 'CONTACT') return '/contact';
        if (item === 'SERVICES') return '/services';
        if (item === 'COLLECTIONS') return '/collections';
        return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <motion.header
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-[5%] transition-all duration-500 ease-in-out ${scrolled
                ? 'h-[90px] bg-white shadow-md border-b border-[#C8A97E]/20'
                : 'h-[110px] bg-transparent'
            }`}
        >
            {/* LOGO */}
            <div className="logo flex-shrink-0 relative z-50 flex items-center h-full">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Rana Abdullah Logo"
                        className={`hidden lg:block w-auto object-contain cursor-pointer transition-all duration-500 hover:scale-[1.02] ${scrolled ? 'h-[55px] xl:h-[150px]' : 'h-[75px] xl:h-[200px]'}`}
                    />
                    <img
                        src="/minilogo.png"
                        alt="Rana Abdullah Mini Logo"
                        className={`block lg:hidden w-auto object-contain cursor-pointer transition-all duration-500 ${scrolled ? 'h-[80px]' : 'h-[100px]'}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/logo.png";
                        }}
                    />
                </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto h-full">
                <nav className="nav-menu flex items-center h-full">
                    <ul className="flex items-center gap-6 xl:gap-8 m-0 p-0 list-none h-full">
                        {navItems.map((item) => {
                            const isPageLink = item === 'HOME' || item === 'ABOUT US' || item === 'SERVICES' || item === 'COLLECTIONS' || item === 'CONTACT';
                            const hasDropdown = item === 'SERVICES';

                            return (
                                <li 
                                    key={item} 
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => hasDropdown && setIsDropdownOpen(true)}
                                    onMouseLeave={() => hasDropdown && setIsDropdownOpen(false)}
                                >
                                    {isPageLink ? (
                                        <NavLink
                                            to={getLinkHref(item)}
                                            className={({ isActive }) =>
                                                `relative flex items-center gap-1 text-[12px] xl:text-[13px] font-bold tracking-[1.5px] uppercase transition-colors duration-300 group py-8 ${isActive || (hasDropdown && isDropdownOpen) ? 'text-[#4A1521]' : 'text-[#4A1521] hover:text-[#C8A97E]'}`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {item}
                                                    {/* Dropdown Arrow Icon */}
                                                    {hasDropdown && (
                                                        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#C8A97E]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                    )}
                                                    <span className={`absolute bottom-[25px] left-0 w-full h-[2px] bg-[#C8A97E] transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                                </>
                                            )}
                                        </NavLink>
                                    ) : (
                                        <a
                                            href={getLinkHref(item)}
                                            className="relative text-[12px] xl:text-[13px] font-bold tracking-[1.5px] uppercase transition-colors duration-300 group py-8 text-[#4A1521] hover:text-[#C8A97E]"
                                        >
                                            {item}
                                            <span className="absolute bottom-[25px] left-0 w-full h-[2px] bg-[#C8A97E] transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100"></span>
                                        </a>
                                    )}

                                    {/* 🌟 LUXURY DESKTOP DROPDOWN 🌟 */}
                                    {hasDropdown && (
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[240px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-t-2 border-[#C8A97E] rounded-b-md overflow-hidden z-50 flex flex-col py-2"
                                                >
                                                    {servicesList.map((service, idx) => (
                                                        <Link 
                                                            key={idx} 
                                                            to={service.path}
                                                            className="px-6 py-3 text-[12px] font-bold tracking-[1px] uppercase text-[#555555] hover:text-[#4A1521] hover:bg-[#FDFBF7] transition-all duration-300 flex items-center group/link"
                                                        >
                                                            <span className="w-0 h-[1px] bg-[#C8A97E] transition-all duration-300 group-hover/link:w-3 group-hover/link:mr-2"></span>
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="header-cta flex items-center">
                    <Link
                        to="/appointment"
                        className="inline-flex items-center gap-2.5 text-[#4A1521] border border-[#C8A97E] px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] xl:text-[12px] font-bold tracking-[1.5px] uppercase transition-all duration-500 bg-transparent hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] shadow-sm hover:shadow-md rounded-sm group"
                    >
                        <svg className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
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

            {/* MOBILE NAVIGATION OVERLAY */}
            <div
                className={`fixed inset-0 bg-[#FDFBF7] z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}
            >
                <div className="absolute top-[100px] flex items-center justify-center gap-2">
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                </div>

                <ul className="flex flex-col items-center gap-5 w-full px-6 mt-16 max-h-[60vh] overflow-y-auto">
                    {navItems.map((item, index) => {
                        const isPageLink = item === 'HOME' || item === 'ABOUT US' || item === 'SERVICES' || item === 'COLLECTIONS' || item === 'CONTACT';
                        const hasDropdown = item === 'SERVICES';

                        return (
                            <li
                                key={item}
                                className={`transform transition-all duration-500 ease-out flex flex-col items-center w-full ${isMobileMenuOpen ? `translate-y-0 opacity-100 delay-[${index * 100}ms]` : 'translate-y-8 opacity-0 delay-0'}`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
                            >
                                {isPageLink ? (
                                    hasDropdown ? (
                                        // 🌟 MOBILE DROPDOWN TOGGLE 🌟
                                        <div className="flex flex-col items-center w-full">
                                            <button 
                                                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                                className={`text-2xl font-['Cinzel',serif] tracking-[0.1em] font-medium uppercase transition-colors duration-300 relative inline-flex items-center gap-2 ${isMobileDropdownOpen ? 'text-[#C8A97E]' : 'text-[#4A1521]'}`}
                                            >
                                                {item}
                                                <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </button>

                                            {/* MOBILE DROPDOWN ITEMS */}
                                            <AnimatePresence>
                                                {isMobileDropdownOpen && (
                                                    <motion.div 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="flex flex-col items-center gap-4 mt-4 overflow-hidden border-l border-r border-[#C8A97E]/30 px-6 py-2"
                                                    >
                                                        {servicesList.map((service, idx) => (
                                                            <Link 
                                                                key={idx} 
                                                                to={service.path}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="text-[12px] font-bold tracking-[1px] uppercase text-[#555555] hover:text-[#C8A97E]"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        ))}
                                                        {/* Link to main services page */}
                                                        <Link 
                                                            to="/services"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="text-[11px] font-bold tracking-[2px] uppercase text-[#4A1521] border-b border-[#4A1521] pb-1 mt-2"
                                                        >
                                                            VIEW ALL SERVICES
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={getLinkHref(item)}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `text-2xl font-['Cinzel',serif] tracking-[0.1em] font-medium uppercase transition-colors duration-300 relative inline-block ${isActive ? 'text-[#C8A97E]' : 'text-[#4A1521]'}`
                                            }
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {item}
                                                    {isActive && (
                                                        <span className="absolute top-1/2 left-[-10px] right-[-10px] h-[1px] bg-[#C8A97E] -translate-y-1/2 opacity-50"></span>
                                                    )}
                                                </>
                                            )}
                                        </NavLink>
                                    )
                                ) : (
                                    <a
                                        href={getLinkHref(item)}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-['Cinzel',serif] tracking-[0.1em] font-medium uppercase transition-colors duration-300 relative inline-block text-[#4A1521]"
                                    >
                                        {item}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className={`absolute bottom-12 transform transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <Link
                        to="/appointment"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-[#4A1521] border border-[#C8A97E] px-8 py-3.5 text-[11px] font-bold tracking-[2px] uppercase bg-transparent hover:bg-[#4A1521] hover:text-white transition-all duration-300 rounded-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('HOME');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Scroll State to trigger Shrink Animation
    const [scrolled, setScrolled] = useState(false);

    const navItems = ['HOME', 'ABOUT US', 'SERVICES', 'COLLECTIONS', 'GALLERY', 'CONTACT'];

    useEffect(() => {
        const handleScroll = () => {
            // Jab user 50px se zyada scroll karega toh 'scrolled' true ho jayega
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

    return (
        <header 
            // Navbar Height Animation: Top par 110px, Scroll par shrink ho kar 75px
            className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-[5%] transition-all duration-500 ease-in-out ${
                scrolled 
                ? 'h-[90px] bg-white shadow-md border-b border-[#C8A97E]/20' 
                : 'h-[110px] bg-transparent' // Top par transparent aur bara hoga
            }`}
        >
            {/* Logo Section */}
            <div className="logo flex-shrink-0 relative z-50 flex items-center h-full">
                
                {/* Desktop Logo - Dynamic Shrink Animation */}
                <img 
                    src="/logo.png" 
                    alt="Rana Abdullah Logo" 
                    // Scroll hone par logo ki height 90px se choti ho kar 60px reh jayegi
                    className={`hidden lg:block w-auto object-contain cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                        scrolled ? 'h-[55px] xl:h-[150px]' : 'h-[75px] xl:h-[200px]'
                    }`} 
                />
                
                {/* Mobile Mini Logo - Dynamic Shrink Animation */}
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
            </div>

            {/* Right Side: Nav Menu + Button Container */}
            {/* items-center isko hamesha logo ke bilkul barabar rakhega */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto h-full">
                
                {/* Desktop Navigation Menu */}
                <nav className="nav-menu flex items-center">
                    <ul className="flex items-center gap-6 xl:gap-8 m-0 p-0 list-none">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setActiveLink(item)}
                                    className={`relative text-[12px] xl:text-[13px] font-bold tracking-[1.5px] uppercase transition-colors duration-300 group py-2 ${
                                        activeLink === item ? 'text-[#4A1521]' : 'text-[#4A1521] hover:text-[#C8A97E]'
                                    }`}
                                >
                                    {item}
                                    
                                    {/* Golden underline animation */}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A97E] transition-transform duration-300 origin-center ${
                                        activeLink === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Call to Action Button */}
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

            {/* Mobile Menu 3-Bar Toggle Button */}
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

            {/* Mobile Dropdown Menu */}
            <div 
                className={`fixed inset-0 bg-[#FDFBF7] z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out origin-top ${
                    isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}
            >
                {/* Decorative Top Ornament */}
                <div className="absolute top-[100px] flex items-center justify-center gap-2">
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A97E]"></div>
                    <div className="w-12 h-[1px] bg-[#C8A97E]/70"></div>
                </div>
                
                {/* Mobile Nav Links */}
                <ul className="flex flex-col items-center gap-6 w-full px-6 mt-10">
                    {navItems.map((item, index) => (
                        <li 
                            key={item} 
                            className={`transform transition-all duration-500 ease-out ${
                                isMobileMenuOpen 
                                ? `translate-y-0 opacity-100 delay-[${index * 100}ms]` 
                                : 'translate-y-8 opacity-0 delay-0'
                            }`}
                            style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
                        >
                            <a
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
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
                        </li>
                    ))}
                </ul>

                {/* Mobile Call to Action Button */}
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
        </header>
    );
};

export default Navbar;
import React, { useState } from 'react';

const Navbar = () => {
    // Default active link 'HOME' set kiya hai
    const [activeLink, setActiveLink] = useState('HOME');

    // Navigation items ki list
    const navItems = [
        'HOME', 'ABOUT US', 'SERVICES', 'COLLECTIONS', 
        'GALLERY', 'CONTACT'
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] py-4 bg-transparent ">
            
            {/* Logo Section */}
            <div className="logo flex-shrink-0">
                <img 
                    src="/logo.png" 
                    alt="Rana Abdullah Logo" 
                    className="h-[160px] w-auto object-contain cursor-pointer" 
                />
            </div>

            {/* Navigation Menu */}
            <nav className="nav-menu hidden lg:block">
                <ul className="flex items-center gap-8 m-0 p-0 list-none">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setActiveLink(item)}
                                className={`relative text-[15px] font-medium tracking-[1.5px] uppercase transition-colors duration-300 ${
                                    activeLink === item ? 'text-[#4A1521]' : 'text-[#4A1521] hover:text-[#C8A97E]'
                                }`}
                            >
                                {item}
                                {/* Active Link Cross Line */}
                                {activeLink === item && (
                                    <span className="absolute top-1/2 left-0 w-full h-[1px] bg-[#4A1521] -translate-y-1/2 opacity-50"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Call to Action Button */}
            <div className="header-cta hidden md:block">
                <a 
                    href="#book-appointment" 
                    className="inline-flex items-center gap-2.5 text-[#4A1521] border border-[#C8A97E] px-6 py-3 text-[13px] font-medium tracking-[1px] uppercase transition-all duration-300 bg-transparent hover:bg-[#4A1521] hover:text-white hover:border-[#4A1521] group"
                >
                    <i className="fa-regular fa-calendar text-[#C8A97E] group-hover:text-white transition-colors text-sm"></i> 
                    BOOK APPOINTMENT
                </a>
            </div>
            
        </header>
    );
};

export default Navbar;
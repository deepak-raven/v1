
import React, { useState } from 'react';
import { GearIcon } from './icons';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navLinks = ["Home", "Gallery", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/brushed-metal.png)' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Gears */}
        <div className="flex items-center space-x-[-20px] text-[#8c7853]">
          <GearIcon className={`w-12 h-12 ${isHovering ? 'animate-rotate-fast' : 'animate-rotate'}`} />
          <GearIcon className={`w-8 h-8 ${isHovering ? 'animate-rotate-reverse-fast' : 'animate-rotate-reverse'}`} />
        </div>

        {/* Navigation Links */}
        <nav onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <ul className="flex space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="font-heading text-sm md:text-base tracking-widest uppercase px-4 py-2 bg-[#a1885c] text-[#2a2a2a] rounded-sm shadow-md transition-all duration-300 hover:bg-[#c0a062] hover:shadow-lg hover:shadow-[#c0a062]/20 transform hover:-translate-y-0.5">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Gears */}
        <div className="flex items-center space-x-[-20px] text-[#8c7853]">
          <GearIcon className={`w-8 h-8 ${isHovering ? 'animate-rotate-reverse-fast' : 'animate-rotate-reverse'}`} />
          <GearIcon className={`w-12 h-12 ${isHovering ? 'animate-rotate-fast' : 'animate-rotate'}`} />
        </div>
      </div>
    </header>
  );
};

export default Header;

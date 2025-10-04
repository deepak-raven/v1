
import React, { useState, useEffect, useRef } from 'react';
import { GearIcon } from './icons';

const Hero = () => {
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Trigger animation after mount
    
    const handleMouseMove = (e: MouseEvent) => {
      const target = heroRef.current;
      if (!target) return;
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = target;
      const xPos = (clientX / offsetWidth - 0.5) * -30; // Intensity
      const yPos = (clientY / offsetHeight - 0.5) * -30;
      setBgPos({ x: xPos, y: yPos });
    };

    const handleTouchMove = (e: TouchEvent) => {
        const target = heroRef.current;
        if (!target || e.touches.length === 0) return;
        const { clientX, clientY } = e.touches[0];
        const { offsetWidth, offsetHeight } = target;
        const xPos = (clientX / offsetWidth - 0.5) * -30;
        const yPos = (clientY / offsetHeight - 0.5) * -30;
        setBgPos({ x: xPos, y: yPos });
    };

    const handleMouseLeave = () => {
      setBgPos({ x: 0, y: 0 });
    };

    const target = heroRef.current;
    if (target) {
        target.addEventListener('mousemove', handleMouseMove);
        target.addEventListener('mouseleave', handleMouseLeave);
        target.addEventListener('touchmove', handleTouchMove);
        target.addEventListener('touchend', handleMouseLeave);
    }
    
    return () => {
      clearTimeout(timer);
      if (target) {
          target.removeEventListener('mousemove', handleMouseMove);
          target.removeEventListener('mouseleave', handleMouseLeave);
          target.removeEventListener('touchmove', handleTouchMove);
          target.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/steampunk/1920/1080)`,
          transform: `translateX(${bgPos.x}px) translateY(${bgPos.y}px) scale(1.05)`,
          filter: 'sepia(0.6) brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/worn-dots.png)' }}></div>

      {/* Logo Animation */}
      <div 
        className="relative z-10 flex flex-col items-center text-center text-white p-4 cursor-pointer"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <GearIcon className={`absolute w-full h-full text-[#c0a062] transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-assemble-gear-1' : 'opacity-0'} ${isLogoHovered ? 'animate-rotate text-[#e0c082]' : ''}`} />
            <GearIcon className={`absolute w-2/3 h-2/3 text-[#8c7853] transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-assemble-gear-2' : 'opacity-0'} ${isLogoHovered ? 'animate-rotate-reverse text-[#a1885c]' : ''}`} />
            <div className={`transition-opacity duration-1000 ${isLoaded ? 'animate-assemble-text' : 'opacity-0'}`}>
                <h1 className="font-heading text-4xl md:text-6xl tracking-[0.2em]">VOYAGER</h1>
            </div>
        </div>
        <p className={`font-body text-lg md:text-xl mt-4 tracking-wider transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100 animate-pulse-glow' : 'opacity-0'}`}>
          Discover a World of Gears & Steam
        </p>
      </div>
    </section>
  );
};

export default Hero;
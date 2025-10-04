
import React, { useState, useRef, useEffect } from 'react';
import { RevolverCylinderIcon } from './icons';

const images = [
  { src: "https://picsum.photos/seed/western1/800/600", alt: "Steam Train" },
  { src: "https://picsum.photos/seed/western2/800/600", alt: "Vintage Machinery" },
  { src: "https://picsum.photos/seed/western3/800/600", alt: "Western Landscape" },
  { src: "https://picsum.photos/seed/western4/800/600", alt: "Clockwork mechanism" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState({ prev: false, next: false });
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);

    // Trigger animation
    setIsAnimating(prev => ({ ...prev, [direction]: true }));
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(prev => ({ ...prev, [direction]: false }));
    }, 500);
  };
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl p-8 md:p-12 bg-cover bg-center rounded-lg shadow-2xl" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/old-paper.png)' }}>
        <h2 className="font-heading text-5xl md:text-7xl text-center text-[#4a3f35] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>
          Wanted
        </h2>
        <p className="text-center font-body text-[#5a4f45] mb-8">- Glimpses of a Bygone Era -</p>
        
        <div className="relative overflow-hidden w-full aspect-video shadow-inner shadow-black/50 border-8 border-[#4a3f35]" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/wood-pattern.png)' }}>
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover filter sepia"
                />
                <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/subtle-grain.png)' }}></div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button onClick={() => handleNavClick('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#c0a062] hover:text-white transition-colors duration-300 drop-shadow-lg">
            <RevolverCylinderIcon className={`w-12 h-12 md:w-16 md:h-16 ${isAnimating.prev ? 'animate-spin-revolver' : ''}`} />
          </button>
          <button onClick={() => handleNavClick('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#c0a062] hover:text-white transition-colors duration-300 drop-shadow-lg">
            <RevolverCylinderIcon className={`w-12 h-12 md:w-16 md:h-16 ${isAnimating.next ? 'animate-spin-revolver' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


import React, { useState, useEffect } from 'react';

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-[120vh] w-full"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/blueprint.png)',
        backgroundAttachment: 'fixed'
      }}
    >
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10" 
            style={{ 
                backgroundImage: 'url(https://picsum.photos/seed/map/1920/1080)',
                transform: `translateY(${offsetY * 0.1}px)`
            }} 
        />
        <div 
            className="absolute inset-0 bg-contain bg-center opacity-20 mix-blend-screen"
            style={{ 
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/foggy-birds.png)',
                transform: `translateY(${offsetY * 0.3}px)`
            }} 
        />

        <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white p-8"
            style={{ transform: `translate(-50%, calc(-50% + ${offsetY * 0.2}px))` }}
        >
            <h2 className="font-heading text-4xl md:text-6xl mb-4" style={{textShadow: '2px 2px 8px #000'}}>
                Journey Through Layers
            </h2>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto" style={{textShadow: '1px 1px 4px #000'}}>
                Our parallax effect creates a sense of depth and immersion, drawing you deeper into the narrative. Each layer moves independently, revealing new perspectives as you explore the digital landscape we've crafted.
            </p>
        </div>
    </section>
  );
};

export default Parallax;

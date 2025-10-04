
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Cards from './components/Cards';
import Parallax from './components/Parallax';

function App() {
  return (
    <div className="bg-[#1a1a1a] text-[#c5c5c5] font-body selection:bg-[#c0a062] selection:text-[#1a1a1a]">
      <Header />
      <main>
        <Hero />
        <div style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/worn-dots.png)'}} className="bg-black/30">
          <Gallery />
          <Cards />
        </div>
        <Parallax />
      </main>
      <footer className="text-center p-8 bg-black/50" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/brushed-metal.png)' }}>
        <p className="font-heading tracking-widest">&copy; 2024 Steampunk Voyager. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;


import React from 'react';
import { MonocleIcon, TelegraphIcon, TopHatIcon } from './icons';

const cardData = [
  {
    icon: <MonocleIcon className="w-16 h-16 mb-4 text-[#c0a062]" />,
    title: "Meticulous Design",
    description: "Every cog and gear is placed with precision, ensuring a seamless and immersive digital experience."
  },
  {
    icon: <TelegraphIcon className="w-16 h-16 mb-4 text-[#c0a062]" />,
    title: "Modern Technology",
    description: "We harness contemporary web technologies, dressing them in vintage attire for performance that feels timeless."
  },
  {
    icon: <TopHatIcon className="w-16 h-16 mb-4 text-[#c0a062]" />,
    title: "Elegant Execution",
    description: "A touch of class in every line of code, delivering a sophisticated and engaging user journey."
  }
];

const Cards = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <div 
              key={index}
              className="group p-8 flex flex-col items-center text-center rounded-md border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
              style={{ 
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/old-paper.png)', 
                boxShadow: '4px 4px 0px 0px #c0a062aa, 8px 8px 0px 0px #8c785388, 12px 12px 0px 0px #4a3f3566' 
              }}
            >
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
                {card.icon}
              </div>
              <h3 className="font-heading text-2xl text-[#4a3f35] my-4">{card.title}</h3>
              <p className="font-body text-[#5a4f45] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;

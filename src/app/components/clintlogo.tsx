"use client"
import React, { useState, useRef } from 'react';

const ClientLogoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Logo data with actual image paths
  const logos = [
    { id: 1, name: 'Logipsum', src: '/images/Logo1.png' },
    { id: 2, name: 'LUHU', src: '/images/Logo2.png' },
    { id: 3, name: 'Leningrad', src: '/images/Logo3.png' },
    { id: 4, name: 'LOGO', src: '/images/Logo4.png' },
    { id: 5, name: 'IPSUM', src: '/images/Logo5.png' },
    { id: 6, name: 'Logipsum', src: '/images/Logo6.png' },
    { id: 7, name: 'Logipsum', src: '/images/Logo7.png' },
    { id: 8, name: 'Logipsum', src: '/images/Logo8.png' },
    { id: 9, name: 'Logipsum', src: '/images/Logo9.png' },
    { id: 10, name: 'Logipsum', src: '/images/Logo1.png' },
    { id: 11, name: 'Logipsum', src: '/images/Logo2.png' },
    { id: 12, name: 'Logipsum', src: '/images/Logo3.png' },
    { id: 13, name: 'Logipsum', src: '/images/Logo4.png' },
    { id: 14, name: 'Logipsum', src: '/images/Logo5.png' },
    { id: 15, name: 'Logipsum', src: '/images/Logo6.png' },
    { id: 16, name: 'Logipsum', src: '/images/Logo7.png' },
    { id: 17, name: 'Logipsum', src: '/images/Logo8.png' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const handleLogoHover = (index: number) => {
    setHoveredLogoIndex(index);
    setIsHovered(true);
  };

  const handleLogoLeave = () => {
    setHoveredLogoIndex(null);
    setIsHovered(false);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white py-10 overflow-hidden relative">
      {/* Top horizontal line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
      
      {/* Left scroll button */}
      {/* <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}

      {/* Right scroll button */}
      {/* <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
      
      <div className="relative px-16">
        {/* Moving logos container */}
        <div 
          ref={scrollContainerRef}
          className={`flex overflow-x-auto scrollbar-hide ${isHovered ? 'animate-scroll-paused' : 'animate-scroll'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className={`flex-shrink-0 mx-8 flex items-center justify-center transition-transform duration-300 ${
                hoveredLogoIndex === index ? 'scale-110' : 'scale-100'
              }`}
              style={{ minWidth: '150px' }}
              onMouseEnter={() => handleLogoHover(index)}
              onMouseLeave={handleLogoLeave}
            >
              {/* Actual logo image */}
              <img 
                src={logo.src} 
                alt={logo.name}
                className="w-32 h-16 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-paused {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ClientLogoSection;
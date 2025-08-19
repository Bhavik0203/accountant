"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronUp, Plus } from 'lucide-react';
import logo from '../../../public/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'PRODUCTS', hasPlus: true },
    { name: 'SOLUTIONS', hasPlus: true },
    { name: 'RESOURCES', hasPlus: true },
    { name: 'SERVICES', hasPlus: false },
  ];

  return (
    <>
      {/* Original top header - hidden when scrolled */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src={logo} 
                alt="Accountant Tech Lab Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                About Us
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#products" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Products
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#solutions" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Solutions
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#features" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Features
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Contact Us
              </a>
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
                Book A Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  About Us
                </a>
                <a
                  href="#products"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Products
                </a>
                <a
                  href="#solutions"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Solutions
                </a>
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Features
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </a>
                <div className="pt-4">
                  <button className="w-full border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
                    Book A Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Bottom navigation bar - appears on scroll */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className=" max-w-2xl bg-black/20 backdrop-blur-lg rounded-lg mx-auto mb-4 shadow-lg">
          <div className="flex items-center justify-center space-x-1 p-2">
            {/* Up arrow button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white hover:bg-gray-600 hover:text-white text-[#303030] p-2 rounded-md transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            {/* Navigation items */}
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <button className="bg-white hover:bg-gray-600 hover:text-white text-[#303030] px-3 py-2 rounded-md transition-colors font-mono text-sm flex items-center space-x-1">
                  <span>{item.name}</span>
                  {item.hasPlus && <Plus className="h-3 w-3 text-white" />}
                </button>
                {index < navigationItems.length - 1 && (
                  <div className="w-px h-6 bg-gray-600"></div>
                )}
              </React.Fragment>
            ))}

            {/* CTA Button */}
            <button className="border-2 border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md transition-colors font-mono text-sm font-medium">
              BOOK A MEETING
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
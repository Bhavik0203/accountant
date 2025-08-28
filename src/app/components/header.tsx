"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronUp, Plus, Users, FileText, TrendingUp, Settings, Users2, Hexagon, Grid, BarChart3 } from 'lucide-react';
import logo from '../../../public/images/logo.png';
import ciIcon from '../../../public/images/Ci.png';
import aiIcon from '../../../public/images/ai.png';
import fiIcon from '../../../public/images/Fi.png';
import ci1Icon from '../../../public/images/ci1.png';
import Link from 'next/link';

// RotatingText component for character-by-character rotation animation
const RotatingText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
  return (
    <span className="inline-flex">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block ${
            isHovered 
              ? 'character-rotate' 
              : ''
          }`}
          style={{
            animationDelay: isHovered ? `${index * 50}ms` : '0ms',
            animationDuration: '0.6s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
    {
      name:"ABOUT US",
      link:""
    },
    { 
      name: 'PRODUCTS', 
      link: "",
      hasPlus: true,
      dropdown: {
        title: "Accounting & Audit Suite",
        subtitle: "Comprehensive financial management and compliance solutions",
        
        features: [
          {
            icon: <Image src={ciIcon} alt="Compliance iNBOX" width={32} height={32} className="object-contain" />,
            title: "Compliance iNBOX",
            link: "/compliance-inbox",
            color: "blue"
          },
          {
            icon: <Image src={aiIcon} alt="Analytics iNBOX" width={32} height={32} className="object-contain" />,
            title: "Analytics iNBOX",
            link: "/analytics-inbox",
            color: "green"
          },
          {
            icon: <Image src={fiIcon} alt="Financial iNBOX" width={32} height={32} className="object-contain" />,
            title: "Financial iNBOX",
            link: "/financial-inbox",
            color: "purple"
          },
          {
              icon: <Image src={ciIcon} alt="Audit Flow iNBOX" width={32} height={32} className="object-contain" />,
              title: "Audit Flow iNBOX",
              link: "/audit-flow-inbox",
              color: "orange"
            }
        ]
      }
    },
    // { 
    //   name: 'SOLUTIONS', 
    //   hasPlus: true,
    //   dropdown: {
    //     title: "Enterprise Solutions",
    //     subtitle: "Comprehensive business solutions",
        
    //     features: [
    //       {
    //         icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Cloud Infrastructure",
    //         color: "blue"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Security & Compliance",
    //         color: "green"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Data Analytics",
    //         color: "purple"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "API Management",
    //         color: "orange"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Integration Hub",
    //         subtitle: "Connect all your systems",
    //         color: "indigo",
    //         large: true
    //       }
    //     ]
    //   }
    // },
    // { 
    //   name: 'RESOURCES', 
    //   hasPlus: true,
    //   dropdown: {
    //     title: "Knowledge Center",
    //     subtitle: "Everything you need to succeed",
        
    //     features: [
    //       {
    //         icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Documentation",
    //         color: "blue"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Video Tutorials",
    //         color: "green"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Webinars",
    //         color: "purple"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Case Studies",
    //         color: "orange"
    //       },
    //       {
    //         icon: <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
    //           <div className="w-4 h-4 bg-white rounded-sm"></div>
    //         </div>,
    //         title: "Community Forum",
    //         subtitle: "Connect with experts",
    //         color: "indigo",
    //         large: true
    //       }
    //     ]
    //   }
    // },
    { 
      name: 'SERVICES', 
      link: "/services",
      hasPlus: true,
      // dropdown: {
      //   title: "Professional Services",
      //   subtitle: "Expert support and consulting",
       
      //   features: [
      //     {
      //       icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      //         <div className="w-4 h-4 bg-white rounded-sm"></div>
      //       </div>,
      //       title: "Implementation Support",
      //       color: "blue"
      //     },
      //     {
      //       icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
      //         <div className="w-4 h-4 bg-white rounded-sm"></div>
      //       </div>,
      //       title: "Training & Workshops",
      //       color: "green"
      //     },
      //     {
      //       icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
      //         <div className="w-4 h-4 bg-white rounded-sm"></div>
      //       </div>,
      //       title: "24/7 Support",
      //       color: "purple"
      //     },
      //     {
      //       icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
      //         <div className="w-4 h-4 bg-white rounded-sm"></div>
      //       </div>,
      //       title: "Custom Development",
      //       color: "orange"
      //     },
      //     {
      //       icon: <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
      //         <div className="w-4 h-4 bg-white rounded-sm"></div>
      //       </div>,
      //       title: "Strategic Consulting",
      //       subtitle: "Expert guidance for your business",
      //       color: "indigo",
      //       large: true
      //     }
      //   ]
      // }
    },
    {
      name:"CONTACT US",
      link:""
    }
  ];

  const DropdownContent = ({ item, isBottomNav = false }: { item: any; isBottomNav?: boolean }) => {
    if (!item.dropdown) return null;

    return (
      <div 
        className={`absolute ${isBottomNav ? 'bottom-full mb-2 ' : 'top-full mt-2'} left-0 right-0 w-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 p-6 z-50`}
        onMouseEnter={() => setHoveredItem(item.name)}
        onMouseLeave={() => setHoveredItem(null)}
      >
         <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.dropdown.title}</h3>
              <p className="text-gray-400 text-sm">{item.dropdown.subtitle}</p>
            </div>
        <div className=" gap-6 mt-4">
          {/* Left Section - Title and Metrics */}
          
          {/* Right Section - Features Grid */}
                      <div className="grid grid-cols-4 gap-3">
              {item.dropdown.features.map((feature: any, index: number) => (
                feature.link ? (
                  <Link key={index} href={feature.link}>
                    <div 
                    className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {feature.icon}
                      <div>
                        <div className="text-white font-medium text-sm">{feature.title}</div>
                      </div>
                    </div>
                  </div>
                  </Link>
                ) : (
                  <div 
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {feature.icon}
                      <div>
                        <div className="text-white font-medium text-sm">{feature.title}</div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Original top header - hidden when scrolled */}
      <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
                href="/" className="flex items-center cursor-pointer">
              <Image 
                src={logo} 
                alt="Accountant Tech Labs Logo" 
                width={120} 
                height={46} 
                className="h-14 w-auto" 
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0 relative">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link href={item.link}>
                    <button className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium flex items-center space-x-1">
                      <RotatingText text={item.name} isHovered={hoveredItem === item.name} />
                      {item.hasPlus && <Plus className="h-3 w-3" />}
                    </button>
                    </Link>
                  </div>
                  {index < navigationItems.length - 1 && (
                    <div className="w-px h-6 bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
              
              {/* Centralized Dropdown */}
              {hoveredItem && navigationItems.find(item => item.name === hoveredItem)?.dropdown && (
                <DropdownContent 
                  item={navigationItems.find(item => item.name === hoveredItem)!} 
                  isBottomNav={false} 
                />
              )}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="border-2 cursor-pointer border-blue-900 text-blue-900 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
                BOOK A MEETING
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 cursor-pointer"
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
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link href={item.link}>
                    <button
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center justify-between"
                      onClick={closeMobileMenu}
                    >
                      <span>{item.name}</span>
                      {item.hasPlus && <Plus className="h-3 w-3" />}
                    </button>
                    </Link>
                  </div>
                ))}
                <div className="pt-4">
                  <button className="w-full border-2 cursor-pointer border-blue-900 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
                    BOOK A MEETING
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
        <div className="max-w-2xl bg-black/20 backdrop-blur-lg rounded-lg mx-auto mb-4 shadow-lg relative">
          <div className="flex items-center justify-center space-x-1 p-2">
            {/* Up arrow button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white cursor-pointer hover:bg-gray-600 hover:text-white text-[#303030] p-2 rounded-md transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            {/* Navigation items */}
            <div className="flex items-center justify-center space-x-1">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button className="bg-white cursor-pointer hover:bg-gray-600 hover:text-white text-[#303030] px-3 py-2 rounded-md transition-colors font-mono text-sm flex items-center space-x-1">
                      <span>{item.name}</span>
                      {item.hasPlus && <Plus className="h-3 w-3 text-white" />}
                    </button>
                  </div>
                  {index < navigationItems.length - 1 && (
                    <div className="w-px h-6 bg-gray-600"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTA Button */}
            <button className="border-2 cursor-pointer  border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md transition-colors font-mono text-sm font-medium">
              BOOK A MEETING
            </button>
          </div>
          
          {/* Centralized Dropdown - positioned relative to the main card */}
          {hoveredItem && navigationItems.find(item => item.name === hoveredItem)?.dropdown && (
            <DropdownContent 
              item={navigationItems.find(item => item.name === hoveredItem)!} 
              isBottomNav={true} 
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
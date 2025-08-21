"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronUp, Plus, Users, FileText, TrendingUp, Settings, Users2, Hexagon, Grid, BarChart3 } from 'lucide-react';
import logo from '../../../public/images/logo.png';

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
      name: 'PRODUCTS', 
      hasPlus: true,
      dropdown: {
        title: "Effortel Mobile Suite (EMS)",
        subtitle: "The command center for your MVNO",
        metrics: [
          {
            icon: <Users className="h-5 w-5 text-green-400" />,
            value: "120 547",
            label: "TOTAL USERS",
            change: "+3.2%",
            trend: "up",
            color: "green"
          },
          {
            icon: <FileText className="h-5 w-5 text-blue-400" />,
            value: "112 355",
            label: "ONGOING BILLING",
            change: "+2.2%",
            trend: "up",
            color: "blue"
          }
        ],
        features: [
          {
            icon: <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Real-Time Service Management",
            color: "pink"
          },
          {
            icon: <Settings className="h-5 w-5 text-green-400" />,
            title: "Third-Party Integration",
            color: "green"
          },
          {
            icon: <Users2 className="h-5 w-5 text-blue-400" />,
            title: "Customer Management",
            color: "blue"
          },
          {
            icon: <Hexagon className="h-5 w-5 text-purple-400" />,
            title: "Product & Resource Management",
            color: "purple"
          },
          {
            icon: <Grid className="h-5 w-5 text-blue-400" />,
            title: "Effortel Spotlight",
            subtitle: "Real-Time Analytics and Insights",
            color: "blue",
            large: true
          }
        ]
      }
    },
    { 
      name: 'SOLUTIONS', 
      hasPlus: true,
      dropdown: {
        title: "Enterprise Solutions",
        subtitle: "Comprehensive business solutions",
        metrics: [
          {
            icon: <TrendingUp className="h-5 w-5 text-green-400" />,
            value: "98.5%",
            label: "UPTIME",
            change: "+0.5%",
            trend: "up",
            color: "green"
          },
          {
            icon: <BarChart3 className="h-5 w-5 text-blue-400" />,
            value: "45 892",
            label: "ACTIVE SESSIONS",
            change: "+12.3%",
            trend: "up",
            color: "blue"
          }
        ],
        features: [
          {
            icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Cloud Infrastructure",
            color: "blue"
          },
          {
            icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Security & Compliance",
            color: "green"
          },
          {
            icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Data Analytics",
            color: "purple"
          },
          {
            icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "API Management",
            color: "orange"
          },
          {
            icon: <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Integration Hub",
            subtitle: "Connect all your systems",
            color: "indigo",
            large: true
          }
        ]
      }
    },
    { 
      name: 'RESOURCES', 
      hasPlus: true,
      dropdown: {
        title: "Knowledge Center",
        subtitle: "Everything you need to succeed",
        metrics: [
          {
            icon: <FileText className="h-5 w-5 text-blue-400" />,
            value: "2,847",
            label: "ARTICLES",
            change: "+156",
            trend: "up",
            color: "blue"
          },
          {
            icon: <Users className="h-5 w-5 text-green-400" />,
            value: "89.2%",
            label: "SATISFACTION",
            change: "+2.1%",
            trend: "up",
            color: "green"
          }
        ],
        features: [
          {
            icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Documentation",
            color: "blue"
          },
          {
            icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Video Tutorials",
            color: "green"
          },
          {
            icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Webinars",
            color: "purple"
          },
          {
            icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Case Studies",
            color: "orange"
          },
          {
            icon: <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>,
            title: "Community Forum",
            subtitle: "Connect with experts",
            color: "indigo",
            large: true
          }
        ]
      }
    },
    { 
      name: 'SERVICES', 
      hasPlus: false 
    },
  ];

  const DropdownContent = ({ item }: { item: any }) => {
    if (!item.dropdown) return null;

    return (
      <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900 rounded-xl shadow-2xl border border-gray-700 p-6 z-50">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Section - Title and Metrics */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.dropdown.title}</h3>
              <p className="text-gray-400 text-sm">{item.dropdown.subtitle}</p>
            </div>
            
            {/* Metrics Cards */}
            <div className="space-y-3">
              {item.dropdown.metrics.map((metric: any, index: number) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    {metric.icon}
                    <div className="flex items-center space-x-1">
                      <span className={`text-${metric.color}-400 text-sm font-medium`}>
                        {metric.change}
                      </span>
                      <div className={`w-2 h-2 bg-${metric.color}-400 rounded-full`}></div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-gray-400 text-xs">{metric.label}</div>
                  {metric.label === "ONGOING BILLING" && (
                    <div className="mt-2">
                      <div className="text-gray-400 text-xs mb-1">HEAP MEMORY</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '63%' }}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {item.dropdown.features.map((feature: any, index: number) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors ${
                  feature.large ? 'col-span-2' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  {feature.icon}
                  <div>
                    <div className="text-white font-medium text-sm">{feature.title}</div>
                    {feature.subtitle && (
                      <div className="text-gray-400 text-xs mt-1">{feature.subtitle}</div>
                    )}
                  </div>
                </div>
              </div>
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
            <div className="flex items-center cursor-pointer">
              <Image 
                src={logo} 
                alt="Accountant Tech Lab Logo" 
                width={120} 
                height={46} 
                className="h-14 w-auto" 
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              <a 
                href="about" 
                className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                About Us
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="products" 
                className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Products
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="solutions" 
                className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Solutions
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#features" 
                className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Features
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a 
                href="#contact" 
                className="text-gray-600 cursor-pointer hover:text-blue-600 transition-colors px-4 py-2 font-medium"
              >
                Contact Us
              </a>
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="border-2 cursor-pointer border-blue-900 text-blue-900 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
                Book A Demo
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
                  <button className="w-full border-2 cursor-pointer border-blue-900 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-200 font-medium">
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
              className="bg-white cursor-pointer hover:bg-gray-600 hover:text-white text-[#303030] p-2 rounded-md transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            {/* Navigation items */}
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
                  
                  {/* Dropdown */}
                  {hoveredItem === item.name && item.dropdown && (
                    <DropdownContent item={item} />
                  )}
                </div>
                {index < navigationItems.length - 1 && (
                  <div className="w-px h-6 bg-gray-600"></div>
                )}
              </React.Fragment>
            ))}

            {/* CTA Button */}
            <button className="border-2 cursor-pointer  border-blue-900 bg-white text-blue-900 px-4 py-2 rounded-md transition-colors font-mono text-sm font-medium">
              BOOK A MEETING
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
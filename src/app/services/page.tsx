"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/header';

export default function ServicesPage() {
  const [isBlurred, setIsBlurred] = useState(false);
  const contentSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if content section is visible for blur effect
      if (contentSectionRef.current) {
        const rect = contentSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        // Calculate when user has scrolled 2/3 through the section
        const scrollProgress = (windowHeight - rect.top) / (sectionHeight + windowHeight);
        
        if (scrollProgress >= 0.67) {
          setIsBlurred(true);
        } else {
          setIsBlurred(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex justify-center"
        style={{ backgroundImage: `url('/images/service.png')` }}
      >
       
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-0 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold my-6 text-white">
              <span className="text-[#00000080]">Fortify Your Business.</span>
             
              <span className="text-[#000000]"> Conquer Cyber Threats</span>
            </h1>
            <p className="text-lg md:text-xl text-[#000000] leading-relaxed mb-4 max-w-4xl mx-auto">
              Protect your digital assets and infrastructure with Accountant Tech Labs' comprehensive cybersecurity management services. We provide enterprise-grade protection to safeguard your organization against evolving threats.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Request A Cybersecurity Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div 
        ref={contentSectionRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-500 ${
          isBlurred ? 'blur-sm' : 'blur-none'
        }`}
      >
        {/* Problem Statement Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Is Your Business Truly Protected?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
            In today's digital landscape, cyber threats are constantly evolving. Without a comprehensive and proactive defense, your business is vulnerable to data breaches, system downtime, and reputational damage. Protecting your organization requires more than just antivirus software; it demands a multi-layered, systematic approach to stay ahead of the curve.
            </p>
          </div>
          
          {/* Illustration */}
          <div className="w-full lg:w-80">
            <Image 
              src="/images/Questions-pana.png"
              alt="Compliance Challenges"
              width={320}
              height={320}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Solution Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8 mb-16">
          {/* Solution Card */}
          <div className="w-full lg:w-80">
            <Image 
              src="/images/thinks.png"
              alt="Compliance Solution"
              width={320}
              height={320}
              className="w-full h-auto rounded-lg "
            />
          </div>

          {/* Solution Description */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Compliance Inbox Solution
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Compliance Inbox transforms compliance management through intelligent automation, 
              centralized workflows, and systematic monitoring across all regulatory frameworks. Our 
              platform eliminates manual compliance tasks while ensuring consistent adherence to 
              regulatory requirements, enabling firms to focus on strategic growth and client service 
              excellence.
            </p>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h4>
            <p className="text-gray-600">
              Comprehensive evaluation of your cybersecurity posture and compliance readiness.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Compliance Monitoring</h4>
            <p className="text-gray-600">
              Real-time tracking and automated reporting for regulatory compliance requirements.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Security Training</h4>
            <p className="text-gray-600">
              Employee cybersecurity awareness and best practices training programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
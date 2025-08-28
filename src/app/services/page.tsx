"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/header';
import ServicesScrollBar from '../components/legacyScrollBar';
import bg2 from '../../../public/images/bg1.png'
import ServicesSuccessStory from '../components/servicesuccessstory';
import group from '../../../public/group.png'
import ContactOurTeam from '../components/contactourteam';
import Footer from '../components/footer';


export default function ServicesPage() {
  const [isBlurred, setIsBlurred] = useState(false);
  const contentSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if content section is visible for blur effect
      if (contentSectionRef.current) {
        const rect = contentSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Apply blur when the bottom of the content section is near the top of viewport
        // This creates a fade-out effect at the end of the section
        const sectionBottom = rect.bottom;
        const blurThreshold = windowHeight * 0.2; // Start blur when 20% of viewport height remains
        
        if (sectionBottom <= blurThreshold) {
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
              Protect your digital assets and infrastructure with Accountant Tech Labss' comprehensive cybersecurity management services. We provide enterprise-grade protection to safeguard your organization against evolving threats.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Request A Cybersecurity Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${bg2.src})` }}>
    
      <div 
        ref={contentSectionRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 ${
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

        
        
      </div>
      </div>
      {/* -------------------------------- */}
      <section id='events'>
        <ServicesScrollBar/>
     </section>
     <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${group.src})` }}>
     <ServicesSuccessStory/>
     <ContactOurTeam/>
     <div className=" py-20 px-8">
       <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
         Secure Your Future Today
         </h2>
         <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
         Ready to protect your organization's digital assets from evolving cyber threats? Our team is ready to build your defense.  </p>
         <button className="bg-white text-blue-600 border border-blue-300 rounded-full px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
         Request a Cybersecurity Consultation
         </button>
       </div>
     </div>
      <div>
        <Footer/>
      </div>
     </div>
    </div>
  );
}
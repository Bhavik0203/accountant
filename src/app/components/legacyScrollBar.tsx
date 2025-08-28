"use client"
import React from 'react';
import Image from 'next/image';
import blogimg2 from "../assets/images/th.jpg"

import { useState, useEffect, useRef } from 'react';
import bg2 from '../../../public/images/bg2.png'
// import banner2 from "../images/bg4.png";
import { Timeline } from "../components/ui/timeline";
import bgimg from '../../../public/Group1.png'
import thinks from '../../../public/images/service1.png'
import questionsG from '../../../public/images/service2.png'
import questionsPana from '../../../public/images/service3.png'
import undraw from '../../../public/images/service4.png'
import teamImage from '../../../public/images/main-black.png'
import ServicesSuccessStory from './servicesuccessstory';

export default function ServicesScrollBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  const data = [
    {
       title: <Image src={thinks} alt="Proactive Security and Monitoring" width={300} height={250} className="block" />,
       content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
            <strong>Proactive Security and Monitoring</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            We provide continuous threat detection and real-time security event analysis.</li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our proactive incident response capabilities ensure robust defense mechanisms are maintained across your entire IT environment.
            
            </li>
           
           
          </ul>
         
         
        </div>
      ),
    },
    {
      title: <Image src={questionsG} alt="Advanced Antivirus and Anti-Malware Management" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Advanced Antivirus and Anti-Malware Management</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            Our program implements multi-layered protection strategies using advanced threat detection technologies.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> We use automated response systems to identify, quarantine, and eliminate malicious software before it can compromise your systems. 
              </li>
              <li className="text-[15px] md:text-[16px] text-gray-800"> maintain current threat intelligence databases and deploy signature updates across all endpoints to protect against known and emerging threats.
            </li>
           
           
          </ul>
        </div>
      ),
    },
    {
      title: <Image src={questionsPana} alt="Security Updates and Patch Management" width={300} height={250} className="block" />,
      content: (
        <div className="max-"> 
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
            <strong>Systematic Security Patch Management</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            We ensure all critical security updates are evaluated, tested, and deployed in a timely manner. 
          </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our process addresses vulnerabilities across operating systems, applications, and network infrastructure components.
               </li>
              <li className="text-[15px] md:text-[16px] text-gray-800">  We use comprehensive testing protocols to minimize operational disruption while maintaining security integrity. </li>
           
           
          </ul>
        </div>
      ),
    },
    {
      title: <Image src={undraw} alt="Advanced Firewall Management" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Advanced Firewall Management</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our services include the configuration, monitoring, and maintenance of your network security perimeters. </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> We implement rule-based access controls and intrusion detection and prevention systems. </li>
           
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our continuous monitoring protocols establish secure network boundaries to prevent unauthorized access while enabling legitimate data flow.  </li>
             
          </ul>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-white  p-8 shadow-[0_-35px_60px_-12px_rgba(0,0,0,0.20)] " style={{ borderRadius: '160px 160px 0 0' }}>
    
             {/* Background Overlay */}
       {/* <div className="absolute inset-0 bg-[#576F9F]/10 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${bgimg.src})` }} 
       ></div> */}
      
      {/* Content */}
      <div 
          className={`text-center mb-6  transition-all duration-1000 ease-out transform `}
        >
          <h2 className="text-4xl md:text-5xl font-bold my-6 text-gray-800">
             <span className="text-gray-500">Our </span>Services
          </h2>
          <p className=" text-[17px] font-normal text-neutral-800 md:text-[30px] ">
          Your Complete Cybersecurity Defense</p>
        </div>
      <div className="relative z-10">

  <div className="lg:col-span-2 relative w-full overflow-clip text-gray-900">
      <Timeline data={data} />
    </div>
  {/* Bottom Section */}
  
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-500 font-normal">Your Trusted Partner in </span>
            <span className="text-black">Cybersecurity</span>
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            We go beyond simple defense, providing a holistic and professional approach to managing your digital security.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Services */}
          <div className="space-y-8">
            {/* Service 1: Holistic Protection */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/Black.png" 
                  alt="Holistic Protection" 
                  width={60} 
                  height={60} 
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  Holistic Protection
                </h3>
                <p className="text-black text-sm md:text-base">
                  We offer a full suite of comprehensive cybersecurity services, including security and monitoring, antivirus, patch, and firewall management
                </p>
              </div>
            </div>

            {/* Service 2: Proactive & Always On */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/Black2.png" 
                  alt="Proactive & Always On" 
                  width={60} 
                  height={60} 
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  Proactive & Always On
                </h3>
                <p className="text-black text-sm md:text-base">
                  Our enterprise-grade security services provide continuous threat detection and real-time analysis to keep you protected 24/7
                </p>
              </div>
            </div>

            {/* Service 3: Expert Management */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/Black3.png" 
                  alt="Expert Management" 
                  width={60} 
                  height={60} 
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  Expert Management
                </h3>
                <p className="text-black text-sm md:text-base">
                  We handle the evaluation, testing, and deployment of critical security updates and manage network configurations to ensure security integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Main Illustration */}
          <div className="relative">
            <Image 
              src={teamImage} 
              alt="Cybersecurity Team" 
              width={300} 
              height={300} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
        
      
    </div>
  );
}

"use client"
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import blogimg2 from "../assets/images/th.jpg"
// import banner2 from "../images/bg4.png";
import { Timeline } from "../components/ui/timeline";
import bgimg from '../../../public/Group1.png'
import thinks from '../../../public/images/thinks.png'
import questionsG from '../../../public/images/questions_g.png'
import questionsPana from '../../../public/images/Questions-pana.png'
import undraw from '../../../public/images/undraw.png'

export default function ServicesScrollBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = [
    {
       title: <Image src={thinks} alt="Proactive Security and Monitoring" width={300} height={250} className="block" />,
       content: (
        <div >
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
        <div className="max-w-ml"> 
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
    <div 
    ref={sectionRef}
    className="px-4 py-10 relative overflow-hidden shadow-[0_-35px_60px_-12px_rgba(0,0,0,0.20)] bg-white" 
    style={{ borderRadius: '160px 160px 0 0' }}
  >
             {/* Background Overlay */}
             <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-16 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold my-6 text-gray-800">
             <span className="text-gray-500">Our </span>Services
          </h2>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
          Your Complete Cybersecurity Defense</p>
        </div>
      
      {/* Content */}
      <div className="relative z-10">

  <div className="lg:col-span-2 relative w-full overflow-clip text-gray-900">
      <Timeline data={data} />
    </div>
  {/* Bottom Section */}
  
      </div>
    </div>
  );
}

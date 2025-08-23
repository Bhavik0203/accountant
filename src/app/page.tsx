"use client";

import Image from "next/image";
import { ChevronDown, Building2, BarChart3, Shield, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Header from "./components/header";

import bgImage from '../../public/images/main-banner.png';
import bg1 from '../../public/images/bg1.png';
import fileIcon from '../../public/images/Ci.png';
import globeIcon from '../../public/images/ai.png';
import windowIcon from '../../public/images/Fi.png';
import nextIcon from '../../public/images/ai.png';
import secimage1 from '../../public/images/sec-image-1.jpg';
import FinancialSuiteLanding from "./components/financialsuitelanding";
import TestimonialSection from "./components/testimonials";

import ClientLogoSection from "./components/clintlogo";
import CounterSection from "./components/counter";
import VideoPlayer from "./components/video";
import bg3 from '../../public/Group2.png';
import bggg from '../../public/group.png';
import Footer from "./components/footer";


const services = [
  {
    id: 1,
    title: "Compliance iNBOX",
    icon: <Image src={fileIcon} alt="Compliance" width={62} height={62} />
  },
  {
    id: 2,
    title: "Analytics iNBOX", 
    icon: <Image src={globeIcon} alt="Analytics" width={62} height={62} />
  },
  {
    id: 3,
    title: "Financial iNBOX",
    icon: <Image src={windowIcon} alt="Financial" width={62} height={62} />
  },
  {
    id: 4,
    title: "Audit Flow iNBOX",
    icon: <Image src={nextIcon} alt="Audit Flow" width={62} height={62} />
  }
];

const features = [
  {
    icon: <Building2 className="w-16 h-16 text-white" />,
    title: "Unified Platform",
    description: "All essential tools in one powerful ecosystem.",
    position: "top-right"
  },
  {
    icon: <BarChart3 className="w-16 h-16 text-white" />,
    title: "Built for Finance Professionals",
    description: "Tailored for Chartered Accountants, Company Secretaries & Public Accountants.",
    position: "middle-left"
  },
  {
    icon: <Shield className="w-16 h-16 text-white" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade encryption and up-to-date regulatory compliance.",
    position: "bottom-right"
  },
  {
    icon: <TrendingUp className="w-16 h-16 text-white" />,
    title: "Scalable for All Firm Sizes",
    description: "Designed for solo CAs to multi-location accounting firms.",
    position: "bottom-left"
  }
];

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            console.log('Animation triggered for:', entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-slide-up-staggered');
    console.log('Found animated elements:', animatedElements.length);
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Also observe the specific refs for text and image
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" >
      <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage.src})` }}>
      {/* Header */}
    
   
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-[600px] py-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#303030]/50 leading-tight drop-shadow-md">
                Complete Software Suite
                <span className="text-[#303030] bg-clip-text text-4xl lg:text-5xl font-bold leading-tight"> for Chartered Accountants</span>
              </h1>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#303030]/50 leading-tight drop-shadow-md">
                and Finance Professionals
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg font-medium">
              All-in-one platform for compliance, audit, financial 
              management, and analytics.
            </p>
            
            <button className="bg-[#213AC8] text-white cursor-pointer px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0">
              Start Free Trial
            </button>
          </div>
          
          {/* Right Content - Hero Image */}
         
        </div>
      </main>
    </div>
    <div className="relative w-full">
      {/* Banner Background */}
      <div 
        className="relative h-30 bg-[#FAFAFA]"
       
      >
        {/* Services Container */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-blue-100 rounded-lg shadow-lg border border-black hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 p-1  bg-[#D6E0D7] rounded-lg group-hover:bg-[#D6E0D7] transition-colors duration-300 ">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-20 bg-[#FAFAFA]"></div>
    </div>

    {/* Features Section - Matching the Image Design */}
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg1.src})` }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto relative py-10">
      <div 
        ref={textRef}
        className="space-y-6 max-w-2xl animate-slide-up"
      >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#303030]/50 leading-tight">
                Why Choose <span className="text-[#303030]">Our Platform?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Designed exclusively for accounting and finance professionals, our platform brings every essential tool into a unified, secure, and scalable ecosystem. Whether you're managing audits, ensuring compliance, analyzing financial data, or streamlining invoicing, we provide the depth and flexibility your profession demands — all in one place.
              </p>
            </div>
            
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Heading, Description, and Person Image */}
          <div className="space-y-8 lg:col-span-1">
           
            {/* Person Image */}
            <div 
              ref={imageRef}
              className="relative animate-slide-up"
            >
              <div className="w-full h-100 pt-20">
             <Image src={secimage1} alt="image" width={1000} height={1000} />
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards in Staggered Layout */}
          <div 
            ref={cardsRef}
            className="relative lg:col-span-2 animate-slide-up animate-slide-up-fallback"
          >
            <div className="grid grid-cols-1 gap-8">
              
              {/* Top Right Card */}
              <div className="ml-auto w-full max-w-sm mt-[-30px] animate-slide-up-staggered animate-slide-up-staggered-fallback" style={{ animationDelay: '0.1s' }}>
                <div className="relative ml-6 cursor-pointer bg-blue-50 hover:bg-blue-100 rounded-2xl h-[166px] w-[360px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-[20px] font-bold text-gray-800 mb-2">
                      Unified Platform
                    </h3>
                    <p className="text-gray-600 text-[16px] font-dmsans leading-relaxed">
                      All essential tools in one powerful ecosystem.
                    </p>
                  </div>
                  <div className="absolute -bottom-6 right-4 animate-horizontal">
                    <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <img src="/images/i1.png" alt="Dashboard Icon" className="h-[80px] w-[80px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Left Card */}
              <div className="mr-auto w-full max-w-sm mt-[-30px] animate-slide-up-staggered animate-slide-up-staggered-fallback" style={{ animationDelay: '0.2s' }}>
                <div className="relative mr-6 cursor-pointer bg-blue-50 hover:bg-blue-100 rounded-2xl h-[166px] w-[360px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-[20px] font-bold text-gray-800 mb-2">
                     Built for Finance Professionals
                    </h3>
                    <p className="text-gray-600 text-[16px] font-dmsans leading-relaxed">
                    Tailored for Chartered Accountants, Company Secretaries & Public Accountants.
                    </p>
                  </div>
                  <div className="absolute -bottom-6 right-4 animate-horizontal">
                    <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <img src="/images/i2.png" alt="Dashboard Icon" className="h-[80px] w-[80px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="ml-auto w-full max-w-sm mt-[-30px] animate-slide-up-staggered animate-slide-up-staggered-fallback" style={{ animationDelay: '0.3s' }}>
                <div className="relative ml-6 cursor-pointer bg-blue-50 hover:bg-blue-100 rounded-2xl h-[166px] w-[360px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-[20px] font-bold text-gray-800 mb-2">
                   Secure & Compliant
                    </h3>
                    <p className="text-gray-600 text-[16px] font-dmsans leading-relaxed">
                    Enterprise-grade encryption and up-to-date regulatory compliance.
                    </p>
                  </div>
                  <div className="absolute -bottom-6 right-4 animate-horizontal">
                    <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <img src="/images/i3.png" alt="Dashboard Icon" className="h-[80px] w-[80px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Card */}
              <div className="mr-auto w-full max-w-sm mt-[-30px] animate-slide-up-staggered animate-slide-up-staggered-fallback" style={{ animationDelay: '0.4s' }}>
                <div className="relative mr-6 cursor-pointer bg-blue-50 hover:bg-blue-100 rounded-2xl h-[166px] w-[360px] shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-[20px] font-bold text-gray-800 mb-2">
                       Scalable for All Firm Sizes
                    </h3>
                    <p className="text-gray-600 text-[16px] font-dmsans leading-relaxed">
                    Designed for solo CAs to multi-location accounting firms.
                    </p>
                  </div>
                  <div className="absolute -bottom-6 right-4 animate-horizontal">
                    <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <img src="/images/i4.png" alt="Dashboard Icon" className="h-[80px] w-[80px]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <section className="">
      <FinancialSuiteLanding/>
    </section>
    <section className="bg-[#FAFAFA]">
      <TestimonialSection/>
    </section>
    <section >
      <ClientLogoSection/>
    </section>
    {/* <section >
      <CounterSection/>
    </section>
    <section className="py-16 bg-cover bg-center bg-no-repeat  " style={{ backgroundImage: `url(${bg3.src})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Watch Our Platform in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our comprehensive software suite transforms the way accounting professionals work
          </p>
        </div>
        <VideoPlayer />
      </div>
    </section> */}
    
    
    <section className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bggg.src})` }}>
      <CounterSection/>
     
      <div className="max-w-4xl py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        <div 
        ref={textRef}
        className="space-y-6 mb-16  animate-slide-up"
      >
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gray-400">See the</span>{" "}
            <span className="text-gray-800">Platform in Action</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch how our platform simplifies your workflow from compliance to invoicing — in under 2 minutes.
          </p>
          <div className="pt-4">
            <button className="bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
          </div>
        
      </div>
        <VideoPlayer />
      </div>
      <div>
        <Footer/>
      </div>
    </section>

    </div>
  );
}

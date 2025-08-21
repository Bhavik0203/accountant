'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  FileCheck, 
  TrendingUp, 
  Shield, 
  Clock, 
  BarChart3,
  CheckCircle,
  FileText,
  Activity
} from 'lucide-react';
import AnimatedBeamDemo from '../components/animated-beam-demo';
import bg2 from '../../../public/images/bg1.png';
import OurFeatures from '../components/ourfeatures';
import TestimonialSection from '../components/testimonials';
import HowItWorks from '../components/howitworks';

// Counter component for statistics
const AnimatedCounter = ({ target, suffix, duration = 2000 }: { target: number, suffix: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutCubic);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
      {formatNumber(count)}{suffix}
    </div>
  );
};

const ComplianceProductPage = () => {
  const iconNodes = [
    { id: 1, icon: FileCheck, position: { x: 15, y: 40 }, color: 'bg-blue-500' },
    { id: 2, icon: Shield, position: { x: 35, y: 25 }, color: 'bg-teal-500' },
    { id: 3, icon: TrendingUp, position: { x: 60, y: 20 }, color: 'bg-blue-600' },
    { id: 4, icon: BarChart3, position: { x: 80, y: 35 }, color: 'bg-blue-400' },
    { id: 5, icon: CheckCircle, position: { x: 25, y: 65 }, color: 'bg-teal-400' },
    { id: 6, icon: Clock, position: { x: 45, y: 75 }, color: 'bg-gray-500' },
    { id: 7, icon: FileText, position: { x: 75, y: 65 }, color: 'bg-blue-500' },
    { id: 8, icon: Activity, position: { x: 85, y: 50 }, color: 'bg-teal-500' }
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 1, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
    { from: 3, to: 7 },
    { from: 4, to: 8 }
  ];

  const getNodeById = (id: number) => iconNodes.find(node => node.id === id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compliance, Automated. Growth, Accelerated
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Transform compliance management from a burden to a business 
            advantage with Compliance Inbox. Automate 90% of your 
            compliance tasks and achieve 99.9% deadline accuracy.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Schedule Demo
          </button>
        </div>

        {/* <AnimatedBeamDemo/> */}

        {/* Network Visualization */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl max-w-3xl mx-auto p-8 relative overflow-hidden min-h-[300px]">
            {/* Background pattern */}
           
            <AnimatedBeamDemo/>
          </div>
        </div>
      </div>
      {/* Trust by the numbers Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Trust by the numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Statistic */}
            <div className="text-center">
              <AnimatedCounter target={1000} suffix="+" />
              <div className="text-lg text-gray-600">
                Hours Saved Annually
              </div>
            </div>
            
            {/* Second Statistic */}
            <div className="text-center">
              <AnimatedCounter target={99.9} suffix="%" />
              <div className="text-lg text-gray-600">
                Deadline Accuracy
              </div>
            </div>
            
            {/* Third Statistic */}
            <div className="text-center">
              <AnimatedCounter target={2000000} suffix=" +" />
              <div className="text-lg text-gray-600">
                Hours Saved Annually
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${bg2.src})` }}>
    
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex-1 pr-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Are you still buried in compliance paperwork?
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Accounting firms face increasingly complex regulatory requirements across 
              multiple jurisdictions, with manual compliance processes consuming 
              valuable resources and creating significant risk exposure. Traditional 
              compliance management involves scattered documentation, missed 
              deadlines, inconsistent processes, and extensive manual effort that diverts 
              focus from core business activities.
            </p>
          </div>
          
          {/* Illustration */}
          <div className="w-80">
            <Image 
              src="/images/questions_g.png"
              alt="Compliance Inbox"
              width={320}
              height={320}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Solution Section */}
        <div className="flex items-center space-x-12 ">
          {/* Solution Card */}
          <div className="w-80">
            <Image 
              src="/images/undraw.png"
              alt="Compliance Inbox"
              width={320}
              height={320}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Solution Description */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Compliance Inbox Solution
            </h2>
            <p className="text-gray-600 leading-relaxed">
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
    <OurFeatures/>
    <HowItWorks/>
    <TestimonialSection/>
    </div>
  );
};

export default ComplianceProductPage;
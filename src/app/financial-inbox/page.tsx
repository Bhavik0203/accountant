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
  Activity,
  Database,
  PieChart,
  Grid3X3,
  BarChart,
  Target,
  Zap,
  FileSpreadsheet,
  Layers,
  Edit3,
  MessageSquare,
  GitBranch,
  BookOpen
} from 'lucide-react';
import AnimatedBeamDemo from '../components/animated-beam-demo';
import bggg from '../../../public/group.png';
import bg2 from '../../../public/images/bg1.png';
import OurFeatures from '../components/ciourfeatures';
import TestimonialSection from '../components/testimonials';
import HowItWorks from '../components/cihowitworks';
import RegulatoryCompliance from '../components/regulatorycompliance';
import SuccessStory from '../components/successstory';
import Footer from '../components/footer';
import StoryCounter from '../components/storycounter';
import SecurityReliabilitySection from '../components/security';

// Counter component for statistics
const AnimatedCounter = ({ target, suffix, duration = 2000, shouldStart = false }: { target: number, suffix: string, duration?: number, shouldStart?: boolean }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldStart && !isVisible) {
      setIsVisible(true);
    }
  }, [shouldStart, isVisible]);

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

const FinancialInboxPage = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const networkSectionRef = useRef<HTMLDivElement>(null);
  const trustSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (networkSectionRef.current) {
        const rect = networkSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        // Calculate when user has scrolled 2/3 through the section
        const scrollProgress = (windowHeight - rect.top) / (sectionHeight + windowHeight);
        
        if (scrollProgress >= 0.67) { // 2/3 = 0.67
          setIsBlurred(true);
        } else {
          setIsBlurred(false);
        }
      }

      // Check if trust section is visible to start counters
      if (trustSectionRef.current && !countersStarted) {
        const rect = trustSectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) { // When section is 80% visible
          setCountersStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersStarted]);

  const iconNodes = [
    { id: 1, icon: FileSpreadsheet, position: { x: 15, y: 40 }, color: 'bg-blue-500' },
    { id: 2, icon: Database, position: { x: 35, y: 25 }, color: 'bg-teal-500' },
    { id: 3, icon: TrendingUp, position: { x: 60, y: 20 }, color: 'bg-blue-600' },
    { id: 4, icon: BarChart3, position: { x: 80, y: 35 }, color: 'bg-blue-400' },
    { id: 5, icon: Layers, position: { x: 25, y: 65 }, color: 'bg-teal-400' },
    { id: 6, icon: Edit3, position: { x: 45, y: 75 }, color: 'bg-gray-500' },
    { id: 7, icon: MessageSquare, position: { x: 75, y: 65 }, color: 'bg-blue-500' },
    { id: 8, icon: BookOpen, position: { x: 85, y: 50 }, color: 'bg-teal-500' }
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
      <div className="max-w-6xl mx-auto px-2 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Financial Statement Inbox: Streamline Audit Excellence
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive financial statement preparation platform designed specifically for financial audit professionals and accounting firms. 
            Built with the complexities of modern auditing in mind, ensuring compliance with GAAP, IFRS, and regulatory requirements.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Schedule Demo
          </button>
        </div>

        {/* Network Visualization */}
        <div className="relative" ref={networkSectionRef}>
          <div className={`bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl max-w-3xl mx-auto p-8 relative overflow-hidden min-h-[300px] transition-all duration-500 ${
            isBlurred ? 'blur-sm' : 'blur-none'
          }`}>
            <AnimatedBeamDemo/>
          </div>
        </div>
      </div>

      {/* Trust by the numbers Section */}
      <div className="max-w-6xl mx-auto px-2 pb-16" ref={trustSectionRef}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Financial Statement Inbox by the numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Statistic */}
            <div className="text-center">
              <AnimatedCounter target={60} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Reduction in Preparation Time
              </div>
            </div>
            
            {/* Second Statistic */}
            <div className="text-center">
              <AnimatedCounter target={100} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Audit Quality Standards
              </div>
            </div>
            
            {/* Third Statistic */}
            <div className="text-center">
              <AnimatedCounter target={3} suffix="+" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Major Accounting Systems Supported
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: `url(${bg2.src})` }}>
        <div className="max-w-6xl mx-auto px-2">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-16">
            <div className={`flex-1 pr-8 transform transition-all duration-1000 ease-out ${
              countersStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Still struggling with manual financial statement preparation?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Financial audit professionals and accounting firms face increasing pressure to deliver accurate, 
                compliant financial statements while managing complex regulatory requirements across multiple 
                jurisdictions. Traditional approaches involve manual trial balance imports, scattered workpapers, 
                inconsistent formatting, and extensive manual effort that leads to errors, delays, and compliance risks.
              </p>
            </div>
            
            {/* Illustration */}
            <div className={`w-80 transform transition-all duration-1000 ease-out delay-300`}>
              <Image 
                src="/images/questions_g.png"
                alt="Financial Statement Inbox"
                width={320}
                height={320}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Solution Section */}
          <div className="flex items-center space-x-8">
            {/* Solution Card */}
            <div className={`w-80 transform transition-all duration-1000 ease-out delay-500 ${
              countersStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <Image 
                src="/images/undraw.png"
                alt="Financial Statement Inbox"
                width={320}
                height={320}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Solution Description */}
            <div className={`flex-1 transform transition-all duration-1000 ease-out delay-700 ${
              countersStarted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Financial Statement Inbox Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Financial Statement Inbox streamlines the entire financial statement preparation process from 
                initial trial balance import to final statement publication. Built with the complexities of 
                modern auditing in mind, our platform ensures compliance with current accounting standards 
                (GAAP, IFRS) and regulatory requirements while reducing preparation time by up to 60% and 
                maintaining the highest standards of audit quality and professional compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Functionalities Section */}
      <div className="max-w-6xl mx-auto px-2 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Key Functionalities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial statement preparation platform with advanced audit capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Direct GL Import */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Direct GL Import</h3>
            </div>
            <p className="text-gray-600">
              Seamlessly import trial balances from major accounting systems (Tally, Zoho, Odoo, etc.) with version controls for accurate data management.
            </p>
          </div>

          {/* Multi-Entity Consolidation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <Layers className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multi-Entity Consolidation</h3>
            </div>
            <p className="text-gray-600">
              Automatically consolidate financial data across multiple entities and subsidiaries for comprehensive group reporting.
            </p>
          </div>

          {/* Customizable Layouts */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Edit3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Customizable Layouts</h3>
            </div>
            <p className="text-gray-600">
              Flexible formatting options to match client preferences and regulatory requirements with professional presentation standards.
            </p>
          </div>

          {/* Automated Footnote Generation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Automated Footnote Generation</h3>
            </div>
            <p className="text-gray-600">
              Intelligent footnote creation based on account analysis and disclosure requirements ensuring compliance and completeness.
            </p>
          </div>

          {/* Electronic Workpapers */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <FileSpreadsheet className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Electronic Workpapers</h3>
            </div>
            <p className="text-gray-600">
              Integrated workpaper management linking supporting documentation to specific line items for comprehensive audit trails.
            </p>
          </div>

          {/* Complete Change Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <GitBranch className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Complete Change Tracking</h3>
            </div>
            <p className="text-gray-600">
              Comprehensive audit trail documenting every modification, adjustment, and approval for complete transparency and compliance.
            </p>
          </div>

          {/* Review Notes & Comments */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <MessageSquare className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Review Notes & Comments</h3>
            </div>
            <p className="text-gray-600">
              Collaborative annotation system for audit team communication enabling seamless collaboration and feedback.
            </p>
          </div>

          {/* Adjustment Entries */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-lg mr-4">
                <BarChart3 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Adjustment Entries</h3>
            </div>
            <p className="text-gray-600">
              Flexible passing of adjustment entries while preparing Financial Statements with an option to flag comments to remember the trail during rollover conditions.
            </p>
          </div>

          {/* Global Notes Library */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <BookOpen className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Notes Library</h3>
            </div>
            <p className="text-gray-600">
              Setup Global Notes master based on Industries, Notes to accounts, etc. to be reused in multiple audits. Flexible to add Auditor's notes and local notes during live audit.
            </p>
          </div>
        </div>
      </div>

      <OurFeatures/>
      <HowItWorks/>
      <RegulatoryCompliance/>
      <SuccessStory/>
      
      <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bggg.src})` }}>
        <StoryCounter/>
        <SecurityReliabilitySection/>
        
        <div className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform your financial statement preparation?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Join audit professionals who have revolutionized their financial statement preparation with Financial Statement Inbox
            </p>
            <button className="bg-white text-blue-600 border border-blue-300 rounded-lg px-8 py-4 text-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Book A Demo
            </button>
          </div>
        </div>
        
        <div>
          <Footer/>
        </div>
      </section>
    </div>
  );
};

export default FinancialInboxPage;
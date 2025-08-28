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
  Zap
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
import AnimatedBeamDemoAi from '../components/animated-beam-demo';

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

const AnalyticsInboxPage = () => {
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
    { id: 1, icon: BarChart3, position: { x: 15, y: 40 }, color: 'bg-blue-500' },
    { id: 2, icon: Database, position: { x: 35, y: 25 }, color: 'bg-teal-500' },
    { id: 3, icon: TrendingUp, position: { x: 60, y: 20 }, color: 'bg-blue-600' },
    { id: 4, icon: PieChart, position: { x: 80, y: 35 }, color: 'bg-blue-400' },
    { id: 5, icon: Grid3X3, position: { x: 25, y: 65 }, color: 'bg-teal-400' },
    { id: 6, icon: Target, position: { x: 45, y: 75 }, color: 'bg-gray-500' },
    { id: 7, icon: Zap, position: { x: 75, y: 65 }, color: 'bg-blue-500' },
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
      <div className="max-w-6xl mx-auto px-2 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#213AC8] mb-6">
            Analytics Inbox: Transform Data into Actionable Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive MIS automation and business intelligence platform designed specifically for small to mid-size organizations. 
            Eliminate manual reporting processes and enhance data-driven decision making with seamless ERP integration.
          </p>
          <button className="bg-[#213AC8] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Schedule Demo
          </button>
        </div>

        {/* Network Visualization */}
        <div className="relative" ref={networkSectionRef}>
          <div className={`bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl max-w-3xl mx-auto p-8 relative overflow-hidden min-h-[300px] transition-all duration-500 ${
            isBlurred ? 'blur-sm' : 'blur-none'
          }`}>
            <AnimatedBeamDemoAi/>
          </div>
        </div>
      </div>

      {/* Trust by the numbers Section */}
      <div className="max-w-6xl mx-auto px-2 pb-16" ref={trustSectionRef}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Analytics Inbox by the numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Statistic */}
            <div className="text-center ">
              <AnimatedCounter target={90} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Reduction in Manual Reporting
              </div>
            </div>
            
            {/* Second Statistic */}
            <div className="text-center">
              <AnimatedCounter target={6} suffix="+" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                ERP Systems Supported
              </div>
            </div>
            
            {/* Third Statistic */}
            <div className="text-center">
              <AnimatedCounter target={100} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Data Privacy & Security
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
                Still struggling with manual data downloads and Excel reports?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Small to mid-size organizations face increasing pressure to make data-driven decisions, 
                but manual reporting processes consume valuable time and resources. Traditional approaches 
                involve downloading data to Excel, creating reports manually, and struggling with data 
                consistency across multiple systems. This leads to delayed insights, inconsistent reporting, 
                and missed opportunities for strategic decision-making.
              </p>
            </div>
            
            {/* Illustration */}
            <div className={`w-80 transform transition-all duration-1000 ease-out delay-300`}>
              <Image 
                src="/images/questions_g.png"
                alt="Analytics Inbox"
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
                alt="Analytics Inbox"
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
                The Analytics Inbox Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Analytics Inbox transforms raw data into actionable insights through automated report generation 
                and distribution. Seamlessly integrate with popular ERP systems including Tally.ERP9, Tally Prime, 
                SAP Business One, Microsoft NAV/Business Central, BUSY ERP, and various databases. The platform 
                is completely deployed on customer infrastructure, ensuring complete data privacy and security 
                with no data flowing outside IT boundaries.
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
            Comprehensive business intelligence suite covering sales, profitability, targets, budgets, and financial analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pivot Reports */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pivot Reports</h3>
            </div>
            <p className="text-gray-600">
              Strategic and tactical reporting with data analysis in aggregates or by groups and sub-groups using different dimensions such as Salesperson, Item Category, Item Group, Project, etc., or by time intervals like Weekly, Monthly, Quarterly.
            </p>
          </div>

          {/* Grid Reports */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <Grid3X3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Grid Reports</h3>
            </div>
            <p className="text-gray-600">
              Operational reporting and analysis of individual transactions with detailed drill-down capabilities, advanced filtering and sorting options for operational teams.
            </p>
          </div>

          {/* Dynamic Dashboard Creation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dynamic Dashboard Creation</h3>
            </div>
            <p className="text-gray-600">
              Visualize data using different widgets such as tables, grids, pivots, charts, cards, heat maps, and pies. Interactive dashboards with simple drag and drop designing capabilities.
            </p>
          </div>

          {/* Real-Time Data Visualization */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Data Visualization</h3>
            </div>
            <p className="text-gray-600">
              Information management tool that visually analyzes KPIs and key data points to monitor the health of an organization, specific departments, or processes simultaneously.
            </p>
          </div>

          {/* Multi-Database Connectivity */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multi-Database Connectivity</h3>
            </div>
            <p className="text-gray-600">
              Connect to various data sources including MySQL, Oracle, SQL Server, SAP HANA, ODBC, SQLite, and other databases for consolidated reporting across multiple systems.
            </p>
          </div>

          {/* Drag-and-Drop Report Builder */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Drag-and-Drop Report Builder</h3>
            </div>
            <p className="text-gray-600">
              Comprehensive data modelling feature set using zero code principles and basic SQL modelling. Developers, IT department users and super users can quickly add new reports.
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
              Ready to transform your data analytics?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Join organizations who have revolutionized their reporting processes with Analytics Inbox
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

export default AnalyticsInboxPage;
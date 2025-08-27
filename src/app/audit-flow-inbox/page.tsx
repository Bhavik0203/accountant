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
  BookOpen,
  Monitor,
  Users,
  FolderOpen,
  Eye,
  DollarSign,
  TrendingDown,
  Calendar,
  MapPin
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

const AuditFlowInboxPage = () => {
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
    { id: 1, icon: Monitor, position: { x: 15, y: 40 }, color: 'bg-blue-500' },
    { id: 2, icon: Users, position: { x: 35, y: 25 }, color: 'bg-teal-500' },
    { id: 3, icon: TrendingUp, position: { x: 60, y: 20 }, color: 'bg-blue-600' },
    { id: 4, icon: FolderOpen, position: { x: 80, y: 35 }, color: 'bg-blue-400' },
    { id: 5, icon: Eye, position: { x: 25, y: 65 }, color: 'bg-teal-400' },
    { id: 6, icon: DollarSign, position: { x: 45, y: 75 }, color: 'bg-gray-500' },
    { id: 7, icon: Calendar, position: { x: 75, y: 65 }, color: 'bg-blue-500' },
    { id: 8, icon: MapPin, position: { x: 85, y: 50 }, color: 'bg-teal-500' }
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
            Audit Flow Inbox: Streamline Your Audit Lifecycle
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A cloud-based audit management platform designed to streamline the entire audit lifecycle for firms and internal audit departments. 
            Integrate audit planning, execution, documentation, and reporting in one unified platform.
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
            Audit Flow Inbox by the numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Statistic */}
            <div className="text-center">
              <AnimatedCounter target={40} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Reduction in Engagement Time
              </div>
            </div>
            
            {/* Second Statistic */}
            <div className="text-center">
              <AnimatedCounter target={100} suffix="%" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Unified Platform Coverage
              </div>
            </div>
            
            {/* Third Statistic */}
            <div className="text-center">
              <AnimatedCounter target={24} suffix="/7" shouldStart={countersStarted} />
              <div className="text-lg text-gray-600">
                Real-Time Collaboration
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
                Still managing audits with scattered tools and manual processes?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Audit teams face increasing pressure to deliver higher quality audits while managing complex 
                multi-jurisdictional workflows, scattered documentation, and inefficient communication processes. 
                Traditional audit management involves disconnected tools, manual progress tracking, inconsistent 
                documentation, and extensive coordination efforts that lead to delays, errors, and reduced audit quality.
              </p>
            </div>
            
            {/* Illustration */}
            <div className={`w-80 transform transition-all duration-1000 ease-out delay-300`}>
              <Image 
                src="/images/questions_g.png"
                alt="Audit Flow Inbox"
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
                alt="Audit Flow Inbox"
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
                The Audit Flow Inbox Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Audit Flow Inbox integrates audit planning, execution, documentation, and reporting in one unified 
                cloud-based platform. Our solution enables audit teams to deliver higher quality audits while reducing 
                engagement time by up to 40%. With multi-jurisdictional audit workflows, real-time collaboration, 
                and comprehensive audit trail management, teams can focus on delivering exceptional audit services.
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
            Comprehensive audit management platform with advanced workflow and collaboration capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
            </div>
            <p className="text-gray-600">
              Live status updates for all active audits with color-coded progress indicators and milestone tracking, providing a bird's eye view on multiple open audits for better work distribution analysis.
            </p>
          </div>

          {/* Audit Room */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Audit Room</h3>
            </div>
            <p className="text-gray-600">
              Create, assign, monitor, review & automate multi-jurisdictional audit workflows with simultaneous editing capabilities, live cursor tracking, change notifications, and integrated communication tools.
            </p>
          </div>

          {/* Work Paper Repository */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <FolderOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Work Paper Repository</h3>
            </div>
            <p className="text-gray-600">
              Entire audit working papers saved automatically with powerful data encryption ensuring enhanced data protection. Includes data sharing features to clients based on role permissions.
            </p>
          </div>

          {/* Peer Review */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Peer Review</h3>
            </div>
            <p className="text-gray-600">
              One-click peer reviewer assignment with instant data sharing. Manage communication between auditors and peer review auditors ensuring smooth, transparent, and well-documented review processes.
            </p>
          </div>

          {/* Invoicing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Invoicing</h3>
            </div>
            <p className="text-gray-600">
              Intelligent invoice creation based on timesheet data, engagement budgets, and multiple billing arrangements. Includes invoice requisition requests based on milestones achieved during audit progress.
            </p>
          </div>

          {/* Profitability Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Profitability Analysis</h3>
            </div>
            <p className="text-gray-600">
              Live profitability calculations showing actual vs. budgeted profits with detailed cost analysis breakdown. Enables effective staff utilization analysis, capacity planning, and efficiency metrics.
            </p>
          </div>

          {/* Reporting */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Reporting</h3>
            </div>
            <p className="text-gray-600">
              Scheduled report generation and distribution with customizable frequency and recipient management. Includes custom report building for management MIS and comprehensive audit reporting.
            </p>
          </div>

          {/* Timesheet with Geo Location */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Timesheet with Geo Location</h3>
            </div>
            <p className="text-gray-600">
              Automatic location capture and client site recognition with geofencing capabilities for accurate time tracking. Includes automated approval workflows and compliance controls for billing and expense modules.
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
              Ready to transform your audit management?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Join audit teams who have revolutionized their audit lifecycle with Audit Flow Inbox
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

export default AuditFlowInboxPage;
'use client'

import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import secimage2 from '../../../public/images/Rectangle 1.png';
import bg2 from '../../../public/images/bg2.png';

const FinancialSuiteLanding = () => {
  const [selectedTool, setSelectedTool] = useState(0);

  const toolsData = [
    {
      name: "Compliance Management Software",
      description: "Stay ahead of evolving regulations with automated alerts, audit trails, and customizable compliance workflows that reduce risk and ensure peace of mind.",
      image: "/images/Rectangle 1.png", // Using existing image from public folder
    
    },
    {
      name: "Audit Management Software",
      description: "Streamline your audit processes with comprehensive workflow management, real-time collaboration tools, and automated reporting that ensures accuracy and compliance.",
      image: "/images/Rectangle2.png",
     
    },
    {
      name: "Financial Statement Software",
      description: "Generate professional financial statements with advanced reporting capabilities, automated calculations, and customizable templates that meet industry standards.",
      image: "/images/Rectangle3.png",
     
    },
    {
      name: "Audit Flow Inbox",
      description: "Centralize your audit workflow with an intelligent inbox that prioritizes tasks, tracks progress, and ensures nothing falls through the cracks.",
      image: "/images/Rectangle4.png",
     
    }
  ];

  const currentTool = toolsData[selectedTool];

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg2.src})` }}>
    
    <div className="min-h-screen max-w-6xl mx-auto py-20 ">
      
      {/* Header Section */}
      <motion.div 
        className='flex justify-between gap-4 mb-12 p-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#213AC8] leading-tight">
              
            Explore Our 
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#303030] leading-tight">
              
          Suite of Tools
          </h3>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-600 leading-relaxed max-w-2xl text-base">
            Discover a comprehensive set of software modules designed to meet the 
            specialized needs of finance professionals. Each module is purpose-built 
            to simplify complex processes, save time, and increase accuracy across 
            your practice or firm.
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex gap-8 ">
        {/* Left Sidebar */}
        <div className="w-1/2  rounded-2xl  ">
          <div className="space-y-6">
            {toolsData.map((tool, index) => (
              <div
                key={index}
                onClick={() => setSelectedTool(index)}
                className={`flex items-center justify-between p-8 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedTool === index 
                    ? 'bg-gradient-to-r from-blue-200 to-blue-50 text-blue-700 shadow-md border border-blue-200' 
                    : 'hover:bg-gray-50 bg-white text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-200'
                }`}
              >
                <span className="text-base font-semibold">{tool.name}</span>
                {selectedTool === index ? (
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-1/2">
          <div className="max-w-4xl">
            {/* Main Feature Section */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedTool}
                className=" rounded-3xl  overflow-hidden "
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut"
                }}
              >
                {/* Header */}
                <div className="px-10 pb-8">
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.15 }}
                  >
                    {currentTool.name}
                  </motion.h3>
                  
                  {/* Interactive Demo Area */}
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.15 }}
                  >
                    <Image src={currentTool.image} alt={currentTool.name} width={1000} height={1000} />
                  </motion.div>
                </div>

                {/* Description */}
                <div className="px-10 pb-10">
                  <motion.p 
                    className="text-gray-600 mb-8 leading-relaxed text-lg"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.15 }}
                  >
                    {currentTool.description}
                  </motion.p>
                  
                  <motion.button 
                    className="inline-flex  cursor-pointer items-center space-x-3 text-[#213AC8] hover:text-blue-700 font-semibold transition-colors group border-2 border-[#213AC8] rounded-xl px-6 py-3 hover:bg-blue-50 hover:shadow-md"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FinancialSuiteLanding;
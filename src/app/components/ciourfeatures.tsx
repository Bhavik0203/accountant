"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bg2 from '../../../public/images/bg2.png';

export default function OurFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const features = [
    {
      title: "Work Room",
      description: "Create, Assign, Monitor, Review & Automate the progress of various multi-jurisdictional compliances ensuring effective resources engagement towards the deliverables to avoid potential regulatory fines.",
      features: [
        "Multi-jurisdictional compliance management",
        "Automated progress tracking"
      ]
    },
    {
      title: "Pre-defined Workflows",
      description: "Over 200 multi-jurisdictional compliance programs with ready-to-use templates to help you kickstart your compliance management journey in line with government guidelines.",
      features: [
        "200+ compliance program templates",
        "Approval matrix & activity chat"
      ]
    },
    {
      title: "Centralized Data Repository",
      description: "All working files are automatically saved in a secure, encrypted environment to ensure the highest level of protection for sensitive financial data.",
      features: [
        "Secure encrypted environment",
        "Role-based controlled sharing"
      ]
    },
    {
      title: "Document Drop Room",
      description: "Designed specially for clients to send recurring data to accountants ensuring zero dependency on data sharing through emails.",
      features: [
        "Secure client data sharing",
        "Chat on subject feature"
      ]
    },
    {
      title: "Invoicing",
      description: "Accountant can create E-Invoices and can send the same through WhatsApp to their respective clients. Module can be integrated with API in various accounting applications.",
      features: [
        "E-Invoice creation & WhatsApp delivery",
        "API integration with accounting apps"
      ]
    },
    {
      title: "Profitability Analysis",
      description: "Management can run profitability analysis across each project to understand whether a certain job is under profit or loss by automated comparison of standard cost & actual cost.",
      features: [
        "Automated cost comparison",
        "Timesheet-based calculations"
      ]
    },
    {
      title: "Notification System",
      description: "Stakeholders can setup Notifications carrying information of various statutes or amendments and can send the same as customized notifications.",
      features: [
        "Statute & amendment alerts",
        "Customized notification setup"
      ]
    },
    {
      title: "Timesheet",
      description: "Employees can capture their times for each project allocated to them with their exact Geo Locations for accurate time tracking and project management.",
      features: [
        "Project-based time tracking",
        "Geo-location verification"
      ]
    },
    {
      title: "Ci Calendar & Event",
      description: "An SME can setup all the compliances along with their due dates to be displayed in Dashboard keeping all the departments informed about upcoming due dates of various jurisdictions.",
      features: [
        "Compliance due date tracking",
        "Multi-department notifications"
      ]
    }
  ];

  const totalSlides = Math.ceil(features.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getVisibleFeatures = () => {
    const startIndex = currentSlide * 3;
    return features.slice(startIndex, startIndex + 3);
  };

  const toggleCardExpansion = (cardIndex: number) => {
    const globalIndex = currentSlide * 3 + cardIndex;
    setExpandedCards(prev => 
      prev.includes(globalIndex) 
        ? prev.filter(index => index !== globalIndex)
        : [...prev, globalIndex]
    );
  };

  const isCardExpanded = (cardIndex: number) => {
    const globalIndex = currentSlide * 3 + cardIndex;
    return expandedCards.includes(globalIndex);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${bg2.src})` }}>
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Features
        </motion.h2>
        
        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards Container */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={currentSlide} // Force re-render when slide changes
          >
            {getVisibleFeatures().map((feature, index) => (
              <motion.div 
                key={`${currentSlide}-${index}`}
                className="bg-gray-200 rounded-lg p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-gray-900"
                  whileHover={{ color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Points - Hidden by default, shown when expanded */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isCardExpanded(index) ? "auto" : 0,
                    opacity: isCardExpanded(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Read More Button */}
                <motion.button 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggleCardExpansion(index)}
                >
                  {isCardExpanded(index) ? 'Read Less' : 'Read More'}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
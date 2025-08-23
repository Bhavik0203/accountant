"use client"
import { motion } from 'framer-motion';
import bg2 from '../../../public/images/bg2.png';

export default function OurFeatures() {
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

  return (
    <div className="bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${bg2.src})` }}>
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Features
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-gray-200 rounded-lg p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-900"
              whileHover={{ color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              Gain complete visibility in an instant
            </motion.h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Real-time dashboards turn complex data into actionable insights, providing executive-level visibility 
              into compliance health, upcoming deadlines, and performance metrics
            </p>
            <ul className="space-y-2 mb-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Real-time insights on a single screen</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Performance metrics and deadline tracking</span>
              </motion.li>
            </ul>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-gray-200 rounded-lg p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-900"
              whileHover={{ color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              Collaborate effortlessly on every task
            </motion.h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dedicated workspaces are designed for compliance projects, with structured workflows, task assignment, 
              and communication tools all in one place. Improve team productivity by 60% through enhanced collaboration
            </p>
            <ul className="space-y-2 mb-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Structured workflows and task assignment</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Integrated communication for seamless teamwork</span>
              </motion.li>
            </ul>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-gray-200 rounded-lg p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-900"
              whileHover={{ color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              Keep all your documents audit-ready.
            </motion.h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Automatically classify, organize, and manage all your compliance evidence in a centralized repository. 
              Advanced search and comprehensive version control ensure your documents are always audit-ready. Reduce 
              audit preparation time by 80%
            </p>
            <ul className="space-y-2 mb-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Automated document classification and storage</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Advanced search and version control</span>
              </motion.li>
            </ul>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            className="bg-gray-200 rounded-lg p-8 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-900"
              whileHover={{ color: "#2563eb" }}
              transition={{ duration: 0.2 }}
            >
              Universal compliance, no manual work
            </motion.h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our ERP-agnostic integration ensures seamless compliance with all regional e-invoicing regulations. 
              Automated submission to government portals means you achieve 100% e-invoicing compliance with zero 
              manual intervention
            </p>
            <ul className="space-y-2 mb-6">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Seamless integration with any ERP system</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Automated submission to government portals</span>
              </motion.li>
            </ul>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Read More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}